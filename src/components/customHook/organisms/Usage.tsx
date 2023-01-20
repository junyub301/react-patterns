import useCounter from "../../../hooks/useCounter";
import Counter from "../molecules/Counter";

export default function Usage() {
    const { count, handleIncrement, handleDecrement } = useCounter(0);
    const MAX_COUNT = 10;

    const handleClickIncrement = () => {
        if (count < MAX_COUNT) {
            handleIncrement();
        }
    };

    return (
        <>
            <Counter value={count}>
                <Counter.Decrement
                    onClick={handleDecrement}
                    disabled={count === 0}
                />
                <Counter.Label>Counter</Counter.Label>
                <Counter.Count max={10} />
                <Counter.Increment
                    onClick={handleClickIncrement}
                    disabled={count === MAX_COUNT}
                />
            </Counter>
            <button
                onClick={handleClickIncrement}
                disabled={count === MAX_COUNT}
            >
                Custom increment btn 1
            </button>
        </>
    );
}
