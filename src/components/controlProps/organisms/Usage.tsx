import React, { useState } from "react";
import Counter from "../molecules/Counter";

export default function Usage() {
    const [count, setCount] = useState<number>(0);
    const handleChangeCounter = (newCount: number) => {
        setCount(newCount);
    };
    return (
        <Counter value={count} onChange={handleChangeCounter}>
            <Counter.Decrement />
            <Counter.Label>Counter</Counter.Label>
            <Counter.Count max={10} />
            <Counter.Increment />
        </Counter>
    );
}
