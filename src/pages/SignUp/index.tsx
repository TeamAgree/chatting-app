import React, { useCallback, useState } from "react";
import { postFetcher } from "@utils/fetcher";
import useInput from "@hooks/useInput";
import { Form } from "./styles";
import axios from "axios";
import { Link } from "react-router-dom";

type SignUpProps = {
    onSubmit: (
        form: {
            id: string;
            password: string;
        }
    ) => void;
};
type SignUp = {
    id: string;
    pw: string;
    name: string;
    birth: string | number;
};

const SignUp = () => {

    const [ id, onChnageId ] = useInput('');
    const [ password, onChangePW ] = useInput('');
    const [ name, onChangeName ] = useInput('');
    const [ birth, onChangeBirth ] = useInput('');

    const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data: SignUp = { id, pw: password, name, birth };
        
        // axios.post('/api/v1/public/user/join', data)
        // postFetcher('/api/v1/public/user/login', data);
        // console.log(data);
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin": "*",
        }
        axios
        .post ( 
            `/api/v1/public/user/join`,
            {
                id: 'cksdlr7446',
                pw: 3016,
                name: '안찬익',
                birth: 930316
            },
            {headers}
        )
        .then(
            res => {
                console.log(res);
                
            }
        )
        .catch(
            err => console.error(err)
        )
        
        
    }, [id, password])

    

    return (
        <section id="container">
            <Form onSubmit={onSubmit}>
                <input type="text" name="id" placeholder="ID" value={id} onChange={onChnageId} />
                <input type="password" name="password" placeholder="PASSWORD" value={password} onChange={onChangePW}/>
                <input type="text" name="name" placeholder="NAME" value={name} onChange={onChangeName}/>
                <input type="number" name="birth" placeholder="BIRTH" value={birth} onChange={onChangeBirth}/>
                <button type="submit">회원가입</button>
            </Form>
            <Link to="/login">로그인하러 가기</Link>
        </section>
    )
}

export default SignUp;