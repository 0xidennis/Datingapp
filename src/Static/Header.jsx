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
    <header className="top-0 z-50 max-w-6xl  bg-white items-center mx-auto">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Mobile Menu Button */}
        <button className="lg:flex " aria-label="Open menu"  onClick={toggleSidebar}>
          <Menu className="h-10 w-9 text-[#c12525]" />
        </button>
         <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        {/* Logo */}
        <div className="top-10 mt-36 flex items-start gap-2 justify-center  mr-auto ">
          <div className="h-49 w-49">
          <img src={logo} alt="EscortManagerment.affairs" className="w-full h-auto"/>
          </div>
          <span className="text-lg font-extrabold text-[#db1159] mt-3"> Management</span>
        </div>

        {/* Right side navigation */}
        <div className="flex items-center gap-4">
          <button href="/adult-seo" className="lg:grid border-b text-sm text-pink-600 hover:text-pink-700 md:0rder-2">
            Adult SEO
          </button>
          <button variant="default" className="bg-[#C71585] hover:bg-blue-700 p-2 text-[#fff] text-sm rounded-[4px]">
            Post
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header