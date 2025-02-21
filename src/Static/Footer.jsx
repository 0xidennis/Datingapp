import {Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="max-w-6xl bg-gray-100 items-center mx-auto p-3">
      <nav className="container mx-auto px-4">
        <ul className="flex flex-wrap items-center justify-center gap-2 text-sm">
          <li>
            <Link to="/" className="hover:text-amber-300 text-red-600">Home</Link>
          </li>
          
          <li className=" md:block text-black">|</li>
          <li>
            <Link to="https://www.escortsaffair.com/centre/terms/contact" className="hover:text-amber-300 text-red-600">Contact</Link>
          </li>

          <li className=" md:block text-black">|</li>
          <li>
            <Link to="https://www.escortsaffair.com/centre/terms/privacy" className="hover:text-amber-300 text-red-600">Privacy</Link>
          </li>

          <li className=" md:block text-black">|</li>
          <li>
            <Link to="https://www.escortsaffair.com/centre/terms/terms" className="hover:text-amber-300 text-red-600">Terms</Link>
          </li>

          <li className=" md:block text-black">|</li>
          <li>
            <Link to="https://www.escortsaffair.com/centre/terms/report" className="hover:text-amber-300 text-red-600">Report Traffic</Link>
          </li>

          <li className=" md:block text-black">|</li>
          <li>
            <span className="text-gray-600">
              © 2022{" "}
              <a href="/" className="text-red-600 hover:text-amber-300">
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