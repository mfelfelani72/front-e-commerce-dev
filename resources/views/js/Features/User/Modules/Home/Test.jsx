import { Logo } from "../../../../Core/Components/Icon";


const NavMenu = () => {
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
        <nav className="bg-white shadow-sm relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo and regular menu */}
                    <div className="flex items-center">
                        <Logo width="26" height="26" />
                        <div className="hidden md:flex space-x-1 ml-10">
                            {menuItems.map((item) => (
                                <div key={item.name} className="group relative">
                                    <a
                                        href={item.href}
                                        className="text-gray-700 hover:text-violet-600 px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                                    >
                                        {item.name}
                                        {item.subItems.length > 0 && (
                                            // icon
                                            <div 
                                                className="ml-1 h-4 w-4 text-gray-500 group-hover:text-violet-600 transition-transform duration-200 group-hover:rotate-180" 
                                            />
                                        )}
                                    </a>
                                    
                                    {/* Mega Menu */}
                                    {item.subItems.length > 0 && (
                                        <div className="absolute left-0 top-8 z-20 w-[800px] origin-top transform overflow-hidden opacity-0 scale-y-0 h-0 group-hover:opacity-100 group-hover:scale-y-100 group-hover:h-auto transition-all duration-300 ease-out border border-violet-50 rounded-md shadow-xl">
                                            <div className="bg-white shadow-xl rounded-b-lg p-6 grid grid-cols-2 gap-6 mt-0 border-t-2 border-violet-600 animate-slideUp">
                                                {item.subItems.map((category, idx) => (
                                                    <div key={idx} className="space-y-2">
                                                        <h3 className="text-lg font-semibold text-gray-900 border-b border-violet-800 pb-2 mb-2">
                                                            {category.name}
                                                        </h3>
                                                        <ul className="space-y-2">
                                                            {category.items.map((subItem) => (
                                                                <li key={subItem.name}>
                                                                    <a
                                                                        href={subItem.href}
                                                                        className="text-gray-700 hover:text-violet-600 block px-2 py-1 text-sm transition-colors duration-150"
                                                                    >
                                                                        {subItem.name}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop right side items */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="/login"
                            className="text-gray-700 hover:text-violet-600 px-3 py-2 text-sm font-medium"
                        >
                            Login
                        </a>
                        <a
                            href="/cart"
                            className="text-gray-700 hover:text-violet-600 px-3 py-2 text-sm font-medium"
                        >
                            Cart (0)
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <input
                            type="checkbox"
                            id="menu-toggle"
                            className="hidden peer"
                        />
                        <label
                            htmlFor="menu-toggle"
                            className="text-gray-700 hover:text-violet-600 focus:outline-none cursor-pointer peer-checked:[&>svg]:hidden peer-checked:after:content-['×'] peer-checked:after:text-3xl peer-checked:after:leading-none"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </label>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className="hidden peer-checked:block md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
                        {menuItems.map((item) => (
                            <div key={item.name}>
                                <div className="flex items-center justify-between">
                                    <a
                                        href={item.href}
                                        className="text-gray-700 hover:text-violet-600 block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        {item.name}
                                    </a>
                                    {item.subItems.length > 0 && (
                                        <input 
                                            type="checkbox" 
                                            id={`mobile-submenu-${item.name}`} 
                                            className="hidden peer"
                                        />
                                    )}
                                    {item.subItems.length > 0 && (
                                        <label
                                            htmlFor={`mobile-submenu-${item.name}`}
                                            className="px-3 py-2 cursor-pointer peer-checked:[&>svg]:rotate-180"
                                        >
                                            <div 
                                                className="h-5 w-5 text-gray-500 transition-transform duration-200" 
                                            />
                                        </label>
                                    )}
                                </div>
                                
                                {/* Mobile dropdown menu */}
                                {item.subItems.length > 0 && (
                                    <div className="hidden peer-checked:block pl-4 overflow-hidden max-h-0 peer-checked:max-h-[1000px] transition-all duration-500 ease-in-out">
                                        {item.subItems.map((category, idx) => (
                                            <div key={idx} className="py-2">
                                                <h4 className="font-medium text-gray-800">{category.name}</h4>
                                                <ul className="pl-4 mt-1 space-y-1">
                                                    {category.items.map((subItem) => (
                                                        <li key={subItem.name}>
                                                            <a
                                                                href={subItem.href}
                                                                className="text-gray-600 hover:text-violet-600 block py-1 text-sm"
                                                            >
                                                                {subItem.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="pt-4 border-t border-gray-200">
                            <a
                                href="/login"
                                className="text-gray-700 hover:text-violet-600 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Login
                            </a>
                            <a
                                href="/cart"
                                className="text-gray-700 hover:text-violet-600 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Cart (0)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const Test = () => {
    return <NavMenu />;
}

export default Test;