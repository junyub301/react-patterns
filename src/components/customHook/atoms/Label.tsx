import React from "react";

interface LableProps {
    children: string;
}

export default function Label({ children }: LableProps) {
    return <div>{children}</div>;
}
