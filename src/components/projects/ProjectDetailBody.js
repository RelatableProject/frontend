import React from 'react';
import Section from "../Section";
import Form, {GroupItem, Item} from 'devextreme-react/form';
import useCrudByGql from "../../hooks/useCrudByGql";
import {createCustomer, deleteCustomer, getCustomersById, getCustomersByProjectId, updateCustomer} from "./querys";
import CustomDataGrid from "../CustomDataGrid";
import {Column} from "devextreme-react/data-grid";
import CustomColumn from "../utils/CustomColumn";
import useCrud from "../../hooks/useCrud";
import CustomSelectBox from "../utils/CustomSelectBox";


const ProjectDetailBody = ({data}) => {
    let customersDs = useCrudByGql(getCustomersByProjectId(data.project.id), createCustomer, updateCustomer, deleteCustomer, getCustomersById);
    const genderDs = useCrud('gender', 'genders', {
        name: "String!",
        isMale: "Boolean!",
        isFemale: "Boolean!"
    });

    const identificationTypeDs = useCrud('identificationType', 'identificationTypes', {
       name: "String!",
    });

    const municipalitiesDs = useCrud('municipality', 'municipalities', {
        name: 'String!',
        isActive: 'Boolean!',
    });

    const educationLevelDs = useCrud('educationLevel', 'educationLevels', {
        name: "String!",
    });

    const userDs = useCrud('user', 'users', {
        name: 'String!',
    });
    return (
        <>
            <Section title={"Informacion general:"}>
                <Form
                    formData={data.project}
                      colCount={3}
                    labelMode={"floating"}
                    customizeItem={e => {
                        e.editorOptions = {
                            readOnly: true
                        }
                    }
                }>
                    <Item dataField="id"/>
                    <Item dataField="name"/>
                    <Item dataField="municipality.name"/>
                    <Item dataField="userManager.name"/>
                    <GroupItem colCount={3}>
                        <Item dataField="isFreeConsumers"/>
                        <Item dataField="isOpen"/>
                        <Item dataField="isActive"/>
                    </GroupItem>
                </Form>
            </Section>
            <Section title={"Informacion sobre los consumidores:"}>
                <CustomDataGrid dataSource={customersDs} paste={{
                    onInitNewRow: (e) => {
                        e.data.projectId = data.project.id;
                    }
                }}>
                    <Column dataField="id"/>
                    <Column dataField="name" editorOptions={{readOnly: true}}/>
                    <Column dataField="firstName"/>
                    <Column dataField="lastName"/>
                    <Column dataField="identification"/>
                    <Column {...CustomColumn(identificationTypeDs, "identificationType")}/>
                    <Column dataField="birthDate" dataType="date"/>
                    <Column dataField="familyPosition"/>
                    <Column {...CustomColumn(genderDs, "gender")}/>
                    <Column dataField="occupation"/>
                    <Column dataField="stratum"/>
                    <Column {...CustomColumn(educationLevelDs, "educationLevel")}/>

                </CustomDataGrid>
            </Section>
            <Section title={"Bases de referencia:"}>
                <CustomDataGrid dataSource={data.projectBases}
                                paste={{
                                    selection:{mode: 'single'},
                                }}>
                    <Column dataField="id" caption="Id"/>
                    <Column dataField="name" caption="Name"/>
                    <Column dataField="isOpen" caption="isOpen"/>
                    <Column dataField="isFreeConsumers" caption="isFreeConsumers"/>
                    <Column dataField="isActive" caption="isActive"/>
                    <Column dataField="municipalityId"
                            caption="Municipality"
                            editCellComponent={CustomSelectBox(municipalitiesDs, "municipality")}
                            calculateDisplayValue={data => data.municipality?.name}
                            lookup={{
                                dataSource: municipalitiesDs,
                                valueExpr: "id",
                                displayExpr: "name"
                            }}
                    />
                    <Column dataField="userManagerId"
                            caption="User Manager"
                            editCellComponent={CustomSelectBox(userDs, "userManager")}
                            calculateDisplayValue={data => data.userManager?.name}
                            lookup={{
                                dataSource: userDs,
                                valueExpr: "id",
                                displayExpr: "name"
                            }}/>
                </CustomDataGrid>
            </Section>
        </>
    );
};



export default ProjectDetailBody;
