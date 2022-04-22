import {getModel} from "../utils";
import role from "./role";

const model = getModel({
    name: 'user',
    display: 'name',
    load: {
        name: "users",
        outputs: ["id", "name",
            {
                name: "role",
                include: ["id", "name"],
                store: role,
                display: "name",
                references: 'roleId'
            }]
    },
    insert: {
        name: "createUser",
        inputs: "firstName: String!, lastName: String!, institutionId: String!, identificationTypeId: Int!, identification: String!, role: RoleInput!, institutionsIds: [Int!]!, studentDetail: StudentDetailInput",
    },
    update: {
        name: "updateUser",
        inputs: "id: Int!, firstName: String, lastName: String, institutionId: String, identificationTypeId: Int, identification: String, roleId: Int, studentDetail: StudentDetailInput",
    },
    remove: {name: "User",},
    byKey: {name: "user",},
})

export default model;
