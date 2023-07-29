import { useCallback } from "react";
import { postFetcher } from "@utils/fetcher";

const Login = () => {

    const dummy = {
        id: 'cksdlr7446',
        pw: 3016
    }

    const submit = useCallback(() => {
        const data = postFetcher('api/v1/public/user/login', dummy);
        console.log(data);
        
        
    }, [])

    return <>
        <button onClick={submit}>로그인</button>
    </>
}

export default Login;