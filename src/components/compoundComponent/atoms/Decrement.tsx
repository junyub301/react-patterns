import React from "react";
import { useCounterContext } from "../../../context/useCounterContext";

export default function Decrement() {
    const { handleDecrement } = useCounterContext();
    return <button onClick={handleDecrement}>-</button>;
}
