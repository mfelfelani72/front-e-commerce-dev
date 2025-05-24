import core_fa from "../../../../public/core/utils/services/i18n/fa";
import auth_fa from "../../../../resources/views/js/auth/modules/utils/services/i18n/fa";

const global_fa = {
    login: "Welcomsdfdsfe",
    dashboard: "Dashboard",
};

export default {
    translation: {
        ...global_fa,
        ...core_fa,
        ...auth_fa,
    },
};
