import core_en from "../../../core/utils/services/i18n/en";
import auth_en from "../../../auth/modules/utils/services/i18n/en";

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
