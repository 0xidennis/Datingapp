import './Siderbar.css'
import {Link } from "react-router-dom"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
    className={`fixed  inset-0 bg-[#242323] bg-opacity-50 transition-opacity ${
      isOpen ? "opacity-90 visible " : "opacity-0 invisible"
    }`}
    onClick={toggleSidebar}
  >
    <div
      className={`fixed left-0 top-0 h-full w-64 bg-[#ffff] bg-opacity-100 shadow-lg transform  z-[500]${
        isOpen ? " opacity-100 translate-x-0 " : "-translate-x-full"
      } transition-transform`}
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >
      <button
        className="absolute top-4 right-4 text-xl"
        onClick={toggleSidebar}
      >
        
      </button>
      <div className="p-6 space-y-4">
        <button className="w-full bg-pink-600 text-white py-2 rounded">
          <a href="https://www.escortsaffair.com/centre/login" target="_blank" rel="noopener noreferrer">Post Ad</a>
        </button>
         <ul>
      <li className=" w-full p-2 hover:bg-gray-200 cursor-pointer bg-[#dfe2e6] border-b text-center">
        <a href="https://www.escortsaffair.com/" target="_blank" rel="noopener noreferrer " className=' hover:text-orange-300'>Home</a>
      </li>
      <li className="w-full p-2 hover:bg-gray-200 cursor-pointer bg-[#dfe2e6] border-b text-center">
        <a href="https://www.escortsaffair.com/centre/login" target="_blank" rel="noopener noreferrer" className=' hover:border-b'>Login</a>
      </li>
      <li className="w-full p-2 hover:bg-gray-200 cursor-pointer bg-[#dfe2e6] border-b text-center">
        <a href="https://www.escortsaffair.com/centre/registrations" target="_blank" rel="noopener noreferrer" className='  hover:border-b'>Sign Up</a>
      </li>
    </ul>
      </div>
    </div>
  </div>
  )
}

export default Sidebar