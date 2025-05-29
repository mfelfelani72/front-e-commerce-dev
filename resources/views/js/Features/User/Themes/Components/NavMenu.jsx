import React from 'react'

// Components

import { Button } from "../../../../Core/Components/Button";
import { ArrowMenuIcon, MenuIcon } from '../../../../Core/Components/Icon';

const NavMenu = ({ ...props }) => {
    return (
        <>
            <div className="flex items-center">
                {/* <div className='group relative'>
                    <Button className={"px-4 h-11 text-sm font-medium rounded-md hover:bg-violet-600"} >
                        <div className='flex flex-row items-center gap-2'>
                            <MenuIcon width="18" height="18" color="#fff" />
                            <div className=''>
                                All categories
                            </div>
                        </div>
                    </Button>

                    <div className='bg-white absolute left-0 top-11 z-20 w-[18rem] origin-top transform overflow-hidden opacity-0 scale-y-0 h-0 group-hover:opacity-100 group-hover:scale-y-100 group-hover:h-auto transition-all duration-300 ease-out border border-violet-50 rounded-md shadow-xl'>
                        <div className='flex flex-row justify-between bg-white shadow-xl border-t-2 border-violet-600'>
                            <div className="w-full rounded-b-lg p-3 grid grid-cols-1 gap-2 mt-0 animate-slideUp">
                                <div className='group relative'>
                                    {props?.categories?.map((item, index) => (
                                        <div key={index}>
                                            <div className='flex flex-row w-full justify-between text-gray-700 hover:text-violet-600 py-1 text-sm transition-colors duration-150 cursor-pointer'>
                                                <div>{item?.name}</div>
                                                <div><ArrowMenuIcon className={"-rotate-90"} width="16" height="16" color="#000" /></div>
                                            </div>
                                            <div className='bg-white absolute left-0 top-11 z-20 w-[18rem] origin-top transform overflow-hidden opacity-0 scale-y-0 h-0 group-hover:opacity-100 group-hover:scale-y-100 group-hover:h-auto transition-all duration-300 ease-out border border-violet-50 rounded-md shadow-xl'>
                                                asdsad
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className='group relative'>
                    <Button className="px-4 h-11 text-sm font-medium rounded-md hover:bg-violet-600">
                        <div className='flex flex-row items-center gap-2'>
                            <MenuIcon width="18" height="18" color="#fff" />
                            <div>All categories</div>
                        </div>
                    </Button>

                    <div className='absolute left-0 top-12 z-20 w-[18rem] origin-top transform opacity-0 scale-y-0 h-0 group-hover:opacity-100 group-hover:scale-y-100 group-hover:h-auto transition-all duration-300 ease-out bg-white border border-violet-50 rounded-md shadow-xl border-t-2 border-t-violet-600'>
                        <div className='p-3 grid grid-cols-1 gap-2'>
                            {props?.categories?.map((item, index) => (
                                <div key={index} className='group/sub relative'>
                                    <div className='flex flex-row w-full justify-between text-gray-700 hover:text-violet-600 py-1 text-sm transition-colors duration-150 cursor-pointer'>
                                        <div>{item?.name}</div>
                                        <div>
                                            <ArrowMenuIcon className="-rotate-90 group-hover/sub:rotate-90 transition-transform duration-200" width="16" height="16" color="#000" />
                                        </div>
                                    </div>
                                    <div className='absolute left-full top-0 mx-[0.75rem] z-30 w-[18rem] origin-left transform overflow-hidden opacity-0 scale-x-0 h-auto group-hover/sub:opacity-100 group-hover/sub:scale-x-100 transition-all duration-300 ease-out bg-white border border-violet-50 rounded-md shadow-xl border-t-2 border-t-violet-600'>
                                        <div className='p-3'>
                                            sad
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="md:flex space-x-1 ml-10">
                    {props?.menuItems.map((item) => (
                        <div key={item.name} className="group relative">
                            <a
                                href={item.href}
                                className="text-gray-700 hover:text-violet-600 px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                            >
                                {item.name}
                                {item.subItems.length > 0 && (
                                    // icon
                                    <ArrowMenuIcon
                                        width="16" height="16" color="#000"
                                        className="mx-1 mt-0.5 h-4 w-4 text-gray-500 group-hover:text-violet-600 transition-transform duration-200 group-hover:rotate-180"
                                    />
                                )}
                            </a>

                            {/* Mega Menu */}
                            {item.subItems.length > 0 && (
                                <div className="absolute left-0 top-8 z-20 w-[800px] origin-top transform overflow-hidden opacity-0 scale-y-0 h-0 group-hover:opacity-100 group-hover:scale-y-100 group-hover:h-auto transition-all duration-300 ease-out border border-violet-50 rounded-md shadow-xl">
                                    <div className='flex flex-row justify-between bg-white shadow-xl border-t-2 border-violet-600'>
                                        <div className="w-full rounded-b-lg p-6 grid grid-cols-3 gap-6 mt-0 animate-slideUp">
                                            {item.subItems.map((category, idx) => (
                                                <div key={idx} className="space-y-2">
                                                    <h3 className="text-md font-semibold text-gray-900 border-b border-violet-800 pb-2 mb-2">
                                                        {category.name}
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        {category.items.map((subItem) => (
                                                            <li key={subItem.name}>
                                                                <a
                                                                    href={subItem.href}
                                                                    className="text-gray-700 hover:text-violet-600 block py-1 text-sm transition-colors duration-150"
                                                                >
                                                                    {subItem.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='inline-flex items-end justify-center p-2'>
                                            <img loading='lazy' alt={item?.name} src={item?.picture} className='w-80 h-60 rounded-sm' />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default NavMenu