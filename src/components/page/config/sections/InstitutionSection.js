import React, {useRef} from 'react';
import useCrud from "../../../../hooks/useCrud";
import Section from "../../../Section";
import ConfigurationItem from "../ConfigurationItem";
import CustomDataGrid from "../../../graphql/CustomDataGrid";
import {Column} from "devextreme-react/data-grid";
import CustomSelectBox from "../../../graphql/CustomSelectBox.js";
import GraphDataGrid from "../../../graphql/GraphDataGrid";
import institutionType from "../../../../graphql/models/institutionType";
import institution from "../../../../graphql/models/institution";
import municipality from "../../../../graphql/models/municipality";
import program from "../../../../graphql/models/program";

const InstitutionSection = () => {
    const refPrograms = useRef(null);
    const updatePrograms = async() => await refPrograms.current.instance.getDataSource().reload();

    return (
        <>


            <ConfigurationItem name={"tipos de instituciones"} size={"col-lg-6"}>
                <GraphDataGrid model={institutionType}/>
            </ConfigurationItem>
            <ConfigurationItem name={"instituciones"} size={"col-lg-6"}>
                <GraphDataGrid model={institution}/>
            </ConfigurationItem>
            <ConfigurationItem name={"municipios"} size={"col-lg-6"}>
                <GraphDataGrid model={municipality}/>
            </ConfigurationItem>

            <ConfigurationItem name={"Programas"} size={"col-lg-8"}>
                <GraphDataGrid model={program}/>
            </ConfigurationItem>

        </>
    );
};

export default InstitutionSection;
