import React, { useCallback, useEffect, useState } from "react";
import useInput from "@hooks/useInput";
import { Link, Navigate } from "react-router-dom";
import { SignUpProps } from "@typings/db";
import { SignUpWrap, Form } from "@pages/PublicPages/LoginPage/styles";
import axios, { AxiosRequestConfig } from "axios";
import { useSetRecoilState } from "recoil";
import { EmailValidation } from "@utils/validation";

const SignUpPage = () => {

    // const [id, onChangeId] = useInput('');
    const [email, setEmail] = useState('');
    const [password, onChangePassWord] = useInput('');
    // const [passwordCheck, onChangePassWordCheck] = useInput('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [name, onChangeName] = useInput('');
    const [nickName, onChangeNickname] = useInput('');
    const [birth, onChangeBirth] = useInput('');
    const [phoneNumber, onPhoneNumber] = useInput('');

    const [isError, setIsError] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [successText, setSuccessText] = useState('');
    const [isDoubleCheckId, setIsDoubleCheckId] = useState(false);
    const [isDoubledCheckText, setIsDoubleCheckText] = useState('');
    const [isEmailFormText, setIsEmailFormText] = useState('');
    const [isEmailForm, setIsEmailForm] = useState(true);

    let timeout: NodeJS.Timeout | undefined;

    const onChangeId = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {

        setEmail(e.target.value);
        const isEmailCheck = EmailValidation(e.target.value);

        if (e.target.value === '') {
            setIsEmailForm(true);
            return;
        };

        if (!isEmailCheck) {
            setIsEmailForm(isEmailCheck);
            setIsEmailFormText('이메일 형식으로 작성해 주세요.');
            return;
        } else {
            setIsEmailForm(isEmailCheck);
        }

        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(async () => {
            const getAxiosConfig: AxiosRequestConfig = {
                method: "GET",
                url: `${process.env.PUBLIC_BASE_URL}/user/double-check/${e.target.value}`,
            };

            try {
                const res = await axios.request(getAxiosConfig);

                if (res?.data.code === 100) {
                    setIsDoubleCheckId(true);
                    setIsDoubleCheckText(res?.data.result);
                } else {
                    throw res;
                }

            }
            catch (e) {
                console.error(e);
            }
        }, 300)

    }, []);

    const onChangePassWordCheck = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {

        setPasswordCheck(e.target.value);
        console.log('1', password);
        console.log('w', e.target.value);

        if (password !== e.target.value) {
            console.log('다름');

            return;
        }
    }, [])

    const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsError(false);
        setErrorText('');

        console.log(isDoubleCheckId);

        // if(!isDoubleCheckId) {
        //     setIsError(true);
        //     setErrorText('이메일 중복확인이 필요합니다.');
        //     return;
        // }
        if (!email) {
            setIsError(true);
            setErrorText('이메일을 입력하세요.');
            return;
        }
        if (!isEmailForm) {
            setIsEmailForm(false);
            setIsEmailFormText('이메일 형식으로 작성해 주세요.');
            return;
        }
        if (!password) {
            setIsError(true);
            setErrorText('비밀번호를 입력하세요.');
            return;
        }
        if (!passwordCheck || (password !== passwordCheck)) {
            setIsError(true);
            setErrorText('비밀번호 확인을 입력하세요.');
            return;
        }
        if (!name) {
            setIsError(true);
            setErrorText('이름을 입력하세요.');
            return;
        }
        if (!nickName) {
            setIsError(true);
            setErrorText('닉네임을 입력하세요.');
            return;
        }
        if (!phoneNumber) {
            setIsError(true);
            setErrorText('닉네임을 입력하세요.');
            return;
        }
        if (!birth) {
            setIsError(true);
            setErrorText('생일을 입력하세요.');
            return;
        }

        const data: SignUpProps = { id: email, nickName, pw: encodeURI(password), name, birth };

        const postAxiosConfig: AxiosRequestConfig = {

            method: "POST",
            url: `${process.env.PUBLIC_BASE_URL}/user/join`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        };

        try {
            const res = await axios.request(postAxiosConfig);
            if (res.data.code === 100) {
                setIsSuccess(true);
                setSuccessText('회원가입에 성공했습니다.\n로그인을 진행해 주세요!')

            } else {
                throw res
            }

        }
        catch (e) {
            console.error(e);

        }

    }, [email, nickName, password, passwordCheck, name, birth]);

    useEffect(() => {
        setIsError(false);
        setErrorText('');
        setIsDoubleCheckId(false);
        setIsDoubleCheckText('');

    }, [email, password, passwordCheck, name, nickName, birth]);


    return (
        <SignUpWrap>
            <div className="container">
                <Form onSubmit={onSubmit}>
                    <input type="text" name="email" maxLength={30} placeholder="EMAIL" value={email} onChange={onChangeId}
                        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if (e.target.value.length > e.target.maxLength) {
                                e.target.value = e.target.value.slice(0, e.target.maxLength);
                            }
                        }} 
                    />
                    {isDoubleCheckId && <p>{isDoubledCheckText}</p>}
                    {!isEmailForm && <p>{isEmailFormText}</p>}
                    <input type="password" name="password" placeholder="PASSWORD" value={password} onChange={onChangePassWord} />
                    <input type="password" name="passwordCheck" placeholder="PASSWORD CHECK" value={passwordCheck} onChange={onChangePassWordCheck} />
                    <input type="text" name="name" placeholder="NAME" value={name} onChange={onChangeName} />
                    <input type="text" name="nickName" placeholder="NICKNAME" value={nickName} onChange={onChangeNickname} />
                    <input type="number" name="phoneNumber" maxLength={11} placeholder="PHONE NUMBER" value={phoneNumber} onChange={onPhoneNumber}
                        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if(e.target.value.length > e.target.maxLength) {
                                e.target.value = e.target.value.slice(0, e.target.maxLength);
                            }
                        }} 
                    />
                    <input type="number" name="birth" maxLength={6} placeholder="BIRTH" value={birth} onChange={onChangeBirth}
                        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if(e.target.value.length > e.target.maxLength) {
                                e.target.value = e.target.value.slice(0, e.target.maxLength);
                            }
                        }} 
                    />
                    <button type="submit">회원가입</button>
                    {isError && <p>{errorText}</p>}
                    {isSuccess && <p>{successText}</p>}
                </Form>
                <Link to="/login">로그인하러 가기</Link>
            </div>
        </SignUpWrap>
    )
}

export default SignUpPage;