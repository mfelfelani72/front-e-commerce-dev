// Containers

import { Logo } from "../../../../Components/Icon";

const Footer = () => {
    return (
        <>
            <footer className="border-t border-gray-300 w-full">
                <div className="bg-violet-200">
                    <div className="container mx-auto py-20 px-4 w-[calc(100%-10.5rem)]">
                        <div className="flex flex-wrap -mx-4">
                            {/* Company Info */}
                            <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0 inline-flex flex-col justify-center">
                                <Logo width="46" height="46" />
                                <p className="text-gray-600 mb-6">
                                    Grabit is the biggest market of grocery
                                    products. Get your daily needs from our
                                    store.
                                </p>
                            </div>

                            {/* Category */}
                            <div className="w-full sm:w-1/2 lg:w-1/6 px-4 mb-8">
                                <div className="footer-widget">
                                    <h4 className="text-lg font-semibold mb-4 flex justify-between items-center">
                                        Category
                                        <i className="fi-rr-angle-small-down lg:hidden"></i>
                                    </h4>
                                    <ul className="space-y-2">
                                        <li>
                                            <a
                                                href="shop-left-sidebar-col-3.html"
                                                className="text-gray-600 hover:text-primary"
                                            >
                                                Dairy & Milk
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="shop-banner-left-sidebar-col-3.html"
                                                className="text-gray-600 hover:text-primary"
                                            >
                                                Snack & Spice
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="shop-full-width-col-5.html"
                                                className="text-gray-600 hover:text-primary"
                                            >
                                                Fast Food
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="shop-list-left-sidebar.html"
                                                className="text-gray-600 hover:text-primary"
                                            >
                                                Juice & Drinks
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="shop-list-full-col-2.html"
                                                className="text-gray-600 hover:text-primary"
                                            >
                                                Bakery
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="shop-banner-right-sidebar-col-4.html"
                                                className="text-gray-600 hover:text-primary"
                                            >
                                                Seafood
                                            </a>
                                        </li>
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
                                        <li>
                                            <a
                                                href="about-us.html"
                                                className="text-gray-600 hover:text-primary"
                                            >
                                                About us
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="track-order.html"
                                                className="text-gray-600 hover:text-primary"
                                            >
                                                Delivery
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="privacy-policy.html"
                                                className="text-gray-600 hover:text-primary"
                                            >
                                                Legal Notice
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="terms-condition.html"
                                                className="text-gray-600 hover:text-primary"
                                            >
                                                Terms & conditions
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="checkout.html"
                                                className="text-gray-600 hover:text-primary"
                                            >
                                                Secure payment
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="contact-us.html"
                                                className="text-gray-600 hover:text-primary"
                                            >
                                                Contact us
                                            </a>
                                        </li>
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
                                        <li>
                                            <a
                                                href="register.html"
                                                className="text-gray-600 hover:text-primary"
                                            >
                                                Sign In
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="cart.html"
                                                className="text-gray-600 hover:text-primary"
                                            >
                                                View Cart
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="privacy-policy.html"
                                                className="text-gray-600 hover:text-primary"
                                            >
                                                Return Policy
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-gray-600 hover:text-primary"
                                            >
                                                Become a Vendor
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-gray-600 hover:text-primary"
                                            >
                                                Affiliate Program
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="checkout.html"
                                                className="text-gray-600 hover:text-primary"
                                            >
                                                Payments
                                            </a>
                                        </li>
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
                                            <p className="text-gray-600">
                                                2548 Broaddus Maple Court,
                                                Madisonville KY 4783, USA.
                                            </p>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fi fi-brands-whatsapp mt-1 mr-3 text-gray-500"></i>
                                            <a
                                                href="tel:+009876543210"
                                                className="text-gray-600 hover:text-primary"
                                            >
                                                +00 9876543210
                                            </a>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fi fi-rr-envelope mt-1 mr-3 text-gray-500"></i>
                                            <a
                                                href="mailto:example@email.com"
                                                className="text-gray-600 hover:text-primary"
                                            >
                                                example@email.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-6">
                                    <div className="flex space-x-4">
                                        <a
                                            href="#"
                                            className="text-gray-500 hover:text-primary"
                                        >
                                            <i className="gicon gi-facebook text-xl"></i>
                                        </a>
                                        <a
                                            href="#"
                                            className="text-gray-500 hover:text-primary"
                                        >
                                            <i className="gicon gi-twitter text-xl"></i>
                                        </a>
                                        <a
                                            href="#"
                                            className="text-gray-500 hover:text-primary"
                                        >
                                            <i className="gicon gi-linkedin text-xl"></i>
                                        </a>
                                        <a
                                            href="#"
                                            className="text-gray-500 hover:text-primary"
                                        >
                                            <i className="gicon gi-instagram text-xl"></i>
                                        </a>
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
                            Copyright ©{" "}
                            <a
                                href="index.html"
                                className="font-semibold hover:text-primary"
                            >
                                E-Commerce
                            </a>{" "}
                            all rights reserved. Powered by Skytech
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
