import { useCallback } from "react";
import { useNavigate } from "react-router-dom"

const HistoryBack = () => {
    const navigate = useNavigate();

    const onHistoryBack = useCallback(() => {
        navigate(-1);
        
    },[])
    return (
        <button onClick={onHistoryBack}>뒤로가기</button>
    )
}

export default HistoryBack;