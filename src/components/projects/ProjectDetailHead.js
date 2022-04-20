import React, {useEffect, useState} from 'react';
import useCrud from "../../hooks/useCrud";
import ProjectDetailBody from "./ProjectDetailBody";
import {gql, useQuery} from "@apollo/client";

const loadingSpinner = (
    <div className="spinner-border " role="status" style={{margin: "auto"}}>
        <span className="sr-only">Loading...</span>
    </div>
)

const QUERY = gql`
    query ($projectId: Int!) {
        project(id: $projectId) {
            id
            name
            isActive
            isFreeConsumers
            isOpen
            municipality {
                id
                name
            }
            userManager {
                id
                name
            }
            projectBases {
                id
                name
                isActive
                isFreeConsumers
                isOpen
                municipality {
                    id
                    name
                }
                userManager {
                    id
                    name
                }
            }
        }
    }
`;

const ProjectDetailHead = ({selectedProject}) => {
    const { loading, data } = useQuery(QUERY, {
        variables: {
            projectId: selectedProject.id
        },
    });


    return (
        <>
            <hr/>
            <div className={"row"}>
                <h4 className="font-weight-bold mb-4 text-center">{selectedProject.name}</h4>
                {
                    loading ? loadingSpinner : (<ProjectDetailBody data={data}/>)
                }
            </div>
        </>
    );
};

export default ProjectDetailHead;
