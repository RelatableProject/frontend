import {gql} from "@apollo/client";

export const loadUsers = gql`
    query {
        users {
            id
            name
            firstName
            lastName
            identification
            identificationType {
                id
                name
            }
            institutionId
            institutions {
                id
                name
            }
            role {
                id
                name
            }
            studentDetail {
                id
                semesterNumber
                program {
                    id
                    name
                }
            }
            isActive
        }
    }
`;

export const createUser = gql`
    mutation($firstName: String!, $lastName: String!, $institutionId: String!, $identificationTypeId: Int!, $identification: String!, $roleId: Int!, $institutionsIds: [Int!]!) {
        createUser(firstName: $firstName, lastName: $lastName, institutionId: $institutionId, identificationTypeId: $identificationTypeId, identification: $identification, roleId: $roleId, institutionsIds: $institutionsIds) {
            id
        }
    }
`
export const updateUser = gql`
    mutation($id: Int!, $firstName: String, $identification: String, $identificationTypeId: Int, $institutionId: String, $lastName: String, $roleId: Int, $studentDetail: StudentDetailInput) {
        updateUser(id: $id, firstName: $firstName, identification: $identification, identificationTypeId: $identificationTypeId, institutionId: $institutionId, lastName: $lastName, roleId: $roleId, studentDetail: $studentDetail) {
            id
        }
    }
`

export const deleteUser = gql`
    mutation($id: Int!){
        deleteUser(id: $id) {
            id
        }
    }
`

export const userByKey = gql`
    query($id: Int!){
        user(id: $id) {
            id
            name
            firstName
            lastName
            identification
            identificationType {
                id
                name
            }
            institutionId
            institutions {
                id
                name
            }
            role {
                id
                name
            }
            studentDetail {
                id
                semesterNumber
                program {
                    id
                    name
                }
            }
            isActive
        }
    }
`
