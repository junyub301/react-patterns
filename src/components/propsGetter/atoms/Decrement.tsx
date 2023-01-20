import React from "react";

interface DecrementProp {
    onClick: () => void;
    disabled: boolean;
    [key: string]: any;
}

export default function Decrement({
    onClick,
    disabled,
    ...rest
}: DecrementProp) {
    return (
        <button disabled={disabled} onClick={onClick} {...rest}>
            -
        </button>
    );
}
