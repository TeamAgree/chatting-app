import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import useInput from "@hooks/useInput";
import { LoginProps } from "@typings/db";
import { LoginWrap, Form } from "./styles";
import { AccessTokenAtom } from "@recoil/AccessTokenAtom";
import axios, { AxiosRequestConfig } from "axios";

const LoginPage = () => {

    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [isError, setIsError] = useState(false);
    const [errorText, setErrorText] = useState('');

    const setAccessTokenAtom = useSetRecoilState(AccessTokenAtom);

    const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
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

        const postAxiosConfig: AxiosRequestConfig = {

            method: "POST",
            url: "/api/v1/public/user/login",
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        };

        try {
            const res = await axios.request(postAxiosConfig);

            if (res?.data.code === 100) {
                setAccessTokenAtom(res.data.result);
            } else {
                if (res.data.code === 101) {
                    setIsError(true)
                    setErrorText('아이디 또는 비밀번호를 확인해 주세요.');
                }
                
                throw res;

            }
        }
        catch (e) {
            console.error(e);

        }

    }, [id, password]);

    useEffect(() => {
        setIsError(false);
        setErrorText('');
    }, [id, password])

    return (
        <LoginWrap>
            <div className="container">
                <Form onSubmit={onSubmit}>
                    <input type="text" name="id" placeholder="ID" value={id} onChange={onChangeId} />
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