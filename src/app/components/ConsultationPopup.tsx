"use client";
import { useEffect, useState } from "react";

const ConsultationPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 20000); // 20 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShowPopup(false);

  if (!showPopup) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[9999]"
      onClick={handleClose} // 👈 backdrop click
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80 backdrop-blur-sm"></div>

      {/* Popup */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center animate-fadeIn z-10"
        onClick={(e) => e.stopPropagation()} // 👈 stops closing when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          🎉 Get a Free Consultation
        </h2>
        <p className="text-gray-600 mb-6">
          Let us help you grow your business with expert solutions.
        </p>

        {/* Form */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-5"
        >
          <input
            type="hidden"
            name="access_key"
            value="YOUR_WEB3FORMS_ACCESS_KEY"
          />

          {/* Floating label inputs */}
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              required
              className="peer w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none placeholder-transparent"
              placeholder="Your Name"
            />
            <label
              htmlFor="name"
              className="absolute left-3 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1"
            >
              Your Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              required
              className="peer w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none placeholder-transparent"
              placeholder="Your Email"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1"
            >
              Your Email
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition transform hover:scale-105"
          >
            Get Free Consultation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationPopup;
