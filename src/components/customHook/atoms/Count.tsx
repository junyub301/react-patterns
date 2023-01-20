import React from "react";
import { useCounterContext } from "../../../context/useCounterContext";

export default function Count({ max }: { max: number }) {
    const { count } = useCounterContext();
    const hasError = max ? count >= max : false;
    return <div>{count}</div>;
}
