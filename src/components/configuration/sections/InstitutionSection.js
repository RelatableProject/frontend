import React, {useRef} from 'react';
import useCrud from "../../../hooks/useCrud";
import Section from "../../Section";
import ConfigurationItem from "../ConfigurationItem";
import CustomDataGrid from "../../CustomDataGrid";
import {Column} from "devextreme-react/data-grid";
import CustomSelectBox from "../../utils/CustomSelectBox.js";

const InstitutionSection = () => {
    const institutionTypeDs = useCrud('institutionType', 'institutionTypes', {
        name: 'String!',
        isSchool: 'Boolean!',
        isUniversity: 'Boolean!',
    });
    const institutionDs = useCrud('institution', 'institutions', {
        name: 'String!',
        typeId: 'Int!',
    }, ["id", "name", {name: "type", includes: ["id", "name"]}]);
    const municipalitiesDs = useCrud('municipality', 'municipalities', {
        name: 'String!',
        isActive: 'Boolean!',
    });
    const programDs = useCrud('program', 'programs', {
        name: 'String!',
        isMedicine: 'Boolean!',
        isDentistry: 'Boolean!',
        isLaws: 'Boolean!',
        isActive: 'Boolean!',
        institutionId: 'Int!',
    }, ["id", "name", "isMedicine", "isDentistry", "isLaws", "isActive", {name: "institution", includes: ["id", "name"]}]);

    const refPrograms = useRef(null);
    const updatePrograms = async() => await refPrograms.current.instance.getDataSource().reload();
    return (
        <>
            <ConfigurationItem name={"tipos de instituciones"} size={"col-lg-6"}>
                <CustomDataGrid dataSource={institutionTypeDs} editingMode={"cell"}/>
            </ConfigurationItem>
            <ConfigurationItem name={"instituciones"} size={"col-lg-6"} >
                <CustomDataGrid dataSource={institutionDs} editingMode={"row"} paste={{onRowUpdated: updatePrograms, onRowRemoved: updatePrograms}} >
                    <Column dataField={"id"}/>
                    <Column dataField={"name"}/>
                    <Column
                        dataField={"typeId"}
                        editCellComponent={CustomSelectBox(institutionTypeDs, "type")}
                        lookup={{dataSource: institutionTypeDs, displayExpr: "name", valueExpr: "id"}}
                        calculateDisplayValue={data => data.type?.name}
                    />
                </CustomDataGrid>
            </ConfigurationItem>
            <ConfigurationItem name={"municipios"} size={"col-lg-5"}>
                <CustomDataGrid dataSource={municipalitiesDs} editingMode={"cell"}/>
            </ConfigurationItem>
            <ConfigurationItem name={"programas institucionales"} size={"col-lg-7"}>
                <CustomDataGrid dataSource={programDs} editingMode={"row"} reference={refPrograms}>
                    <Column dataField={"id"}/>
                    <Column dataField={"name"}/>
                    <Column dataField={"isMedicine"}/>
                    <Column dataField={"isDentistry"}/>
                    <Column dataField={"isLaws"}/>
                    <Column
                        dataField={"institutionId"}
                        editCellComponent={CustomSelectBox(institutionDs, "institution")}
                        lookup={{dataSource: institutionDs, displayExpr: "name", valueExpr: "id"}}
                        calculateDisplayValue={data => data.institution?.name}
                    />
                </CustomDataGrid>

            </ConfigurationItem>
        </>
    );
};

export default InstitutionSection;
