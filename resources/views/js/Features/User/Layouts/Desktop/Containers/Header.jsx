// Componets

import { BasketIcon, Logo, ProfileIcon, WishIcon } from "../../../../../Components/Icon"
import { InputSearch } from "../../../../../Components/Input";
import NavMenu from "../Components/NavMenu";
import { Button } from "../../../../../Components/Button";

// Functions

import IsLogin from "../../../../Auth/Utils/Libs/IsLogin"
import navigate from "../../../../../Utils/Libs/navigate"

// Images

import image from "../../../../../../../../public/assets/image/register_cover.jpg"

const Header = () => {
    // const
    const menuItems = [
        {
            name: 'Home',
            href: '/',
            picture: "",
            subItems: [],
        },
        {
            name: 'Products',
            href: '/products',
            picture: image,
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
            picture: image,
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
            picture: "",
            subItems: []
        },
    ];

    const categories = [
        {
            id: 1,
            name: "electronics",
            subCategories: [
                {
                    id: 101,
                    name: "mobile-phones",
                    brands: [
                        { name: "samsung" },
                        { name: "apple" },
                        { name: "xiaomi" }
                    ]
                },
                {
                    id: 102,
                    name: "laptops",
                    brands: [
                        { name: "asus" },
                        { name: "lenovo" },
                        { name: "apple" }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: "fashion",
            subCategories: [
                {
                    id: 201,
                    name: "men-clothing",
                    brands: [
                        { name: "shirts" },
                        { name: "pants" }
                    ]
                },
                {
                    id: 202,
                    name: "women-clothing",
                    brands: [
                        { name: "dresses" },
                        { name: "blouses" }
                    ]
                }
            ]
        },
        {
            id: 3,
            name: "home-appliances",
            subCategories: [
                {
                    id: 301,
                    name: "refrigerators"
                },
                {
                    id: 302,
                    name: "washing-machines"
                }
            ]
        }
    ];
    return (
        <>
            <header className="fixed top-0 w-full z-[900]">
                {/* violet banner */}
                <div className="bg-violet-100 py-2 w-full select-none">
                    <div className="flex flex-row items-center justify-between mx-auto w-[calc(100%-10rem)] text-gray-500 font-medium text-sm">
                        <div>Super Value Deals - Save more with coupons</div>
                        <div className="flex flex-row gap-2">
                            {IsLogin() && <div>{"Hi " + sessionStorage.getItem("username")}</div>}

                            <div>English</div>
                        </div>
                    </div>
                </div>
                {/* menu */}
                <div className="bg-gray-50 w-full pb-1 select-none border-b border-gray-100 flex flex-row items-center">
                    <div className="flex flex-row py-1 h-full items-center justify-between mx-auto w-[calc(100%-10rem)]" >
                        <div className="flex flex-row gap-2 items-center">
                            <div className="pt-2">
                                <Logo width="26" height="26" />
                            </div>
                            <h1 className="font-bold text-2xl pb-2 capitalize text-violet-900 pt-2 inline-flex w-full">
                                e-commerce
                            </h1>
                            <div className="inline-flex items-center w-full gap-2">
                                <InputSearch className={"w-[32rem]"} placeholder="Search in product" theme="light" />
                                {!IsLogin() && <Button onClick={() => { navigate("/auth/login", true) }} className={"px-4 w-20 h-10 text-sm font-medium rounded-md hover:bg-violet-600"} >sign in</Button>}

                            </div>
                        </div>
                        <div className="flex flex-row pt-2.5 items-center gap-6">
                            <WishIcon width="24" height="24" color="#4a5565" count={1} />
                            <ProfileIcon width="24" height="24" color="#4a5565" />
                            <BasketIcon width="24" height="24" color="#4a5565" count={7} />
                        </div>
                    </div>
                </div>
                <div className="w-full py-2 select-none border-b border-gray-100 inline-flex items-center bg-white shadow-sm relative justify-between">
                    <div className="flex flex-row h-full items-center justify-between mx-auto w-[calc(100%-10rem)]" >
                        <NavMenu menuItems={menuItems} categories={categories} />
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header