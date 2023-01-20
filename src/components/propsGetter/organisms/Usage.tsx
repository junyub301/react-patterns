import useCounter from "../../../hooks/usePropsGetterCounter";
import Counter from "../molecules/Counter";

const MAX_COUNT = 10;
export default function Usage() {
    const { count, getCounterProps, getDecrementProps, getIncrementProps } =
        useCounter({ intialeCount: 0, max: MAX_COUNT });

    const handleBtn1Clicked = () => {
        console.log("btn 1 clicked");
    };
    return (
        <>
            <Counter {...getCounterProps({})}>
                <Counter.Decrement {...getDecrementProps({})} />
                <Counter.Label>Counter</Counter.Label>
                <Counter.Count max={10} />
                <Counter.Increment {...getIncrementProps({})} />
            </Counter>
            <button {...getIncrementProps({ onClick: handleBtn1Clicked })}>
                Custom increment btn 1
            </button>
            <button {...getIncrementProps({ disabled: count > MAX_COUNT - 2 })}>
                Custom increment btn 2
            </button>
        </>
    );
}
