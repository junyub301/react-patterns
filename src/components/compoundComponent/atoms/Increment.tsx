import React from "react";
import { useCounterContext } from "../../../context/useCounterContext";

export default function Increment() {
    const { handleIncrement } = useCounterContext();
    return <button onClick={handleIncrement}>+</button>;
}
