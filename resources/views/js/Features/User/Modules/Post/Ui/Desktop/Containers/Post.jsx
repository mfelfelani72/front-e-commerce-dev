// Components

import Accordion from "../../../../../../../Components/Accordion";
import { ClockIcon } from "../../../../../../../Components/Icon";
import ShortPostBox from "../../../Components/ShortPostBox";
import CategoryList from "../../../Components/CategoryList";

// png

import thumbnail from "../../../../../../../../../../public/assets/image/blog-thumbnail.jpg";

const Post = ({ className, ...props }) => {
    return (
        <>
          
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
                                <ShortPostBox
                                    className={"border-t border-gray-300 pt-2"}
                                />
                                <ShortPostBox
                                    className={"border-t border-gray-300 pt-2"}
                                />
                                <ShortPostBox
                                    className={"border-t border-gray-300 pt-2"}
                                />
                                <ShortPostBox
                                    className={"border-t border-gray-300 pt-2"}
                                />
                                <ShortPostBox
                                    className={"border-t border-gray-300 pt-2"}
                                />
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
                                <CategoryList
                                    className={"border-t border-gray-300 py-4"}
                                    title={"Dairy & Milk"}
                                    count="24"
                                />
                                <CategoryList
                                    className={"border-t border-gray-300 py-4"}
                                    title={"Dairy & Milk"}
                                    count="24"
                                />
                                <CategoryList
                                    className={"border-t border-gray-300 py-4"}
                                    title={"Dairy & Milk"}
                                    count="24"
                                />
                                <CategoryList
                                    className={"border-t border-gray-300 py-4"}
                                    title={"Dairy & Milk"}
                                    count="24"
                                />
                                <CategoryList
                                    className={"border-t border-gray-300 py-4"}
                                    title={"Dairy & Milk"}
                                    count="24"
                                />
                                <CategoryList
                                    className={"border-t border-gray-300 py-4"}
                                    title={"Dairy & Milk"}
                                    count="24"
                                />
                                <CategoryList
                                    className={"border-t border-gray-300 py-4"}
                                    title={"Dairy & Milk"}
                                    count="24"
                                />
                                <CategoryList
                                    className={"border-t border-gray-300 py-4"}
                                    title={"Dairy & Milk"}
                                    count="24"
                                />
                            </div>
                        </Accordion>
                    </div>
                    {/* body */}
                    <div className="flex flex-col gap-3 w-full">
                        <img
                            src={thumbnail}
                            alt="thumbnail"
                            className="rounded-sm"
                            loading="lazy"
                        />
                        <label className="text-md text-gray-500">
                            June 30,2022 - Category
                        </label>
                        <h3 className="text-2xl font-bold text-gray-700">
                            Marketing Guide: 5 Steps to Success.
                        </h3>
                        <div className="flex flex-col gap-6">
                            <p className="text-gray-600">
                                "Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type
                                specimen book. It has survived not only five
                                centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It
                                was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                            </p>
                            <p className="text-gray-600">
                                The standard chunk of Lorem Ipsum used since the
                                1500s is reproduced below for those interested.
                                Sections 1.10.32 and 1.10.33 from "de Finibus
                                Bonorum et Malorum" by Cicero.
                            </p>
                            <p className="text-gray-600">
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                passages of Lorem Ipsum classical Latin
                                literature from 45 BC, making it over 2000 years
                                old. Richard McClintock, a Latin professor at
                                Hampden-Sydney College in Virginia
                            </p>
                            <p className="text-gray-600">
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                passages of Lorem Ipsum classical Latin
                                literature from 45 BC, making it over 2000 years
                                old. Richard McClintock, a Latin professor at
                                Hampden-Sydney College in Virginia
                            </p>
                            <p className="text-gray-600">
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                passages of Lorem Ipsum classical Latin
                                literature from 45 BC, making it over 2000 years
                                old. Richard McClintock, a Latin professor at
                                Hampden-Sydney College in Virginia
                            </p>
                            <p className="text-gray-600">
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                passages of Lorem Ipsum classical Latin
                                literature from 45 BC, making it over 2000 years
                                old. Richard McClintock, a Latin professor at
                                Hampden-Sydney College in Virginia
                            </p>
                            <p className="text-gray-600">
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                passages of Lorem Ipsum classical Latin
                                literature from 45 BC, making it over 2000 years
                                old. Richard McClintock, a Latin professor at
                                Hampden-Sydney College in Virginia
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;
