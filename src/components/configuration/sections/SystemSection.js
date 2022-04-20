import React from 'react';
import Section from "../../Section";
import useCrud from "../../../hooks/useCrud";
import CustomDataGrid from "../../CustomDataGrid";
import ConfigurationItem from "../ConfigurationItem";

const SystemSection = () => {
    const roleDs = useCrud('role', 'roles', {
            name: 'String!',
            isStudent: 'Boolean!',
            isTeacher: 'Boolean!',
            isAdministrative: 'Boolean!',
    });

    const identificationTypeDs = useCrud('identificationType', 'identificationTypes', {
        name: 'String!',
        isCedula: 'Boolean!',
        isTarjetaIdentidad: 'Boolean!',
        isCedulaExtranjeria: 'Boolean!',
    });

    const genderDs = useCrud('gender', 'genders', {
            name: "String!",
            isMale: "Boolean!",
            isFemale: "Boolean!"
    });

    const educationLevelDs = useCrud('educationLevel', 'educationLevels', {
            name: "String!",
        isPreschool: "Boolean!",
        isPrimary: "Boolean!",
        isSecondary: "Boolean!",
        isTechnical: "Boolean!",
        isTechnologist: "Boolean!",
        isProfessional: "Boolean!",
        isSpecialized: "Boolean!",
    });

    return (
        <>
            <ConfigurationItem size={"col-lg-6"} name={"roles"}>
                <CustomDataGrid dataSource={roleDs} editingMode={"cell"}/>
            </ConfigurationItem>

            <ConfigurationItem size={"col-lg-6"} name={"tipos de identificaciones"}>
                <CustomDataGrid dataSource={identificationTypeDs} editingMode={"cell"}/>
            </ConfigurationItem>

            <ConfigurationItem size={"col-lg-6"} name={"generos"}>
                <CustomDataGrid dataSource={genderDs} editingMode={"cell"}/>
            </ConfigurationItem>

            <ConfigurationItem size={"col-lg-9"} name={"niveles de educación"}>
                <CustomDataGrid dataSource={educationLevelDs} editingMode={"cell"}/>
            </ConfigurationItem>

        </>
    );
};

export default SystemSection;
