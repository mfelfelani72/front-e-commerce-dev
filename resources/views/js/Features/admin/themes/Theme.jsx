import { Link, router } from "@inertiajs/react";

const Theme = ({ children }) => {
    return (
        <main>
            <header className="flex flex-row justify-center h-20 items-center px-24 text-amber-50 bg-cyan-300">
                {/* <Link preserveScroll href="/login">Home</Link> */}
                <div className="cursor-pointer" onClick={() => router.get('/home')}>Create</div>
                <div className="text-white">header</div>
            </header>
            <article>{children}</article>
            <footer className="fixed w-full bottom-0 flex flex-row justify-center h-20 items-center px-24 text-amber-50 bg-cyan-300">
                footer
            </footer>
        </main>
    );
};

export default Theme;
