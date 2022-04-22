import React from 'react';
import useCrud from "../../hooks/useCrud";
import CustomDataGrid from "../graphql/CustomDataGrid";
import {Column} from "devextreme-react/data-grid";
import CustomSelectBox from "../graphql/CustomSelectBox";

const ProjectsGrid = ({setSelectedProject}) => {
    const projectDs = useCrud('project', 'projects', {
        name: 'String!',
        isOpen: 'Boolean!',
        isFreeConsumers: 'Boolean!',
        isActive: 'Boolean!',
        municipalityId: 'Int!',
        userManagerId: "Int!",
    }, ["name", "isOpen", "isFreeConsumers", "isActive", {name: "municipality", includes: ["id", "name"]}, {name: "userManager", includes: ["id", "name"]}]);

    const municipalitiesDs = useCrud('municipality', 'municipalities', {
        name: 'String!',
        isActive: 'Boolean!',
    });

    const userDs = useCrud('user', 'users', {
        name: 'String!',
    });


    return (
        <CustomDataGrid dataSource={projectDs}
                        paste={{
                            selection:{mode: 'single'},
                            onSelectionChanged: (e) => {
                                setSelectedProject(e.selectedRowsData[0]);
                            }
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
    );
};

export default ProjectsGrid;
