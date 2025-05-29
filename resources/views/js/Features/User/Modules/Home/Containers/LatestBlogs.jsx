import { BlogIcon } from "../../../../../Core/Components/Icon"


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
                <div className="grid grid-cols-4 gap-2">
                    <div className="bg-rose-500 h-24">dfds</div>
                    <div className="bg-rose-500 h-24">dfds</div>
                    <div className="bg-rose-500 h-24">dfds</div>
                    <div className="bg-rose-500 h-24">dfds</div>
                </div>
            </div>
        </>

    )
}

export default LatestBlogs