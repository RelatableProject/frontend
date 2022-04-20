import {gql} from "@apollo/client";

export const getCustomersByProjectId = (id) => gql`
    query {
        customersByProject(projectId: ${id}) {
            age
            birthDate
            createdAt
            educationLevel {
                id
                name
            }
            familyPosition
            firstName
            gender {
                id
                name
            }
            id
            identification
            identificationType {
                id
                name
            }
            lastName
            name
            occupation
            phones {
                id
                number
            }
            stratum
            updatedAt
            usersSuppliers {
                id
                name
                studentDetail {
                    program {
                        institution {
                            name
                        }
                        name
                    }
                }
            }
            addresses {
                id
                Neighborhood
                municipality {
                    id
                    name
                }
            }
        }
    }
`

export const getCustomersById = gql`
    query($id: Int!){
        customer(projectId: id) {
            age
            birthDate
            createdAt
            educationLevel {
                id
                name
            }
            familyPosition
            firstName
            gender {
                id
                name
            }
            id
            identification
            identificationType {
                name
            }
            lastName
            name
            occupation
            phones {
                id
                number
            }
            stratum
            updatedAt
            usersSuppliers {
                id
                name
                studentDetail {
                    program {
                        institution {
                            name
                        }
                        name
                    }
                }
            }
            addresses {
                id
                Neighborhood
                municipality {
                    id
                    name
                }
            }
        }
    }
`


export const updateCustomer = gql`
    mutation($id: Int!, $birthDate: Date, $educationLevelId: Int, $familyPosition: Int, $firstName: String, $genderId: Int, $identification: String, $identificationTypeId: Int, $lastName: String, $occupation: String, $stratum: Int) {
        updateCustomer(id: $id, birthDate: $birthDate, educationLevelId: $educationLevelId, familyPosition: $familyPosition, firstName: $firstName, genderId: $genderId,
            identification: $identification, identificationTypeId: $identificationTypeId, lastName: $lastName, occupation: $occupation, stratum: $stratum) {
            id
        }
    }
`

export const createCustomer = gql`
    mutation($firstName: String!, $lastName: String!, $identification: String!, $birthDate: Date!, $stratum: Int!, $familyPosition: Int!, $occupation: String!, $identificationTypeId: Int!, $projectId: Int!, $genderId: Int!, $educationLevelId: Int!){
        createCustomer(firstName: $firstName, lastName: $lastName, identification: $identification, birthDate: $birthDate, stratum: $stratum, familyPosition: $familyPosition, occupation: $occupation, identificationTypeId: $identificationTypeId, projectId: $projectId, genderId: $genderId, educationLevelId: $educationLevelId) {
            id
        }
    }
`

export const deleteCustomer = gql`
    mutation($id: Int!) {
        deleteCustomer(id: $id) {
            id
        }
    }
`

