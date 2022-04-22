import {getModel} from "../utils";

const model = getModel({
    name: 'municipality',
    display: 'name',
    load: {
        name: "municipalities",
        outputs: ["id", "name", "isActive"],
    },
    insert: {
        name: "createMunicipality",
        inputs: "name: String!, isActive: Boolean!",
    },
    update: {
        name: "updateMunicipality",
        inputs: "id: Int!, name: String, isActive: Boolean",
    },
    remove: {name: "deleteMunicipality",},
    byKey: {name: "municipality",},
})

export default model;
