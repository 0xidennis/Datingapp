import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-4">
    <nav className="container mx-auto px-4">
      <ul className="flex flex-wrap items-center justify-center gap-2 text-sm">
        <li>
            <Link to="/">
          <a className="hover:text-red-600">
            Home
          </a>
          </Link>
        </li>
        <li className="hidden md:block text-gray-400">|</li>
        <li>
          <Link to="/Contacts">
          <a  className="hover:text-red-600">
            Contact
          </a>
          </Link>
        </li>
        <li className="hidden md:block text-gray-400">|</li>
        <li>
        <Link to="/Privacy">
          <a  className="hover:text-red-600">
            Privacy
          </a>
          </Link>
        </li>
        <li className="hidden md:block text-gray-400">|</li>
        <li>
        <Link to="/Terms">
          <a  className="hover:text-red-600">
            Terms
          </a>
          </Link>
        </li>
        <li className="hidden md:block text-gray-400">|</li>
        <li>
        <Link to="/Traffic">
          <a  className="hover:text-red-600 text-">
            Report Traffic
          </a>
          </Link>
        </li>
        <li className="hidden md:block text-gray-400">|</li>
        <li>
          <span className="text-gray-600">
            © 2024{" "}
            <a href="/" className="text-red-600 hover:text-red-700">
              EscortsAffairManagement.com
            </a>
          </span>
        </li>
      </ul>
    </nav>
  </footer>
  )
}

export default Footer