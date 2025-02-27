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
    <div className="fixed inset-0 flex items-center justify-center bg-[gray] bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
      <h2 className="text-lg font-semibold mb-4">Disclaimer</h2>
      <p className="text-sm text-gray-700">This website contains nudity, explicit sexual content and adult language. 
        It should be accessed only by people who are of legal age in the physical 
        location from where you are accessing the site. By accessing this website, 
        you are representing to us that you are of legal age and agree to our <span><a href="https://www.escortsaffair.com/centre/terms/terms" className="text-red-600 hover:text-amber-300">Terms & Conditions</a></span>. Any unauthorized use of this site may violate state, federal and/or foreign law.

        EscortsAffair has a zero-tolerance policy toward human trafficking, prostitution, and any other illegal conduct. 
        We cooperate with law enforcement, pursuant to appropriate process, such as a subpoena, in investigating criminal activity. Activity that violates our zero-tolerance policy may result in a referral to law enforcement. I have no intention to, and will not, use this site in violation of EscortsAffair’s policies or any federal, 
       state, or local law, and I agree to <span><a href="https://www.escortsaffair.com/centre/terms/report" className="text-red-600 hover:text-amber-300">report violations</a></span> to the appropriate authorities.</p>
      <p className="text-sm text-gray-700">
        I also agree to{" "}
        <a href="https://www.escortsaffair.com/centre/terms/report" className="text-red-600 hover:text-amber-300">
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
          <a href="https://www.escortsaffair.com/centre/terms/terms" className="text-red-600 hover:text-amber-300">
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