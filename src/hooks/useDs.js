import useStore, {StoreInfo} from "./useStore";
import {useMemo, useState} from 'react';
import DataSource from "devextreme/data/data_source";

const useDs = (load: StoreInfo, insert: StoreInfo, update: StoreInfo, remove: StoreInfo, byKey: StoreInfo) => {
    return useStore(load, insert, update, remove, byKey);
};




export default useDs;
