import AuthLayout from "@layouts/AuthLayout";
import PublicLayout from "@layouts/PublicLayout";
import Workspace from "@layouts/workspace";
import LoginPage from "@pages/PublicPages/LoginPage";
import NotFound from "@pages/NotFound";
import SignUpPage from "@pages/PublicPages/SignUpPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./style";
import Test from "@pages/PublicPages/test";

const App = () => {

    return (
        <>
            <GlobalStyle />
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<Navigate to='/login' replace={true} />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/test" element={<Test />} />
                </Route>
                <Route element={<AuthLayout />}>
                    <Route path="/workspace/*" element={<Workspace />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App;