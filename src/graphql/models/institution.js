import {getModel} from "../utils";
import institutionType from "./institutionType";

const model = getModel({
    name: 'institution',
    display: 'name',
    load: {
        name: "institutions",
        outputs: ["id", "name", {
            name: "type",
            include: ["id", "name"],
            references: "typeId",
            store: institutionType,
            display: "name"
        }],
    },
    insert: {
        name: "createInstitution",
        inputs: "name: String!, typeId: Int!",
    },
    update: {
        name: "updateInstitution",
        inputs: "id: Int!, name: String, typeId: Int",
    },
    remove: {name: "deleteInstitution",},
    byKey: {name: "institution",},
})

export default model;
