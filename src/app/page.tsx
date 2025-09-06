import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/header";
import Navebar from "@/components/Navebar";
import Service from "@/components/Service";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
 <>
    <Navebar />
    <Header />
    <About />
    <Service />
    <Work />
    <Contact />
 </>
  );
}
