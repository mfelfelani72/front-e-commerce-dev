import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from 'react-i18next';
import i18n from '../../app/Utils/services/i18n';
import AdminTheme from "../views/js/admin/themes/Theme";
import UserTheme from "../views/js/user/themes/Theme";

createInertiaApp({
    resolve: (name) => {

        let modules = null;
        let module = null;

        // admin
        if (window.location.pathname.includes('/admin')) {
            modules = import.meta.glob("../views/js/admin/modules/**/*.jsx", { eager: true });
            module = modules[`../views/js/admin/modules/${name}.jsx`];
            module.default.layout =
                module.default.layout || module.default.layout || ((module) => (
                    <I18nextProvider i18n={i18n}>
                        <AdminTheme children={module} />
                    </I18nextProvider>
                ));
        }
        // user
        else {
            modules = import.meta.glob("../views/js/user/modules/**/*.jsx", { eager: true });
            module = modules[`../views/js/user/modules/${name}.jsx`];
            module.default.layout =
                module.default.layout || ((module) => (
                    <I18nextProvider i18n={i18n}>
                        <UserTheme children={module} />
                    </I18nextProvider>
                ));
        }

        return module;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },

    progress: {
        // The delay after which the progress bar will appear, in milliseconds...
        delay: 0,

        // The color of the progress bar...
        color: "#29d",

        // Whether to include the default NProgress styles...
        includeCSS: true,

        // Whether the NProgress spinner will be shown...
        showSpinner: false,
    },
});
