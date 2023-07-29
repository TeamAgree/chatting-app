import { postFetcher } from "@utils/fetcher";
import { useCallback, useState } from "react";

const SignUp = () => {

    const dummy = {
        id: 'cksdlr7446',
        pw: 3016,
        name: '안찬익',
        birth: 930316
    }

    const submit = useCallback( () => {
        const joinData = postFetcher('api/v1/public/user/join', dummy);
        console.log(joinData);

        
        
    }, [])

    return <>
        <button onClick={submit}>회원가입</button>
    </>
}

export default SignUp;