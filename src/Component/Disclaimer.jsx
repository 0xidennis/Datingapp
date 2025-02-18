import { useState, useEffect } from "react";

const Disclaimer = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
  
    useEffect(() => {
      const hasAccepted = localStorage.getItem("disclaimerAccepted");
      if (hasAccepted) {
        setIsOpen(false);
      }
    }, []);
  
    const handleAccept = () => {
      if (isChecked) {
        localStorage.setItem("disclaimerAccepted", "true");
        setIsOpen(false);
        onAccept();
      }
    };
  
    if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
      <h2 className="text-lg font-semibold mb-4">Disclaimer</h2>
      <p className="text-sm text-gray-700">
        I also agree to{" "}
        <a href="#" className="text-red-600 hover:underline">
          report suspected exploitation of minors and/or human trafficking to the appropriate authorities.
        </a>
      </p>
      <p className="text-sm text-gray-700 mt-2">
        This site uses cookies. By continuing to browse the site, you agree to our use of cookies.
      </p>

      <div className="flex items-center mt-4">
        <input
          type="checkbox"
          id="agree"
          className="mr-2"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label htmlFor="agree" className="text-sm text-gray-700">
          I have read and agree to this disclaimer as well as the{" "}
          <a href="#" className="text-red-600 hover:underline">
            Terms of Use
          </a>
        </label>
      </div>

      <div className="flex justify-end mt-4">
        <button className="bg-gray-500 text-white px-4 py-2 rounded mr-2" onClick={() => setIsOpen(false)}>
          Close
        </button>
        <button
          className={`px-4 py-2 rounded ${
            isChecked ? "bg-pink-600 hover:bg-pink-700 text-white" : "bg-gray-300 cursor-not-allowed"
          }`}
          onClick={handleAccept}
          disabled={!isChecked}
        >
          Continue
        </button>
      </div>
    </div>
  </div>
  )
}

export default Disclaimer