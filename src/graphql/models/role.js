import {getModel} from "../utils";

const model = getModel({
    name: 'role',
    display: 'name',
    load: {
        name: "roles",
        outputs: ["id", "name", "isStudent", "isTeacher", "isAdministrative"],
    },
    insert: {
        name: "createRole",
        inputs: "name: String!, isStudent: Boolean!, isTeacher: Boolean!, isAdministrative: Boolean!",
    },
    update: {
        name: "updateRole",
        inputs: "id: Int!, name: String, isStudent: Boolean, isTeacher: Boolean, isAdministrative: Boolean",
    },
    remove: {name: "deleteRole",},
    byKey: {name: "role",},
})

export default model;
