import React from "react";
import CompoundComponent from "../components/compoundComponent/organisms/Usage";
import ControlProps from "../components/controlProps/organisms/Usage";
import CustomHook from "../components/customHook/organisms/Usage";
import PropsGetter from "../components/propsGetter/organisms/Usage";
import StateReducer from "../components/stateReducer/organisms/Usage";

export default function Counter() {
    return (
        <>
            <CompoundComponent />
            <ControlProps />
            <CustomHook />
            <PropsGetter />
            <StateReducer />
        </>
    );
}
