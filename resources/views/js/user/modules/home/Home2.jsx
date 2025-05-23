
import { Head, Link, router } from "@inertiajs/react";
import { useEffect } from "react";
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
                    content="A Computer Science portal for geeks. 
         It contains well written, well thought 
         and well explained computer science and 
         programming articles, quizzes and practice/competitive
         programming/company interview Questions."
                />
                <meta
                    http-equiv="Content-Type"
                    content="text/html; charset=utf-8"
                />
            </Head>
            <div onClick={() => router.visit('/admin')} className="cursor-pointer py-2 font-bold text-teal-500 flex flex-row w-full justify-center">
                This is Home and this is props{" "} {t("text")}
                <div className="flex flex-row gap-6">
                    {props?.message?.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
