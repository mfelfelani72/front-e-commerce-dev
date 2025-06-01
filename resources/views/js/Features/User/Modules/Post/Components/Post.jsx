import { Head } from "@inertiajs/react";

const Post = ({...props}) => {

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

            <div className="flex flex-col my-5 gap-4 h-full mx-auto w-[calc(100%-30.5rem)]">
                {props?.post?.id}
            </div>
        </>
    );
};

export default Post;
