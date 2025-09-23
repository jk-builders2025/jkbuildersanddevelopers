import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
    </>
  );
}
