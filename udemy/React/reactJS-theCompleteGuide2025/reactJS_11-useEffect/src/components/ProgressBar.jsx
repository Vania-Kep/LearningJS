import { useState, useEffect } from "react";

export default function ProgressBar({ max }) {
    const [progressVal, setProgressVal] = useState(max);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgressVal((prevProgress) => prevProgress - 10);
        }, 10);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <progress value={progressVal} max={max} />
    );
}