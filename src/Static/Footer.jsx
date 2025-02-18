import {Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="max-w-6xl bg-gray-100 items-center mx-auto p-3">
      <nav className="container mx-auto px-4">
        <ul className="flex flex-wrap items-center justify-center gap-2 text-sm">
          <li>
            <Link to="/" className="hover:text-red-600">Home</Link>
          </li>
          
          <li className="hidden md:block text-gray-400">|</li>
          <li>
            <Link to="/Contacts" className="hover:text-red-600">Contact</Link>
          </li>

          <li className="hidden md:block text-gray-400">|</li>
          <li>
            <Link to="/privacy" className="hover:text-red-600">Privacy</Link>
          </li>

          <li className="hidden md:block text-gray-400">|</li>
          <li>
            <Link to="/Terms" className="hover:text-red-600">Terms</Link>
          </li>

          <li className="hidden md:block text-gray-400">|</li>
          <li>
            <Link to="/Traffic" className="hover:text-red-600">Report Traffic</Link>
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