import React from "react";

interface IncrementProps {
    onClick: () => void;
    disabled: boolean;
    [key: string]: any;
}

export default function Increment({
    onClick,
    disabled,
    ...rest
}: IncrementProps) {
    return (
        <button disabled={disabled} onClick={onClick} {...rest}>
            +
        </button>
    );
}
