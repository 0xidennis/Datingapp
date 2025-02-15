

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-4">
    <nav className="container mx-auto px-4">
      <ul className="flex flex-wrap items-center justify-center gap-2 text-sm">
        <li>
          <a href="/" className="hover:text-red-600">
            Home
          </a>
        </li>
        <li className="hidden md:block text-gray-400">|</li>
        <li>
          <a href="/contact" className="hover:text-red-600">
            Contact
          </a>
        </li>
        <li className="hidden md:block text-gray-400">|</li>
        <li>
          <a href="/privacy" className="hover:text-red-600">
            Privacy
          </a>
        </li>
        <li className="hidden md:block text-gray-400">|</li>
        <li>
          <a href="/terms" className="hover:text-red-600">
            Terms
          </a>
        </li>
        <li className="hidden md:block text-gray-400">|</li>
        <li>
          <a href="/report" className="text-red-600 hover:text-red-700">
            Report Trafficking
          </a>
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