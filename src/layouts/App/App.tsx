import Workspace from "@layouts/workspace";
import Login from "@pages/Login";
import SignUp from "@pages/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";

const App = () => {
    const user = true;

    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace={true}/>}></Route>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/workspace" element={<Workspace />} />
            </Routes>
        </>
    )
}

export default App;