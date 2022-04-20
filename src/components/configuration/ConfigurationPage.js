import React, {useRef} from 'react';
import InstitutionSection from "./sections/InstitutionSection";
import Section from "../Section";
import SystemSection from "./sections/SystemSection";

const ConfigurationPage = () => {


    return (
        <>
            <hr/>
            <Section title={"Sección de instituciones:"}>
                <InstitutionSection/>
            </Section>

            <Section title={"Sección de sistema:"}>
                <SystemSection/>
            </Section>

        </>
    );
};

export default ConfigurationPage;
