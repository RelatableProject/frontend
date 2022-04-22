import {getModel} from "../utils";

const model = getModel({
    name: 'institutionType',
    display: 'name',
    load: {
        name: "institutionTypes",
        outputs: ["id", "name", "isSchool", "isUniversity"],
    },
    insert: {
        name: "createInstitutionType",
        inputs: "name: String!, isSchool: Boolean!, isUniversity: Boolean!",
    },
    update: {
        name: "updateInstitutionType",
        inputs: "id: Int!, name: String, isSchool: Boolean, isUniversity: Boolean",
    },
    remove: {name: "deleteInstitutionType",},
    byKey: {name: "institutionType",},
})

export default model;
