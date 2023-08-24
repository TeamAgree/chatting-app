import { AccessTokenAtom } from "@recoil/AccessTokenAtom";
import { UserSelector } from "@recoil/UserAtom";
import axios, { AxiosRequestConfig } from "axios";
import React, { Suspense, useCallback, useEffect, useState } from "react";
import { useRecoilStateLoadable, useRecoilValue, useSetRecoilState } from "recoil";

type UserType = {
    id: number;
    name: string;
}

const MyInfo = () => {
    
    const userInfo = useRecoilValue(UserSelector);
    console.log(userInfo);
    
    // const setAccessTokenAtom = useSetRecoilState(AccessTokenAtom);
    // const [userInfoLoadable, refetchUserInfo] = useRecoilStateLoadable(UserSelector);

    // if (userInfoLoadable.contents.code === 102) {
    //     setAccessTokenAtom(userInfoLoadable.contents.code.result);
    // }
    
    // console.log(userInfoLoadable);

    const onClickUserInfo = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('test', e);

    }, [])

    return (
        <div>
            <h1>My Info</h1>
            <button onClick={onClickUserInfo}>정보 가져오기</button>
        </div>
    )
}

export default MyInfo;