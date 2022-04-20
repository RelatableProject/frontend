import useDs from "./useDs";
import {Input} from "./useStore";

const useCrud = (singular, plural = singular+ "s", input: Input, customOutput:[string, {
    name: string;
    includes: []
}] = Object.keys(input)) => {
    let singularName = singular[0].toUpperCase() + singular.slice(1);
    let pluralName = plural[0].toLowerCase() + plural.slice(1);
    return useDs({
        name: pluralName,
        output: customOutput
    }, {
        name: "create"+singularName,
        input
    }, {
        name: "update"+singularName,
        input: input ? Object.keys(input).map(key => ({
            [key]: input[key].replace("!", "")
        })).reduce((a, b) => ({...a, ...b}), {}) : undefined
    }, {
        name: "delete" + singularName,
    },
        {
        name: singularName[0].toLowerCase() + singularName.slice(1),
        output: customOutput
    });
};

export default useCrud;
