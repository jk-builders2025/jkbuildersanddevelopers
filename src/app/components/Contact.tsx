"use client";
import React, { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    formData.append("access_key", "70a81ca7-d4d1-4364-9601-0d158e1763ec");

    toast.loading("Sending message...", { id: "submitToast" });
    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Message sent successfully! 🎉", { id: "submitToast" });
        formRef.current.reset();
      } else {
        toast.error(result.message || "Failed to send message 😕", {
          id: "submitToast",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("An error occurred. Please try again later.", {
        id: "submitToast",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full bg-gray-50 py-16">
      <Toaster position="top-right" />

      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE: Contact Info + Map */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-6">Get in Touch</h2>
          <p className="text-black mb-8">
            Reach out for inquiries, collaborations, or project discussions.
            We’d love to hear from you!
          </p>

          <ul className="space-y-6 text-lg text-black">
            <li className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#C01920] mt-1" />
              <span>
                SF No 181/1A5B1, Sri Balaji Towers, Bangalore Highway, <br />
                near JP Indian Oil Petrol Bunk, Bayanapalli, <br />
                Krishnagiri, Tamil Nadu 635002
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-[#C01920]" />
              <a
                href="tel:+919840364084"
                className="text-black hover:underline"
              >
                +91 98403 64084
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-[#C01920]" />
              <a
                href="mailto:jkbuildersanddevelopers@gmail.com"
                className="text-black hover:underline"
              >
                info@jkbuildersanddevelopers.com
              </a>
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex gap-6 mt-10">
            <a
              href="https://www.facebook.com/share/1BHxJiD116/?mibextid=wwXIfr"
              target="_blank"
              className="text-black hover:text-indigo-600 transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/jk_builders_and_developers?igsh=dm9xMW44azlwZnd0&utm_source=qr"
              target="_blank"
              className="text-black hover:text-pink-600 transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-black hover:text-blue-600 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.6708901314587!2d78.20049337454024!3d12.537948224238532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac351e49d2d0f5%3A0xc0a395b36add8c9d!2sJk%20builders%20and%20developers!5e0!3m2!1sen!2sin!4v1759328215392!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE: Contact Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#C01920] text-center">
            Send Us a Message
          </h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-black">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 text-black placeholder-black focus:ring-[#C01920] focus:border-[#C01920] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 text-black placeholder-black focus:ring-[#C01920] focus:border-[#C01920] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+91"
                className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 text-black placeholder-black focus:ring-[#C01920] focus:border-[#C01920] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Write your message..."
                className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 text-black placeholder-black focus:ring-[#C01920] focus:border-[#C01920] transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#C01920] hover:bg-[#a0151a] transition-colors duration-300 text-white font-semibold py-3 rounded-lg shadow-lg ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
