import { Head } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

// Containers

import LatestBlogs from "../Containers/LatestBlogs";

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
                    content="This is home page"
                />
                <meta name="description" content="content" />
                <meta
                    http-equiv="Content-Type"
                    content="text/html; charset=utf-8"
                />
            </Head>
            <div className="flex flex-col my-5 gap-4 h-full mx-auto w-[calc(100%-10.5rem)]">
                {/* Latest blogs */}
                <LatestBlogs />
            </div>
        </>
    );
};

export default Home;
