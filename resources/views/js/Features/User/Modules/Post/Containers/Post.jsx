import { Head } from "@inertiajs/react";

// Components

import Accordion from "../../../../../Core/Components/Accordion";
import { ClockIcon } from "../../../../../Core/Components/Icon";
import ShortPostBox from "../Components/ShortPostBox";
import CategoryList from "../Components/CategoryList";

const Post = ({ className, ...props }) => {
    return (
        <>
            <Head>
                <title>view - post</title>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,
                   initial-scale=1,
                   maximum-scale=1"
                />
                <meta name="description" content="content" />
                <meta
                    http-equiv="Content-Type"
                    content="text/html; charset=utf-8"
                />
            </Head>

            <div className="flex flex-col my-5 gap-4 h-full mx-auto w-[calc(100%-10.5rem)]">
                {/* {props?.post?.id} */}
                <div className="flex flex-row h-full w-full gap-4">
                    {/* sidebar */}
                    <div className="flex flex-col w-[calc(30vw)] border border-gray-300 p-6 shadow-sm rounded-md">
                        <Accordion
                            id="recent_blog"
                            open={true}
                            title="Recent Blog"
                            icon={<ClockIcon />}
                            className=""
                        >
                            <div className="flex flex-col py-4 gap-2">
                                <ShortPostBox className={"border-t border-gray-300 pt-2"} />
                                <ShortPostBox className={"border-t border-gray-300 pt-2"} />
                                <ShortPostBox className={"border-t border-gray-300 pt-2"} />
                                <ShortPostBox className={"border-t border-gray-300 pt-2"} />
                                <ShortPostBox className={"border-t border-gray-300 pt-2"} />
                            </div>
                        </Accordion>

                        <Accordion
                            id="categories"
                            open={true}
                            title="Categories"
                            icon={<ClockIcon />}
                            className=""
                        >
                            <div className="flex flex-col py-4">
                                <CategoryList className={"border-t border-gray-300 py-4"} title={"Dairy & Milk"} count="24" />
                                <CategoryList className={"border-t border-gray-300 py-4"} title={"Dairy & Milk"} count="24" />
                                <CategoryList className={"border-t border-gray-300 py-4"} title={"Dairy & Milk"} count="24" />
                                <CategoryList className={"border-t border-gray-300 py-4"} title={"Dairy & Milk"} count="24" />
                                <CategoryList className={"border-t border-gray-300 py-4"} title={"Dairy & Milk"} count="24" />
                                <CategoryList className={"border-t border-gray-300 py-4"} title={"Dairy & Milk"} count="24" />
                                <CategoryList className={"border-t border-gray-300 py-4"} title={"Dairy & Milk"} count="24" />
                                <CategoryList className={"border-t border-gray-300 py-4"} title={"Dairy & Milk"} count="24" />
                                
                            </div>
                        </Accordion>
                    </div>
                    {/* body */}
                    <div className="flex flex-col w-full">body</div>
                </div>
            </div>
        </>
    );
};

export default Post;
