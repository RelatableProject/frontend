import React from 'react';
import {DataGrid} from "devextreme-react";
import {Column} from "devextreme/ui/data_grid";

export interface GridProps {
    dataSource: any;
    editingMode?: 'batch' | 'cell' | 'row' | 'form' | 'popup';
    customizeColumns?: {
        [key: string]: (column: Column) => void;
    };
    paste? : any;
    children?: [Column];
    reference?: any;
}

const CustomDataGrid = (props: GridProps, ) => {
    const {dataSource, editingMode = "row", customizeColumns, paste, children, reference} = props;
    return (
        <DataGrid
            ref={reference}
            {...paste}
            allowColumnResizing={true}
            dataSource={dataSource}
            editing={
                {
                    mode: editingMode,
                    allowAdding: true,
                    allowDeleting: true,
                    allowUpdating: true,
                    useIcons: true,
                    confirmDelete: false,
                    editColumnName: true,
                }
            }
            paging={
                {
                    pageSize: 10,
                    enabled: true,
                }
            }
            showBorders={true}
            columnAutoWidth={true}
            allowColumnReordering={true}
            showColumnLines={true}
            columnResizingMode={'nextColumn'}
            customizeColumns={(columns) => {
                columns.filter(column => column.dataField === 'id').forEach(column => {
                    column.allowEditing = false;
                    column.sortOrder = 'desc';
                    column.visible = false;
                    column.allowResizing = false;
                });
                if (customizeColumns) {
                    Object.keys(customizeColumns).forEach(name => {
                        columns.filter(column => column.dataField === name).forEach(column => {
                            customizeColumns[name](column);
                        })
                    })
                }
            }}
            columnChooser={
                {
                    enabled: true,
                    allowSearch: true,
                    mode: "select",
                    title: "Selecciona las columnas",
                    emptyPanelText: "No hay columnas que mostrar",
                }
            }
        >

            {children}

        </DataGrid>
    );
};

export default CustomDataGrid;
