"use client";
import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    toast.loading("Sending message...", { id: "submitToast" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (result.success) {
        toast.success("Message sent successfully!", { id: "submitToast" });
        formRef.current.reset();
      } else {
        toast.error(result.message || "Failed to send message", {
          id: "submitToast",
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", {
        id: "submitToast",
      });
      console.error(error);
    }
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <Toaster position="top-right" />
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#C01920]">
          Send Us a Message
        </h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-600 bg-gray-900/50 text-white placeholder-gray-400 focus:ring-[#C01920] focus:border-[#C01920]"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-600 bg-gray-900/50 text-white placeholder-gray-400 focus:ring-[#C01920] focus:border-[#C01920]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-600 bg-gray-900/50 text-white placeholder-gray-400 focus:ring-[#C01920] focus:border-[#C01920]"
              placeholder="Write your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#C01920] hover:bg-[#a0151a] transition-colors duration-300 text-white font-semibold py-3 rounded-lg shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
