import './Siderbar.css'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
    className={`fixed  inset-0 bg-[#242323] bg-opacity-50 transition-opacity ${
      isOpen ? "opacity-90 visible " : "opacity-0 invisible"
    }`}
    onClick={toggleSidebar}
  >
    <div
      className={`fixed left-0 top-0 h-full w-64 bg-white bg-opacity-100 shadow-lg transform   z-50${
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
          Post Ad
        </button>
        <ul className="">
          <li className="p-2 hover:bg-gray-200 cursor-pointer bg-[#dfe2e6] border-b ">Home</li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer bg-[#dfe2e6] border-b">Login</li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer bg-[#dfe2e6] border-b">Sign Up</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Sidebar