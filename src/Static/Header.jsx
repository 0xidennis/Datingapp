import { Menu } from "lucide-react"
import logo from '../assets/logo2.png'
import Sidebar from "../Component/Siderbar/Sidebar";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="top-0 z-50 max-w-6xl  bg-white items-center mx-auto ">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Mobile Menu Button */}
        <button className="lg:flex " aria-label="Open menu"  onClick={toggleSidebar}>
          <Menu className="h-10 w-8 text-[#c12525]" />
        </button>
         <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        {/* Logo */}
        <div className="top-10 mt-25 flex items-start gap-2 justify-center lg:mt-37 lg:ml-6  mr-auto ">
          <div className="h-34 w-34 md:h-36 md:w-36 lg:h-49 lg:w-49">
          <img src={logo} alt="EscortManagerment.affairs" className="w-full h-auto "/>
          </div>
          <span className="text-sm md:text-lg font-extrabold text-[#db1159] mt-2 md:mt-3 lg:mt-3.9"> Management</span>
        </div>

        {/* Right side navigation */}
        <div className="flex  flex-col-reverse md:flex-row items-center gap-2 mt-6">
          <button href="/adult-seo" className=" border-b text-[0.7rem] text-pink-600 hover:text-pink-700 md:w-auto lg:text-[0.8rem]">
            Adult SEO
          </button>
          <button variant="default" className="bg-[#C71585] hover:bg-blue-700 p-1 text-[#fff] text-sm rounded-[4px] md:w-auto lg:p-2 md:p-2">
            Post
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header