import core_fa from "../../../Core/Utils/Services/i18n/fa";
import auth_fa from "../../../Features/Auth/Modules/Utils/Services/i18n/fa";

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
