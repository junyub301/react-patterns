import useCounter from "../../../hooks/useStateReducerCounter";
import Counter from "../molecules/Counter";

const MAX_COUNT = 10;
export default function Usage() {
    const reducer = (state: any, action: any) => {
        switch (action.type) {
            case "decrement":
                return {
                    count: Math.max(0, state.count - 2),
                };
            default:
                return useCounter.reducer(state, action);
        }
    };
    const { count, handleDecrement, handleIncrement } = useCounter(
        { initial: 0, max: 10 },
        reducer
    );
    return (
        <>
            <Counter value={count}>
                <Counter.Decrement onClick={handleDecrement} />
                <Counter.Label>Counter</Counter.Label>
                <Counter.Count max={10} />
                <Counter.Increment onClick={handleIncrement} />
            </Counter>
            <button onClick={handleIncrement} disabled={count === MAX_COUNT}>
                Custom increment btn 1
            </button>
        </>
    );
}
