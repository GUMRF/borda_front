import {useState, useEffect} from 'react';
import {getRemainingTimeUntilMsTimestamp} from './Utils';

const defaultRemainingTime = {
    seconds: '37',
    minutes: '50',
    hours: '22',
    days: '01'
}

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(
        <div className="text-zinc-100 flex items-center justify-center h-16">
            <span>Time to end:ᅠ</span>
            <span>{remainingTime.hours}</span>
            <span>:</span>
            <span>{remainingTime.minutes}</span>
            <span>:</span>
            <span>{remainingTime.seconds}</span>
        </div>
    );
}

export default CountdownTimer;