import { Link } from "@inertiajs/react";

const Theme = ({ children }) => {
    return (
        <main>
            <header className="flex flex-row justify-center h-20 items-center px-24 text-amber-50 bg-cyan-950">
                {/* <Link preserveScroll href="/">Home</Link>
                <Link href="/posts/create">Create</Link> */}
                <div className="text-white">header user</div>
            </header>
            <article>{children}</article>
            <footer className="fixed w-full bottom-0 flex flex-row justify-center h-20 items-center px-24 text-amber-50 bg-cyan-950">
                footer
            </footer>
        </main>
    );
};

export default Theme;
