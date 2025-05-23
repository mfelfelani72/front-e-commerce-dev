import { Link } from "@inertiajs/react";
import { router } from '@inertiajs/react';
import navigate from "../../../../../app/Utils/Libs/navigate";
const Theme = ({ children }) => {
    return (
        <main>
            <header className="flex flex-row justify-center h-20 items-center px-24 text-amber-50 bg-cyan-950">
                {/* <Link preserveScroll href="/">Home</Link>
                <Link href="/posts/create">Create</Link> */}
                <div onClick={() => navigate("/admin", true)} className="text-white">header user</div>
            </header>
            <article>{children}</article>
            <footer className="fixed w-full bottom-0 flex flex-row justify-center h-20 items-center px-24 text-amber-50 bg-cyan-950">
                footer
            </footer>
        </main>
    );
};

export default Theme;
