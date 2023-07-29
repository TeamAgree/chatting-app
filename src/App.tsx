import Navigation from "@components/Navigation";
import Login from "@pages/Login";
import Main from "@pages/Main";
import SignUp from "@pages/SignUp";
import { Route, Routes } from "react-router-dom";

const App = () => {


    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </>
    )
}

export default App;