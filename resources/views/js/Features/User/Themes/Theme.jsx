// Components

import { BasketIcon, Logo, ProfileIcon, WishIcon } from "../../../Core/Components/Icon"

const Theme = ({ children }) => {
    return (
        <main className="!bg-gray-50/80">

            <header className="w-full">
                {/* violet banner */}
                <div className="bg-violet-100 py-2 w-full select-none">
                    <div className="flex flex-row items-center justify-between mx-auto w-[calc(100%-30.5rem)] text-gray-500 font-medium text-sm">
                        <div>Super Value Deals - Save more with coupons</div>
                        <div>English</div>
                    </div>
                </div>
                {/* menu */}
                <div className="py-2 w-full select-none">
                    <div className="flex flex-row items-center justify-between mx-auto w-[calc(100%-30.5rem)] pt-5" >
                        <div className="flex flex-row gap-2 items-center">
                            <Logo width="26" height="26" />
                            <h1 className="font-bold text-2xl pb-2 capitalize text-violet-900">
                                e-commerce
                            </h1>
                        </div>
                        <div className="flex flex-row gap-6">
                            <WishIcon width="24" height="24" color="#4a5565" count={1} />
                            <ProfileIcon width="24" height="24" color="#4a5565" />
                            <BasketIcon width="24" height="24" color="#4a5565" count={7}/>
                        </div>
                    </div>
                </div>

            </header>

            <article>{children}</article>
            <footer className="fixed w-full bottom-0 flex flex-row justify-center h-20 items-center px-24 text-amber-50 bg-cyan-950">
                footer
            </footer>
        </main>
    );
};

export default Theme;
