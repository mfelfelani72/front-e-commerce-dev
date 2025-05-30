import { cn } from '../../../../../Utils/Libs/cn';
import picture from "../../../../../../../../public/assets/image/blog-img-1.jpg";

const PostBox = ({ className, ...props }) => {
    return (
        <div
            {...props}
            className={cn(
                "flex flex-col bg-gray-50 shadow-sm rounded-lg max-h-[20rem] min-h-[20rem] transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl overflow-hidden cursor-pointer",
                className
            )}
        >

            <div className="overflow-hidden">
                <img
                    loading='lazy'
                    src={picture}
                    alt="picture"
                    className={
                        "object-cover w-full h-full transition-transform duration-600 ease-in-out hover:rotate-1 hover:scale-105" // Rotate 10 degrees and slight zoom
                    }
                />
            </div>

            {/* Rest of your post box content */}
            <div className="p-4 flex-1">
                {/* Your content here */}
            </div>
        </div>
    );
};

export default PostBox;