import React from 'react';
import {SelectBox} from "devextreme-react";

const CustomSelectBox = (ds, name, display, onInitialized, onValueChanged) => ({data}) => {
    return (<SelectBox
        dataSource={ds}
        valueExpr="id"
        displayExpr={display}
        displayValue={display}
        defaultValue={data?.data[name]?.id}
        placeholder={"Selecciona una opción"}
        showDropDownButton={true}
        onValueChanged={e => {
            data.setValue(e.value)
            if (onValueChanged) onValueChanged(e)
        }}
        onInitialized={ async (e) => {
            await e.component.getDataSource().reload();
            await e.component.repaint();
            if (onInitialized) await onInitialized(e);
        }}
    />)
};

export default CustomSelectBox;
