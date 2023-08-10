import React, { useCallback, useEffect, useState } from "react";
import useInput from "@hooks/useInput";
import { Link, Navigate } from "react-router-dom";
import { SignUpProps } from "@typings/db";
import { SignUpWrap, Form } from "@pages/LoginPage/styles";
import { customAxios } from "@utils/customAxios";

const SignUpPage = () => {
    const getUserToken = localStorage.getItem('token');

    const [ id, onChnageId ] = useInput('');
    const [ password, onChangePassWord ] = useInput('');
    const [ name, onChangeName ] = useInput('');
    const [ birth, onChangeBirth ] = useInput('');

    const [ isError, setIsError ] = useState(false);
    const [ errorText, setErrorText ] = useState('');
    const [ isSuccess, setIsSuccess ] = useState(false);
    const [ successText, setSuccessText ] = useState('');
    const [ successTimer, setSuccessTimer ] = useState(3);

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
        if (!name) {
            setIsError(true);
            setErrorText('이름을 입력하세요.');
            return;
        }
        if (!birth) {
            setIsError(true);
            setErrorText('생일을 입력하세요.');
            return;
        }

        const data: SignUpProps = { id, pw: password, name, birth };
        const signUpData = async () => {
            const resData = await customAxios('post', '/api/v1/public/user/join', data, null);
            if (resData?.data.code === "SUCCESS") {
                setIsSuccess(true);
                setSuccessText('초 후 로그인 페이지로 이동합니다.');
            }
            
        }
        
        signUpData();
        
    }, [id, password, name, birth]);


    return (
        <SignUpWrap>
            <div className="container">
                <Form onSubmit={onSubmit}>
                    <input type="text" name="id" placeholder="ID" value={id} onChange={onChnageId} />
                    <input type="password" name="password" placeholder="PASSWORD" value={password} onChange={onChangePassWord}/>
                    <input type="text" name="name" placeholder="NAME" value={name} onChange={onChangeName}/>
                    <input type="number" name="birth" placeholder="BIRTH" value={birth} onChange={onChangeBirth}/>
                    <button type="submit">회원가입</button>
                    {isError && <p>{errorText}</p>}
                    {isSuccess && <p>{successTimer} {successText}</p>}
                </Form>
                <Link to="/login">로그인하러 가기</Link>
            </div>
        </SignUpWrap>
    )
}

export default SignUpPage;