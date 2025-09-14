// Components

import { BlogIcon } from "../../../../../../../Components/Icon"
import PostBox from "../../../../Post/Components/PostBox"



const LatestBlogs = () => {
    return (
        <>
            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-row items-center justify-between">
                    <div className="inline-flex items-center gap-2">
                        <BlogIcon className={"h-6 w-6 text-violet-600"} />
                        <div className="text-sm font-medium capitalize">
                            latest <span className="text-violet-600">blog</span>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-4 gap-6">
                    <PostBox />
                    <PostBox />
                    <PostBox />
                    <PostBox />
                </div>
            </div>
        </>

    )
}

export default LatestBlogs