

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
    className={`fixed z-50 inset-0 bg-black bg-opacity-50 transition-opacity ${
      isOpen ? "opacity-70 visible z-100" : "opacity-0 invisible"
    }`}
    onClick={toggleSidebar}
  >
    <div
      className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
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
        <ul className="space-y-2">
          <li className="p-2 hover:bg-gray-200 cursor-pointer">Home</li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer">Login</li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer">Sign Up</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Sidebar