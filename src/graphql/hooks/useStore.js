import {useContext} from "react";
import type {Model} from "../utils";
import {GraphContext} from "../context/graphContext";

const useStore = (model: Model) => {
    const {getStore} = useContext(GraphContext);
    return getStore;
};

export default useStore;
