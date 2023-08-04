import Logout from "@components/Logout";
import { Link } from "react-router-dom";

const Navigation = () => {

    return (
        <ul>
            <li>
                <Link to="/workspace/Chatting">채팅 페이지</Link>
            </li>
            <li>
                <Link to="/workspace/ChatList">채팅 리스트</Link>
            </li>
            <li>
                <Link to="/workspace/MemberList">멤버 리스트</Link>
            </li>
            <li>
                <Logout />
            </li>
        </ul>
    )
}

export default Navigation;