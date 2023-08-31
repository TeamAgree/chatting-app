import Logout from "@components/Logout";
import { Link } from "react-router-dom";

const SettingPage = () => {
    return (
        <div>
            <div>
                <ul>
                    <li>
                        <Link to="/workspace/setting/myProfile">내 프로필</Link>
                    </li>
                    <li>
                        <Link to="/workspace/setting/resetPassword">비밀번호 변경</Link>
                    </li>
                    <li>
                        <Logout />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SettingPage;