import { AccessTokenAtom } from "@recoil/AccessTokenAtom";
import { UserSelector } from "@recoil/UserAtom";
import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { selector, useRecoilStateLoadable, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { ChatListWrap } from "./styles";

type ChatList = {
    chatroom: number;
    readMessageSeq: number;
    name: string;
}

const ChatList = () => {
    const AccessToken = useRecoilValue(AccessTokenAtom);
    const [chat, setChat] = useState([]);

    useEffect(() => {
        axios.get('/api/v1/private/chat/rooms', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${AccessToken}`
            }
        })
        .then (
            res => setChat(res.data.result)
        )
        .catch ( error => console.error(error) )
    }, [])
    
    
    return (
        <ChatListWrap>
            {
                chat.length > 0 ?
                (
                    chat.map((item: ChatList, i: number) => <div key={i}>{item?.chatroom}</div>)
                ) : (
                    <h4>채팅을 만들어보시던가</h4>
                )
            }
            채팅리스트 페이지
        </ChatListWrap>
    )
}

export default ChatList;