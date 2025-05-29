
import { Head } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

const Home = ({ ...props }) => {
    // hooks
    const { t } = useTranslation();
    return (
        <>
            <Head>
                <title>Home</title>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,
                   initial-scale=1,
                   maximum-scale=1"
                />
                <meta
                    name="description"
                    content="content"
                />
                <meta
                    http-equiv="Content-Type"
                    content="text/html; charset=utf-8"
                />
            </Head>
            <div className="h-full w-full">
                sdfdsfds
            </div>
        </>
    );
};

export default Home;
