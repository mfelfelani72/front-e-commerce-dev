// Containers

import Header from "./Containers/Header";
import Footer from "./Containers/Footer";

const Theme = ({ children }) => {

    return (
        <main>

            <Header />

            <article className="mt-[11rem]">{children}</article>

            <Footer />
        </main>
    );
};

export default Theme;
