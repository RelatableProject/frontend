import {getModel} from "../utils";

const model = getModel({
    name: 'identificationType',
    display: 'name',
    load: {
        name: "identificationTypes",
        outputs: ["id", "name", "isCedula", "isTarjetaIdentidad", "isCedulaExtranjeria"],
    },
    insert: {
        name: "createIdentificationType",
        inputs: "name: String!, isCedula: Boolean!, isTarjetaIdentidad: Boolean!, isCedulaExtranjeria: Boolean!",
    },
    update: {
        name: "updateIdentificationType",
        inputs: "id: Int!, name: String, isCedula: Boolean, isTarjetaIdentidad: Boolean, isCedulaExtranjeria: Boolean",
    },
    remove: {name: "deleteIdentificationType",},
    byKey: {name: "identificationType",},
})

export default model;
