import React, { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please complete the CAPTCHA");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="space-y-6">
        {/* Header Section */}
        <div>
          <h1 className="text-2xl font-sm mb-2">Contact Us</h1>
          <p className="text-gray-600">
          If you have any questions, please feel free to send an email to support@escortsaffair.com. <br />
          Alternatively, you can send message via below form.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-white  shadow-none ml-auto ">
          {/* Subject Field */}
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-[0.2rem] focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-[0.2] focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-[0.2] min-h-[150px] focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* reCAPTCHA */}
          {/* <div className="pt-2">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "your-recaptcha-site-key"}
              onChange={(value) => setCaptchaValue(value)}
            />
          </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-50 bg-[#c71585] hover:bg-pink-700 text-white py-1 rounded-lg text-[1rem] font-sm transition duration-300"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
