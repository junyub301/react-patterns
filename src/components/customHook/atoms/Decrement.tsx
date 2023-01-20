import React from "react";

interface DecrementProp {
    onClick: () => void;
    disabled: boolean;
}

export default function Decrement({ onClick, disabled }: DecrementProp) {
    return (
        <button disabled={disabled} onClick={onClick}>
            -
        </button>
    );
}
