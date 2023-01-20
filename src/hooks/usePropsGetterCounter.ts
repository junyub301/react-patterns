import { useState } from "react";

interface usePropsGetterCounterProps {
    intialeCount: number;
    max: number;
}

interface ClickEventtProp {
    onClick?: () => void;
    [key: string]: any;
}

const callFnsInSequence =
    (...fns: any) =>
    (...args: any) =>
        fns.forEach((fn: any) => fn && fn(...args));

export default function useCounter({
    intialeCount,
    max,
}: usePropsGetterCounterProps) {
    const [count, setCount] = useState<number>(intialeCount);

    const handleIncrement = () => {
        setCount((pre) => pre + 1);
    };

    const handleDecrement = () => {
        setCount((pre) => pre - 1);
    };

    const getCounterProps = ({ ...otherProps }: any) => ({
        value: count,
        "aria-valueMax": max,
        "aria-valueMin": 0,
        "aria-valueNow": count,
        ...otherProps,
    });

    const getDecrementProps = ({ onClick, ...rest }: ClickEventtProp) => ({
        onClick: callFnsInSequence(handleDecrement, onClick),
        disabled: count === 0,
        ...rest,
    });

    const getIncrementProps = ({ onClick, ...rest }: ClickEventtProp) => ({
        onClick: callFnsInSequence(handleIncrement, onClick),
        disabled: count === max,
        ...rest,
    });

    return {
        count,
        handleDecrement,
        handleIncrement,
        getCounterProps,
        getDecrementProps,
        getIncrementProps,
    };
}
