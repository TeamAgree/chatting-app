import React, { useCallback, useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import useInput from "@hooks/useInput";
import { LoginProps } from "@typings/db";
import { customAxios } from "@utils/customAxios";
import { UserTokenAtom } from "@recoil/UserTokenAtom";
import { LoginWrap, Form } from "./styles";
import { getCookie } from "@utils/Cookie";

const LoginPage = () => {

    const cookie = getCookie('chatting-app');
    console.log(cookie);
    

    const [id, onChnageId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [isError, setIsError] = useState(false);
    const [errorText, setErrorText] = useState('');

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

        const data: LoginProps = { id, pw: password };
        const loginData = async () => {
            try {
                const resData = await customAxios('post', '/api/v1/public/user/login', data, null);

                if (resData?.data.code === "SUCCESS") {

                    return <Navigate to="/workspace" replace={true} />
                } else {
                    throw resData;

                }
            } catch (e) {
                console.log(e);
                setIsError(true);
                setErrorText('비밀번호를 입력하세요.');
            }

        }

        loginData();

    }, [id, password]);

    useEffect(() => {
        setIsError(false);
        setErrorText('');
    }, [id, password])

    // if (state) {
    //     navigate(state);
    // } else {
    //     navigate("/workspace");
    // }

    return (
        <LoginWrap>
            <div className="container">
                <Form onSubmit={onSubmit}>
                    <input type="text" name="id" placeholder="ID" value={id} onChange={onChnageId} />
                    <input type="password" name="password" placeholder="PASSWORD" value={password} onChange={onChangePassword} />
                    <button type="submit">로그인</button>
                    {isError && <p>{errorText}</p>}
                </Form>
                <Link to="/signup">회원가입</Link>
            </div>
        </LoginWrap>
    )
}

export default LoginPage;