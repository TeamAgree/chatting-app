import Navigation from "@components/Navigation";
import ChattingListPage from "@pages/AuthPages/ChattingListPage";
import FriendListPage from "@pages/AuthPages/FriendListPage";
import MyProfilePage from "@pages/AuthPages/MyProfilePage";
import ResetPasswordPage from "@pages/AuthPages/ResetPasswordPage";
import SettingPage from "@pages/AuthPages/SettingPage";
import NotFound from "@pages/NotFound";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { HeaderWrap, MainWrap, WorkspaceWrap } from "./styles";

const Workspace = () => {

    return (
        <Suspense fallback={<p>로딩중...</p>}>
            <WorkspaceWrap>
                <HeaderWrap>
                    <Navigation />
                </HeaderWrap>
                <MainWrap>
                    <Routes>
                        <Route path="/chat" element={<ChattingListPage />}></Route>

                        <Route path="/friend" element={<FriendListPage />}></Route>

                        <Route path="/setting" element={<SettingPage />}></Route>
                        <Route path="/setting/myProfile" element={<MyProfilePage />} />
                        <Route path="/setting/resetPassword" element={<ResetPasswordPage />} />

                        <Route path="/*" element={<NotFound />}></Route>
                    </Routes>
                </MainWrap>
            </WorkspaceWrap>
        </Suspense>
    )
}

export default React.memo(Workspace);