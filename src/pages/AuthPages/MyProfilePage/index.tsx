import HistoryBack from "@components/historyBack";
import { UserSelector } from "@recoil/UserAtom";
import React, { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { styled } from "styled-components";

const HeaderContainer = styled.div`
    background: #eaeaea;

    display: flex;
    justify-content: space-between;

    button {
        padding : .3rem;
    }
`

const MyProfilePage = () => {

    const UserInfo = useRecoilValue(UserSelector);
    const [edit, setEdit] = useState(false);

    const onChangeEdit = useCallback((e: React.MouseEvent<HTMLElement>) => {
        
        setEdit(prev => !prev);
        
    },[])

    useEffect(() => {
        console.log(UserInfo);
        
    }, [])

    return (
        
        <div>
            <HeaderContainer>
                <HistoryBack />
                <button onClick={onChangeEdit}>{edit ? '완료' : '수정'}</button>
            </HeaderContainer>

            <div>
                <input type="text"  />

            </div>
        </div>
    )
}

export default MyProfilePage;