import React, { useCallback, useEffect, useState } from "react";
import useInput from "@hooks/useInput";
import { LoginWrap, Form } from "./styles";
import { Link, Navigate } from "react-router-dom";
import { LoginProps } from "@typings/db";
import { customAxios } from "@utils/customAxios";
import { useSetRecoilState } from "recoil";
import { UserTokenAtom } from "@recoil/UserTokenAtom";

const Login = () => {

    const getUserToken = localStorage.getItem('token');

    const [ id, onChnageId ] = useInput('');
    const [ password, onChangePW ] = useInput('');
    const [ isError, setIsError ] = useState(false);
    const [ errorText, setErrorText ] = useState('');

    const setUserToken = useSetRecoilState(UserTokenAtom);

    const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsError(false);
        setErrorText('');

        if (!id) {
            setIsError(true);
            setErrorText('아이디를 입력하세요.');
            return;
        }
        if (!password) {
            setIsError(true);
            setErrorText('비밀번호를 입력하세요.');
            return;
        }

        const data: LoginProps = {id, pw: password};
        const loginData = async () => {
            const resData = await customAxios('post', '/api/v1/public/user/login', data, null);
            
            if (resData?.data.code === "SUCCESS") {
                localStorage.setItem("token",resData.data.result);
                setUserToken(() => resData.data.result);

                return <Navigate to="/workspace" replace={true}/>
            }
        }
        
        loginData();
        
    }, [ id, password ]);

    useEffect(() => {
        setIsError(false);
        setErrorText('');
    }, [ id, password ])

    if(getUserToken) {
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