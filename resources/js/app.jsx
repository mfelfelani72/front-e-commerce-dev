import "./bootstrap";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from 'react-i18next';
import i18n from '../views/js/Utils/Services/i18n/index';
import AdminTheme from "../views/js/Features/admin/themes/Theme";
import AuthTheme from "../views/js/Features/auth/themes/Theme";
import UserTheme from "../views/js/Features/user/themes/Theme";

createInertiaApp({
    resolve: (name) => {
        let modules = null;
        let module = null;

        // admin
        if (window.location.pathname.includes('/admin')) {
            modules = import.meta.glob("../views/js/Features/admin/modules/**/*.jsx", { eager: true });
            module = modules[`../views/js/Features/admin/modules/${name}.jsx`];
        }
        // auth
        else if (window.location.pathname.includes('/auth')) {
            const modules = import.meta.glob("../views/js/Features/auth/modules/**/*.{js,jsx}", { eager: true });
            module = modules[`../views/js/Features/auth/modules/${name}.jsx`];
        }
        // user
        else {
            const modules = import.meta.glob("../views/js/Features/user/modules/**/*.{js,jsx}", { eager: true });
            module = modules[`../views/js/Features/user/modules/${name}.jsx`];
        }

        return module;
    },
    setup({ el, App, props }) {

        const ThemeWrapper = ({ children }) => {

            return window.location.pathname.includes('/admin') ? (
                <AdminTheme>{children}</AdminTheme>
            ) : window.location.pathname.includes('/auth') ?
                <AuthTheme>{children}</AuthTheme>
                : (
                    <UserTheme>{children}</UserTheme>
                );
        };

        createRoot(el).render(
            <I18nextProvider i18n={i18n}>
                <ThemeWrapper>
                    <App {...props} />
                </ThemeWrapper>
            </I18nextProvider>
        );
    },
    progress: {
        delay: 0,
        color: "#29d",
        includeCSS: true,
        showSpinner: false,
    },
});