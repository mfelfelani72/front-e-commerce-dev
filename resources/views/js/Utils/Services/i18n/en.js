import core_en from "../../../Core/Utils/Services/i18n/en";
import auth_en from "../../../Features/Auth/Modules/Utils/Services/i18n/en";

const global_en = {
    dashboard: "Dashboard",
};

export default {
    translation: {
        ...global_en,
        ...core_en,
        ...auth_en,
    },
};
