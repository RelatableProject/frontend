import React from 'react';
import ConfigurationItem from "../ConfigurationItem";
import identificationType from "../../../../graphql/models/identificationType";
import GraphDataGrid from "../../../graphql/GraphDataGrid";
import role from "../../../../graphql/models/role";
import gender from "../../../../graphql/models/gender";
import educationLevel from "../../../../graphql/models/educationLevel";

const SystemSection = () => {
    return (
        <>
            <ConfigurationItem size={"col-lg-6"} name={"roles"}>
                <GraphDataGrid model={role} editingMode={"cell"}/>
            </ConfigurationItem>

            <ConfigurationItem size={"col-lg-6"} name={"tipos de identificaciones"}>
                <GraphDataGrid model={identificationType} editingMode={"cell"}/>
            </ConfigurationItem>

            <ConfigurationItem size={"col-lg-6"} name={"generos"}>
                <GraphDataGrid model={gender} editingMode={"cell"}/>
            </ConfigurationItem>

            <ConfigurationItem size={"col-lg-9"} name={"niveles de educación"}>
                <GraphDataGrid model={educationLevel} editingMode={"cell"}/>
            </ConfigurationItem>
        </>
    );
};

export default SystemSection;
