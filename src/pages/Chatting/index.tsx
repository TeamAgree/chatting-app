import { UserAtom } from "@recoil/UserAtom";
import { useRecoilState } from "recoil";


const Chatting = () => {

    const [user, setUser] = useRecoilState(UserAtom);
    console.log(user);
    

    return <div>채팅 갯수: {user.length}</div>
}

export default Chatting;