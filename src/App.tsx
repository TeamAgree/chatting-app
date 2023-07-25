import Login from "@pages/Login";
import SignUp from "@pages/SignUp";
import { postFetcher } from "@utils/fetcher";

const App = () => {
    console.log(process.env);
    const dummy = {
        id: 'cksdlr7446',
        pw: 3016
    }
    const data = postFetcher('api/v1/public/user/login', dummy)
    console.log(data);
    

    return (
        <>
            <Login />
            <SignUp />
        </>
    )
}

export default App;