import Logout from "@components/Logout";
import { Link } from "react-router-dom";

const Navigation = () => {

    return (
        <ul>
            <li>
                <Link to="/workspace/memberList">멤버 리스트</Link>
            </li>
            <li>
                <Link to="/workspace/chatList">채팅 리스트</Link>
            </li>
            <li>
                <Link to="/workspace/chatting">채팅 페이지</Link>
            </li>
            <li>
                <Link to="/workspace/myinfo">내 정보</Link>
            </li>
            <li>
                <Logout />
            </li>
        </ul>
    )
}

export default Navigation;