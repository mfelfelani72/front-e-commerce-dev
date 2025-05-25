import { router } from "@inertiajs/react";
const navigate = (to, reload = false) => {
    if (reload) window.location.href = to;
    else router.visit(to);
};

export default navigate;
