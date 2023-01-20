import { useState } from "react";
export default function useCounter(intialeCount: number) {
    const [count, setCount] = useState<number>(intialeCount);

    const handleIncrement = () => {
        setCount((pre) => pre + 1);
    };

    const handleDecrement = () => {
        setCount((pre) => pre - 1);
    };

    return { count, handleDecrement, handleIncrement };
}
