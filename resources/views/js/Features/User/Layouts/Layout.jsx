// Containers

import Header from "./Desktop/Containers/Header";
import Footer from "./Desktop/Containers/Footer";

const Layout = ({ children }) => {

    return (
        <main>

            <Header />

            <article className="mt-[11rem]">{children}</article>

            <Footer />
        </main>
    );
};

export default Layout;
