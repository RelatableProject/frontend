import {getModel} from "../utils";

const model = getModel({
    name: 'gender',
    display: 'name',
    load: {
        name: "genders",
        outputs: ["id", "name", "isMale", "isFemale"],
    },
    insert: {
        name: "createGender",
        inputs: "name: String!, isMale: Boolean!, isFemale: Boolean!",
    },
    update: {
        name: "updateGender",
        inputs: "id: Int!, name: String, isMale: Boolean, isFemale: Boolean",
    },
    remove: {name: "deleteGender",},
    byKey: {name: "gender",},
})

export default model;
