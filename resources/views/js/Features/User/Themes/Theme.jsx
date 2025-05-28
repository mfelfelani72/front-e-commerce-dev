// Components

import { BasketIcon, Logo, ProfileIcon, WishIcon } from "../../../Core/Components/Icon"
import { InputSearch } from "../../../Core/Components/Input";
import NavMenu from "./Components/NavMenu";

const Theme = ({ children }) => {

    const menuItems = [
        {
            name: 'Home',
            href: '/',
            subItems: []
        },
        {
            name: 'Products',
            href: '/products',
            subItems: [
                {
                    name: 'Electronics',
                    items: [
                        { name: 'Smartphones', href: '/electronics/smartphones' },
                        { name: 'Laptops', href: '/electronics/laptops' },
                        { name: 'Accessories', href: '/electronics/accessories' }
                    ]
                },
                {
                    name: 'Electronics',
                    items: [
                        { name: 'Smartphones', href: '/electronics/smartphones' },
                        { name: 'Laptops', href: '/electronics/laptops' },
                        { name: 'Accessories', href: '/electronics/accessories' }
                    ]
                },
                {
                    name: 'Fashion',
                    items: [
                        { name: 'Men', href: '/fashion/men' },
                        { name: 'Women', href: '/fashion/women' },
                        { name: 'Kids', href: '/fashion/kids' }
                    ]
                }
            ]
        },
        {
            name: 'Services',
            href: '/services',
            subItems: [
                {
                    name: 'Design',
                    items: [
                        { name: 'Web Design', href: '/design/web' },
                        { name: 'Graphic Design', href: '/design/graphic' }
                    ]
                },
                {
                    name: 'Development',
                    items: [
                        { name: 'Web Development', href: '/development/web' },
                        { name: 'Mobile Apps', href: '/development/mobile' }
                    ]
                }
            ]
        },
        {
            name: 'Contact',
            href: '/contact',
            subItems: []
        },
    ];
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
                <div className="w-full py-2 select-none border-b border-gray-100 inline-flex items-center bg-white shadow-sm relative justify-between">
                    <div className="flex flex-row h-full items-center justify-between mx-auto w-[calc(100%-30.5rem)]" >
                        <NavMenu menuItems={menuItems} />
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
