// Components

import { BasketIcon, Logo, ProfileIcon, WishIcon } from "../../../Core/Components/Icon"
import { InputSearch } from "../../../Core/Components/Input";

const Theme = ({ children }) => {
    return (
        <main>

            <header className="w-full">
                {/* violet banner */}
                <div className="bg-violet-100 py-2 w-full select-none">
                    <div className="flex flex-row items-center justify-between mx-auto w-[calc(100%-30.5rem)] text-gray-500 font-medium text-sm">
                        <div>Super Value Deals - Save more with coupons</div>
                        <div>English</div>
                    </div>
                </div>
                {/* menu */}
                <div className="bg-gray-50/80 w-full pb-1 select-none border-b border-gray-100 inline-flex items-center">
                    <div className="flex flex-row py-1 h-full items-center justify-between mx-auto w-[calc(100%-30.5rem)]" >
                        <div className="flex flex-row gap-2 items-center">
                            <div className="pt-2">
                                <Logo width="26" height="26" />
                            </div>
                            <h1 className="font-bold text-2xl pb-2 capitalize text-violet-900 pt-2">
                                e-commerce
                            </h1>
                            <InputSearch className={"w-[30rem]"} placeholder="Search in product" theme="light" />
                        </div>
                        <div className="flex flex-row pt-2.5 items-center gap-6">
                            <WishIcon width="24" height="24" color="#4a5565" count={1} />
                            <ProfileIcon width="24" height="24" color="#4a5565" />
                            <BasketIcon width="24" height="24" color="#4a5565" count={7} />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50/80 w-full pb-1 select-none border-b border-gray-100 inline-flex items-center">
                    <div className="flex flex-row py-1 h-full items-center justify-between mx-auto w-[calc(100%-30.5rem)]" >
                        dsfds
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
