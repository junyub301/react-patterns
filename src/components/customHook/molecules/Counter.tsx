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
    value: number;
}

function Counter({ children, onChange, value: count }: CounterProps) {
    const firstMounded = useRef(true);

    useEffect(() => {
        if (!firstMounded.current) {
            onChange && onChange(count);
        }
        firstMounded.current = false;
    }, [count, onChange]);

    return (
        <CounterProvider value={{ count }}>
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
