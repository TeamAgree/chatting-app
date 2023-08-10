import Navigation from "@components/Navigation";
import ChatList from "@pages/ChatList";
import Chatting from "@pages/Chatting";
import MemberList from "@pages/MemberList";
import { Route, Routes } from "react-router-dom";

const Workspace = () => {

    return (
        <>
            <Navigation />
            <div>
                <h2>워크스페이스 페이지!</h2>
            </div>
            <Routes>
                <Route path="/Chatting" element={<Chatting />}></Route>
                <Route path="/ChatList" element={<ChatList />}></Route>
                <Route path="/MemberList" element={<MemberList />}></Route>
            </Routes>
        </>
    )
}

export default Workspace;