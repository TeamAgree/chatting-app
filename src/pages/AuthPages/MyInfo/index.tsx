import { UserSelector } from "@recoil/UserAtom";
import React, { Suspense, useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

type UserType = {
    id: number;
    name: string;
}

const MyInfo = () => {
    const getUser = useRecoilValue(UserSelector);

    const onClickUserInfo = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('test', e, getUser);

    }, [getUser])

    return (
        <div>
            <h1>My Info</h1>
            <button onClick={onClickUserInfo}>정보 가져오기</button>
        </div>
    )
}

export default MyInfo;