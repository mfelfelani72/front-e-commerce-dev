import { Link } from "@inertiajs/react";
import { router } from '@inertiajs/react';
import navigate from "../../../Utils/Libs/navigate";
const Theme = ({ children }) => {
    return (
        <main>

            <header className="w-full">
                {/* violet banner */}
                <div className="bg-violet-100 py-2 w-full select-none">
                    <div className="flex flex-row items-center justify-between mx-auto w-[calc(100%-30.5rem)] text-gray-500 font-medium text-sm">
                        <div>Super Value Deals - Save more with coupons</div>
                        <div>English</div>
                    </div>
                </div>
                {/* menus */}

            </header>

            <article>{children}</article>
            <footer className="fixed w-full bottom-0 flex flex-row justify-center h-20 items-center px-24 text-amber-50 bg-cyan-950">
                footer
            </footer>
        </main>
    );
};

export default Theme;
