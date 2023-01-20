import React from "react";

interface CounterProviderProps {
    children: React.ReactNode;
    value: any;
}
const CounterContext = React.createContext(undefined);

function CounterProvider({ children, value }: CounterProviderProps) {
    return (
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    );
}

function useCounterContext() {
    const context = React.useContext(CounterContext);
    if (context === undefined) {
        throw new Error(
            "useCounterContext must be use within a CounterProvider"
        );
    }
    return context;
}

export { CounterProvider, useCounterContext };
