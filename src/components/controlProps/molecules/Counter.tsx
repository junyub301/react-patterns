import React, { useEffect, useRef, useState } from "react";
import { CounterProvider } from "../../../context/useCounterContext";
import Count from "../atoms/Count";
import Decrement from "../atoms/Decrement";
import Increment from "../atoms/Increment";
import Label from "../atoms/Label";
import styled from "styled-components";
interface CounterProps {
    children: React.ReactNode;
    onChange?: (count: number) => void;
    value: number | null;
    initialValue?: number;
}

function Counter({
    children,
    value = null,
    onChange,
    initialValue = 0,
}: CounterProps) {
    const [count, setCount] = useState<number>(initialValue);
    const isControlled = value !== null && !!onChange;

    const getCount = () => (isControlled ? value : count);
    const firstMounded = useRef(true);

    useEffect(() => {
        if (!firstMounded.current && !isControlled) {
            onChange && onChange(count);
        }
        firstMounded.current = false;
    }, [count, onChange, isControlled]);

    const handleIncrement = () => {
        handleCountChange(getCount() + 1);
    };

    const handleDecrement = () => {
        handleCountChange(Math.max(0, getCount() - 1));
    };

    const handleCountChange = (newValue: number) => {
        isControlled ? onChange(newValue) : setCount(newValue);
    };

    return (
        <CounterProvider
            value={{ count: getCount(), handleIncrement, handleDecrement }}
        >
            <StyledCounter>{children}</StyledCounter>
        </CounterProvider>
    );
}

const StyledCounter = styled.div`
    display: flex;
    gap: 10px;
`;

Counter.Count = Count;
Counter.Label = Label;
Counter.Increment = Increment;
Counter.Decrement = Decrement;

export default Counter;
