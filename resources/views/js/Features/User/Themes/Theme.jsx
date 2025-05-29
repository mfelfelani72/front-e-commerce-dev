// Components

import { BasketIcon, Logo, ProfileIcon, WishIcon } from "../../../Core/Components/Icon"
import { InputSearch } from "../../../Core/Components/Input";
import NavMenu from "./Components/NavMenu";
import { Button } from "../../../Core/Components/Button";

// Functions

import IsLogin from "../../Auth/Modules/Utils/Libs/IsLogin"
import navigate from "../../../Utils/Libs/navigate"

// Images

import image from "../../../../../../public/assets/image/register_cover.jpg"

const Theme = ({ children }) => {

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
        <main>

            <header className="w-full">
                {/* violet banner */}
                <div className="bg-violet-100 py-2 w-full select-none">
                    <div className="flex flex-row items-center justify-between mx-auto w-[calc(100%-30.5rem)] text-gray-500 font-medium text-sm">
                        <div>Super Value Deals - Save more with coupons</div>
                        <div className="flex flex-row gap-2">
                            {IsLogin() && <div>{"Hi " + sessionStorage.getItem("username")}</div>}

                            <div>English</div>
                        </div>
                    </div>
                </div>
                {/* menu */}
                <div className="bg-gray-50/80 w-full pb-1 select-none border-b border-gray-100 flex flex-row items-center">
                    <div className="flex flex-row py-1 h-full items-center justify-between mx-auto w-[calc(100%-30.5rem)]" >
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
                    <div className="flex flex-row h-full items-center justify-between mx-auto w-[calc(100%-30.5rem)]" >
                        <NavMenu menuItems={menuItems} categories={categories} />
                    </div>
                </div>

            </header>

            <article>{children}</article>

            <footer className="border-t border-gray-300 fixed bottom-0 w-full">
                <div className="bg-violet-200">
                    <div className="container mx-auto py-20 px-4">
                        <div className="flex flex-wrap -mx-4">
                            {/* Company Info */}
                            <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0 inline-flex flex-col justify-center">

                                <Logo width="46" height="46" />
                                <p className="text-gray-600 mb-6">Grabit is the biggest market of grocery products. Get your daily needs from our store.</p>

                            </div>

                            {/* Category */}
                            <div className="w-full sm:w-1/2 lg:w-1/6 px-4 mb-8">
                                <div className="footer-widget">
                                    <h4 className="text-lg font-semibold mb-4 flex justify-between items-center">
                                        Category
                                        <i className="fi-rr-angle-small-down lg:hidden"></i>
                                    </h4>
                                    <ul className="space-y-2">
                                        <li><a href="shop-left-sidebar-col-3.html" className="text-gray-600 hover:text-primary">Dairy & Milk</a></li>
                                        <li><a href="shop-banner-left-sidebar-col-3.html" className="text-gray-600 hover:text-primary">Snack & Spice</a></li>
                                        <li><a href="shop-full-width-col-5.html" className="text-gray-600 hover:text-primary">Fast Food</a></li>
                                        <li><a href="shop-list-left-sidebar.html" className="text-gray-600 hover:text-primary">Juice & Drinks</a></li>
                                        <li><a href="shop-list-full-col-2.html" className="text-gray-600 hover:text-primary">Bakery</a></li>
                                        <li><a href="shop-banner-right-sidebar-col-4.html" className="text-gray-600 hover:text-primary">Seafood</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Company */}
                            <div className="w-full sm:w-1/2 lg:w-1/6 px-4 mb-8">
                                <div className="footer-widget">
                                    <h4 className="text-lg font-semibold mb-4 flex justify-between items-center">
                                        Company
                                        <i className="fi-rr-angle-small-down lg:hidden"></i>
                                    </h4>
                                    <ul className="space-y-2">
                                        <li><a href="about-us.html" className="text-gray-600 hover:text-primary">About us</a></li>
                                        <li><a href="track-order.html" className="text-gray-600 hover:text-primary">Delivery</a></li>
                                        <li><a href="privacy-policy.html" className="text-gray-600 hover:text-primary">Legal Notice</a></li>
                                        <li><a href="terms-condition.html" className="text-gray-600 hover:text-primary">Terms & conditions</a></li>
                                        <li><a href="checkout.html" className="text-gray-600 hover:text-primary">Secure payment</a></li>
                                        <li><a href="contact-us.html" className="text-gray-600 hover:text-primary">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Account */}
                            <div className="w-full sm:w-1/2 lg:w-1/6 px-4 mb-8">
                                <div className="footer-widget">
                                    <h4 className="text-lg font-semibold mb-4 flex justify-between items-center">
                                        Account
                                        <i className="fi-rr-angle-small-down lg:hidden"></i>
                                    </h4>
                                    <ul className="space-y-2">
                                        <li><a href="register.html" className="text-gray-600 hover:text-primary">Sign In</a></li>
                                        <li><a href="cart.html" className="text-gray-600 hover:text-primary">View Cart</a></li>
                                        <li><a href="privacy-policy.html" className="text-gray-600 hover:text-primary">Return Policy</a></li>
                                        <li><a href="#" className="text-gray-600 hover:text-primary">Become a Vendor</a></li>
                                        <li><a href="#" className="text-gray-600 hover:text-primary">Affiliate Program</a></li>
                                        <li><a href="checkout.html" className="text-gray-600 hover:text-primary">Payments</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Contact & Social */}
                            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                                <div className="footer-widget">
                                    <h4 className="text-lg font-semibold mb-4 flex justify-between items-center">
                                        Contact
                                        <i className="fi-rr-angle-small-down lg:hidden"></i>
                                    </h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <i className="fi fi-rr-marker mt-1 mr-3 text-gray-500"></i>
                                            <p className="text-gray-600">2548 Broaddus Maple Court, Madisonville KY 4783, USA.</p>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fi fi-brands-whatsapp mt-1 mr-3 text-gray-500"></i>
                                            <a href="tel:+009876543210" className="text-gray-600 hover:text-primary">+00 9876543210</a>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fi fi-rr-envelope mt-1 mr-3 text-gray-500"></i>
                                            <a href="mailto:example@email.com" className="text-gray-600 hover:text-primary">example@email.com</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-6">
                                    <div className="flex space-x-4">
                                        <a href="#" className="text-gray-500 hover:text-primary"><i className="gicon gi-facebook text-xl"></i></a>
                                        <a href="#" className="text-gray-500 hover:text-primary"><i className="gicon gi-twitter text-xl"></i></a>
                                        <a href="#" className="text-gray-500 hover:text-primary"><i className="gicon gi-linkedin text-xl"></i></a>
                                        <a href="#" className="text-gray-500 hover:text-primary"><i className="gicon gi-instagram text-xl"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="bg-violet-900 border-t border-gray-200 py-2">

                    <div className="flex flex-row justify-center items-center">
                        <p className="text-gray-50">
                            Copyright © <a href="index.html" className="font-semibold hover:text-primary">E-Commerce</a> all rights reserved. Powered by Skytech
                        </p>
                    </div>

                </div>
            </footer>
        </main>
    );
};

export default Theme;
