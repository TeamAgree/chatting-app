import Login from "@pages/Login";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <ul>
            <li>
                <Link to="/login">로그인</Link>
            </li>
            <li>
                <Link to="/signup">회원가입</Link>
            </li>
            <li>
                <Link to="/main">메인페이지</Link>
            </li>
        </ul>
    )
}

export default Navigation;