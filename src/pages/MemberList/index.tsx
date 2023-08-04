import { UserAtom } from "@recoil/UserAtom";
import { UserTokenAtom } from "@recoil/UserTokenAtom";
import { useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

const MemberList = () => {

    const user = useRecoilValue(UserAtom);
    const userTokenRecoil = useRecoilValue(UserTokenAtom);

    const memberData = {
        id: 'cksdlr7446',
        name: '안찬익',
        birth: 930316
    }

    // const onAddMember = useCallback(() => {
    //     setUser((prev) => [
    //         ...prev,
    //         memberData
    //     ])
        
    // }, [user])


    return (
        <div>
            <button>멤버추가</button>
            {user.length > 0 && user?.map(v => (
                v.id
            ))}
        </div>
    )
}

export default MemberList;