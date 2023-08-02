import React, { useCallback, useEffect, useState } from "react";
import useInput from "@hooks/useInput";
import { LoginWrap, Form } from "./styles";
import { Link, Navigate } from "react-router-dom";
import { LoginProps } from "@typings/db";
import { customAxios } from "@utils/customAxios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { UserAtom } from "@recoil/UserAtom";
import { IsLoginAtom } from "@recoil/IsLoginAtom";

const Login = () => {

    const [ id, onChnageId ] = useInput('');
    const [ password, onChangePW ] = useInput('');
    const [ isError, setIsError ] = useState(false);
    const [ errorText, setErrorText ] = useState('');
    const setIsLogin = useSetRecoilState(IsLoginAtom);
    const isLogin = useRecoilValue(IsLoginAtom);

    const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsError(false);
        setErrorText('');

        if (!id) {
            setIsError(true);
            setErrorText('아이디 입력하세요.');
            return;
        }
        if (!password) {
            setIsError(true);
            setErrorText('비밀번호 입력하세요.');
            return;
        }

        const data: LoginProps = {id, pw: password};
        const loginData = async () => {
            const resData = await customAxios('post', '/api/v1/public/user/login', data);
            if (resData?.status === 200) {
                localStorage.setItem("token",resData.data.result);
                setIsLogin(() => resData.data.result);
                return <Navigate to="/workspace" replace={true}/>
            }
        }
        
        loginData();
        
    }, [ id, password ]);

    useEffect(() => {
        setIsError(false);
        setErrorText('');
    }, [ id, password ])

    if(isLogin) {
        console.log(isLogin);
        
        return (
            <Navigate to="/workspace" replace={true} />
        )
    }

    return (
        <LoginWrap>
            <div className="container">
                <Form onSubmit={onSubmit}>
                    <input type="text" name="id" placeholder="ID" value={id} onChange={onChnageId} />
                    <input type="password" name="password" placeholder="PASSWORD" value={password} onChange={onChangePW}/>
                    <button type="submit">로그인</button>
                    {isError && <p>{errorText}</p>}
                </Form>
                <Link to="/signup">회원가입</Link>
            </div>
        </LoginWrap>
    )
}

export default Login;