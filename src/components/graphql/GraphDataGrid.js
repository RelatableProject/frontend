import React, {useEffect, useState} from 'react';
import CustomDataGrid, {GridProps} from "./CustomDataGrid";
import useStore from "../../graphql/hooks/useStore";
import type {Model} from "../../graphql/utils";
import {Column} from "devextreme-react/data-grid";
import CustomSelectBox from "./CustomSelectBox";

const GraphDataGrid = ({model, ...props}) => {
    const getStore = useStore()
    const canCell = !model.item.load.outputs.some(output => typeof output !== 'string')
    return (
        <CustomDataGrid dataSource={getStore(model)} {...props} editingMode={canCell ? "cell" : "row"}>
            {
                model.item.load.outputs.map(output => {
                    if (typeof output !== 'string') {
                        const store = getStore(output.store);
                        return <Column
                            key={output}
                            dataField={output.references}
                            editCellComponent={CustomSelectBox(store, output.name, output.display)}
                            lookup={{dataSource: store, displayExpr: output.display, valueExpr: "id"}}
                            calculateDisplayValue={data => data[output.name]?.name}
                        />
                    }
                    return <Column key={output} dataField={output}/>

                })
            }
        </CustomDataGrid>

    );
};

export default GraphDataGrid;
