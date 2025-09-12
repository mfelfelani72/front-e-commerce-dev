import { router } from "@inertiajs/react";

const navigate = (to, options = {}, data = {}) => {
    if (typeof options === "boolean") {
        if (options) window.location.href = to;
        else router.visit(to);
        return;
    }

    const { method = "get", reload = false } = options;

    if (reload) {
        window.location.href = to;
    } else {
        switch (method.toLowerCase()) {
            case "get":
                router.get(to, data);
                break;
            case "post":
                router.post(to, data);
                break;
            case "put":
                router.put(to, data);
                break;
            case "patch":
                router.patch(to, data);
                break;
            case "delete":
                router.delete(to, data);
                break;
            default:
                router.visit(to);
        }
    }
};

export default navigate;
