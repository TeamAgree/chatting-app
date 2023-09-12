import { hourSelector, minuteState } from "@recoil/TestAtom";
import React from "react";
import { useRecoilState } from "recoil";

const Test = () => {

    const [minutes, setMinutes] = useRecoilState(minuteState);
    const [hours, setHours] = useRecoilState(hourSelector);

    const onMinuteChange = (e: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = e;
        setMinutes(+value);
    }

    const onHoursChange = (e: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = e;
        setHours(+value);
    }

    return (
        <div>
            <input
                onChange={onMinuteChange}
                value={minutes}
                type="number"
                placeholder="Minutes"
            />
            <input
                value={hours.toFixed(0)}
                onChange={onHoursChange}
                type="number"
                placeholder="Hours"
            />
        </div>
    )
}

export default Test;