import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Profiles from "./components/Profiles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ConsultationPopup from "./components/ConsultationPopup";
import WhatsAppButton from "./components/WhatsappIcon";
import ChatBot from "./components/ChatBot";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Testimonials />
      {/* <Profiles /> */}
      <Contact />
      <Footer />
      <ConsultationPopup />
      <ChatBot apiEndpoint="/api/chat" />
      <WhatsAppButton phoneNumber="919876543210" />
    </>
  );
}
