import {getModel} from "../utils";
import institution from "./institution";

const model = getModel({
    name: 'program',
    display: 'name',
    load: {
        name: "programs",
        outputs: ["id", "name", "isMedicine", "isDentistry", "isLaws", "isActive", {
            name:"institution",
            references: "institutionId",
            store: institution,
            include: ["id", "name"],
            display: "name"
        }],
    },
    insert: {
        name: "createProgram",
        inputs: "name: String!, isMedicine: Boolean!, isDentistry: Boolean!, isLaws: Boolean!, isActive: Boolean!, institutionId: Int!",
    },
    update: {
        name: "updateProgram",
        inputs: "id: Int!, name: String, isMedicine: Boolean, isDentistry: Boolean, isLaws: Boolean, isActive: Boolean, institutionId: Int",
    },
    remove: {name: "deleteProgram",},
    byKey: {name: "program",},
})

export default model;
