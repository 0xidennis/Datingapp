import { Menu } from "lucide-react"
import logo from '../assets/logo.png'
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
          <Menu className="h-6 w-6 text-pink-600" />
        </button>
         <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        {/* Logo */}
        <div className="flex items-start gap-2 ">
          <div className="h-8 w-8">
          <img src={logo} alt="EscortManagerment.affairs" className="w-full h-auto"/>
          </div>
          <span className="text-lg font-semibold text-pink-600"> Management</span>
        </div>

        {/* Right side navigation */}
        <div className="flex items-center gap-4">
          <button href="/adult-seo" className=" lg:grid border-b text-sm text-pink-600 hover:text-pink-700 md:block">
            Adult SEO
          </button>
          <button variant="default" className="bg-pink-600 hover:bg-pink-700">
            Post
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header