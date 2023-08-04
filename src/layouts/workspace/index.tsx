import Navigation from "@components/Navigation";
import ChatList from "@pages/ChatList";
import Chatting from "@pages/Chatting";
import MemberList from "@pages/MemberList";
import { UserTokenAtom } from "@recoil/UserTokenAtom";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSetRecoilState } from "recoil";

const Workspace = () => {
    
    const getUserToken = localStorage.getItem('token');
    const setUserTokenRecoil = useSetRecoilState(UserTokenAtom);
    
    useEffect(() => {
        // TODO => !: 어선셜 연산자
        setUserTokenRecoil(() => getUserToken!);
    }, [])


    if (!getUserToken) {
        return <Navigate to="/login" replace={true}/>
    }
    
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