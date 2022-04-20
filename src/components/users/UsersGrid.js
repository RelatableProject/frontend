import React from 'react';
import CustomDataGrid from "../CustomDataGrid";
import useCrudByGql from "../../hooks/useCrudByGql";
import {createUser, deleteUser, loadUsers, updateUser, userByKey} from "./querys";
import {Column} from "devextreme-react/data-grid";
import CustomColumn from "../utils/CustomColumn";
import useCrud from "../../hooks/useCrud";

const UsersGrid = () => {
    const userCrud = useCrudByGql(loadUsers, createUser, updateUser, deleteUser, userByKey);
    const identificationTypeDs = useCrud('identificationType', 'identificationTypes', {name: 'String!',});
    const roleDs = useCrud('role', 'roles', {name: 'String!',});

    return (
        <>
            <CustomDataGrid dataSource={userCrud} paste={{
                onInitNewRow: (e) => {
                    e.data.institutionsIds = [2];
                }
            }}>
                <Column dataField="id"/>
                <Column dataField="name" editorOptions={{ readOnly: true }}/>
                <Column dataField="firstName"/>
                <Column dataField="lastName"/>
                <Column dataField="identification"/>
                <Column {...CustomColumn(identificationTypeDs, "identificationType")}/>
                <Column dataField="institutionId"/>
                <Column {...CustomColumn(roleDs, "role")}/>
                <Column dataField="isActive"/>

            </CustomDataGrid>
        </>
    );
};

export default UsersGrid;
