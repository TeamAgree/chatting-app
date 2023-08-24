import { AccessTokenAtom } from "@recoil/AccessTokenAtom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

const MemberList = () => {
    const AccessToken = useRecoilValue(AccessTokenAtom);
    const [member, setMember] = useState([]);

    useEffect(() => {
        axios.get('/api/v1/private/friend', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${AccessToken}`
            }
        })
            .then(
                res => setMember(res.data.result)
            )
            .catch(error => console.error(error))
    }, [])


    return (
        <div>
            {
                member.length > 0 ?
                    (
                        member.map((item, i: number) => <div key={i}>{item}</div>)
                    ) : (
                        <h4>친구 추가해 보시던가</h4>
                    )
            }
            <button>멤버추가</button>
        </div>
    )
}

export default MemberList;