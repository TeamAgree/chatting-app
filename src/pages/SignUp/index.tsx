import React, { useCallback, useState } from "react";
import { postFetcher } from "@utils/fetcher";
import useInput from "@hooks/useInput";
import axios from "axios";
import { Link } from "react-router-dom";
import { SignUpProps } from "@typings/db";
import { SignUpWrap, Form } from "@pages/Login/styles";
import { customAxios } from "@utils/customAxios";


const SignUp = () => {

    const [ id, onChnageId ] = useInput('');
    const [ password, onChangePW ] = useInput('');
    const [ name, onChangeName ] = useInput('');
    const [ birth, onChangeBirth ] = useInput('');

    const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data: SignUpProps = { id, pw: password, name, birth };
        const signUpData = async () => {
            const resData = await customAxios('post', '/api/v1/public/user/join', data);

            console.log(resData);
            
        }
        
        signUpData();
        
    }, [id, password, name, birth])

    

    return (
        <SignUpWrap>
            <div className="container">
                <Form onSubmit={onSubmit}>
                    <input type="text" name="id" placeholder="ID" value={id} onChange={onChnageId} />
                    <input type="password" name="password" placeholder="PASSWORD" value={password} onChange={onChangePW}/>
                    <input type="text" name="name" placeholder="NAME" value={name} onChange={onChangeName}/>
                    <input type="number" name="birth" placeholder="BIRTH" value={birth} onChange={onChangeBirth}/>
                    <button type="submit">회원가입</button>
                </Form>
                <Link to="/login">로그인하러 가기</Link>
            </div>
        </SignUpWrap>
    )
}

export default SignUp;