import core_en from "../../../../public/core/utils/services/i18n/en";
import auth_en from "../../../../resources/views/js/auth/modules/utils/services/i18n/en";

const global_en = {
    login: "Welcomsdfdsfe",
    dashboard: "Dashboard",
};

export default {
    translation: {
        ...global_en,
        ...core_en,
        ...auth_en,
    },
};
