import React, { useCallback, useState } from "react";
import { postFetcher } from "@utils/fetcher";
import useInput from "@hooks/useInput";
import { LoginWrap, Form } from "./styles";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {

    const [ id, onChnageId ] = useInput('');
    const [ password, onChangePW ] = useInput('');

    const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = { id, pw: password };
        
        axios.post('/api/v1/public/user/login', data);
        
        
    }, [id, password])

    

    return (
        <LoginWrap>
            <div className="container">
                <Form onSubmit={onSubmit}>
                    <input type="text" name="id" placeholder="ID" value={id} onChange={onChnageId} />
                    <input type="password" name="password" placeholder="PASSWORD" value={password} onChange={onChangePW}/>
                    <button type="submit">로그인</button>
                </Form>
                <Link to="/signup">회원가입</Link>
            </div>
        </LoginWrap>
    )
}

export default Login;