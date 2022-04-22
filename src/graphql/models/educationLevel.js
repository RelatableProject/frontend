import {getModel} from "../utils";

const model = getModel({
    name: 'educationLevel',
    display: 'name',
    load: {
        name: "educationLevels",
        outputs: ["id", "name", "isPreschool", "isPrimary", "isSecondary", "isTechnical", "isTechnologist", "isProfessional", "isSpecialized"],
    },
    insert: {
        name: "createEducationLevel",
        inputs: "name: String!, isPreschool: Boolean, isPrimary: Boolean, isSecondary: Boolean, isTechnical: Boolean, isTechnologist: Boolean, isProfessional: Boolean, isSpecialized: Boolean",
    },
    update: {
        name: "updateEducationLevel",
        inputs: "id: Int!, name: String, isPreschool: Boolean, isPrimary: Boolean, isSecondary: Boolean, isTechnical: Boolean, isTechnologist: Boolean, isProfessional: Boolean, isSpecialized: Boolean",
    },
    remove: {name: "deleteEducationLevel",},
    byKey: {name: "educationLevel",},
})

export default model;
