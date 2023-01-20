import React from "react";

interface IncrementProps {
    onClick: () => void;
    disabled: boolean;
}

export default function Increment({ onClick, disabled }: IncrementProps) {
    return (
        <button disabled={disabled} onClick={onClick}>
            +
        </button>
    );
}
