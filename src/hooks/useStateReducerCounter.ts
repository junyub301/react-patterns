import { useReducer } from "react";

const internalReducer = (
    { count }: { count: number },
    { type, payload }: { type: "increment" | "decrement"; payload?: any }
) => {
    switch (type) {
        case "increment":
            return {
                count: Math.min(count + 1, payload.max),
            };
        case "decrement":
            return {
                count: Math.max(0, count - 1),
            };
        default:
            throw new Error("Unhandled action Type : ", type);
    }
};

function useCounter(
    { initial, max }: { initial: number; max: number },
    reducer = internalReducer
) {
    const [{ count }, dispatch] = useReducer(reducer, { count: initial });

    const handleIncrement = () => {
        dispatch({ type: "increment", payload: { max } });
    };

    const handleDecrement = () => {
        dispatch({ type: "decrement" });
    };

    return { count, handleDecrement, handleIncrement };
}

useCounter.reducer = internalReducer;
useCounter.types = {
    increment: "increment",
    decrement: "decrement",
};

export default useCounter;
