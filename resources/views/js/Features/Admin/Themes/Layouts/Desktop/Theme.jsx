import React from 'react'

// Containers

import Header from "./Containers/Header";
import Sidebar from "./Containers/Sidebar";

const Theme = ({className,children,...props}) => {
  return (
   <>
   <Sidebar />
      <div className="w-[calc(100vw-16rem)] ltr:ml-[16rem] rtl:mr-[16rem]">
        <Header />
        <div className="mt-[4.5rem] bg-BackgroundSection-light dark:bg-BackgroundSection-dark min-h-[calc(100vh-4.5rem)] p-5">
         {children}
        </div>
      </div>
   </>
  )
}

export default Theme