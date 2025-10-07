"use client";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ConsultationPopup from "./components/ConsultationPopup";
import WhatsAppButton from "./components/WhatsappIcon";
import UniqueSection from "./components/UniqueSection";
import { Toaster } from "react-hot-toast";

export default function Home() {
  // popup state lifted to Home so Toaster (also here) can show always
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* Global Toaster — always mounted */}
      <Toaster position="top-right" />

      <NavBar />
      {/* pass open method to Hero so Hero can trigger popup */}
      <Hero openPopup={() => setShowPopup(true)} />
      <About />
      <Projects />
      <UniqueSection />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Global Consultation Popup */}
      <ConsultationPopup
        showPopup={showPopup}
        onClose={() => setShowPopup(false)}
      />

      <WhatsAppButton phoneNumber="919840364084" />
    </>
  );
}
