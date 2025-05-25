import core_fa from "../../../core/utils/services/i18n/fa";
import auth_fa from "../../../auth/modules/utils/services/i18n/fa";

const global_fa = {
    dashboard: "Dashboard",
};

export default {
    translation: {
        ...global_fa,
        ...core_fa,
        ...auth_fa,
    },
};
