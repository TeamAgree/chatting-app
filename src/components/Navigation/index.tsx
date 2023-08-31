import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {

    return (
        <ul>
            <li>
                <Link to="/workspace/chat">채팅 리스트</Link>
            </li>
            <li>
                <Link to="/workspace/friend">친구 리스트</Link>
            </li>
            <li>
                <Link to="/workspace/setting">설정</Link>
            </li>
            {/* <li>
                <Link to="/workspace/myinfo">내 정보</Link>
            </li> */}
            {/* <li>
                <Logout />
            </li> */}
        </ul>
    )
}

export default React.memo(Navigation);