"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Round from "../components/Cursor/round";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const images = [
    "/assets/profileimages/profile-pic (1).png",
    "/assets/profileimages/profile-pic (2).png",
    "/assets/profileimages/profile-pic (3).png",
    "/assets/profileimages/profile-pic (4).png",
    "/assets/profileimages/profile-pic (5).png",
    "/assets/profileimages/profile-pic (6).png",
    "/assets/profileimages/profile-pic (7).png",
    "/assets/profileimages/profile-pic (8).png",
    "/assets/profileimages/profile-pic (9).png",
    "/assets/profileimages/profile-pic (10).png",
    "/assets/profileimages/profile-pic (11).png",
    "/assets/profileimages/profile-pic (13).png",
    "/assets/profileimages/profile-pic (14).png",
    "/assets/profileimages/profile-pic (15).png",
    "/assets/profileimages/profile-pic (16).png",
    "/assets/profileimages/profile-pic (17).png",
    "/assets/profileimages/profile-pic (18).png",
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main className=" light:bg-white dark:bg-black shadow-inner shadow-lg shadow-slate-900 box-border overflow-hidden box-border w-full flex flex-col gap-5">
      <Round />
      <nav className="flex justify-between items-center p-4  h-16 xl:px-80 ">
        <div className="text-3xl font-bold">Divy Shah</div>
        <ul className="hidden md:flex gap-8 text-xl">
          <li>
            <Link
              href="#about"
              className="text-zinc-400 hover:text-gray-900 hover:border-b-4 "
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className="text-zinc-400 hover:text-gray-900 hover:border-b-4 "
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-zinc-400 hover:text-gray-900 hover:border-b-4 "
            >
              Contact
            </Link>
          </li>
        </ul>
        <div
          className="md:hidden flex flex-col justify-between h-6 w-8 cursor-pointer z-40"
          onClick={toggleMenu}
        >
          <span
            className={`block h-1 w-full bg-black transform transition duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-full bg-black transition duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-full bg-black transform transition duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-3" : ""
            }`}
          ></span>
        </div>
      </nav>
      <div
        className={`absolute top-24 right-0 w-full md:hidden transition-max-height duration-300 overflow-hidden ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 bg-slate-300 rounded-2xl mx-5">
          <li className="py-2">
            <Link href="#about" className="text-xl" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="py-2">
            <Link href="#experience" className="text-xl" onClick={toggleMenu}>
              Experience
            </Link>
          </li>
          <li className="py-2">
            <Link href="#contact" className="text-xl" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <section
        id="profile"
        className="flex flex-col md:flex-row md:justify-center items-center gap-2 md:gap-32 md:p-0 w-full h-screen"
      >
        <div className="w-64 h-64 md:w-96 md:h-96 flex items-center">
          <Image
            width={500}
            height={500}
            src="/assets/profileimages/profile-pic (13).png"
            alt="Divy Shah profile picture"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center text-center xl:text-left">
          <p className="text-lg font-semibold">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold">Divy Shah</h1>
          <p className="text-xl font-bold md:text-2xl my-4">Android & Web Developer</p>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <button
              className=" text-xs font-medium py-4 px-5 md:px-7 md:text-sm border border-black rounded-full transition hover:bg-black hover:text-white button"
              onClick={() => window.open("/assets/Divy shah CV.pdf")}
            >
              Download CV
            </button>
            <button
              className="text-xs font-medium py-4 bg-[#955e5e] px-5 md:px-7 md:text-sm border border-[#955e5e] hover:border-black rounded-full transition hover:bg-black text-white button"
              onClick={() => (location.href = "./#contact")}
            >
              Contact Info
            </button>
          </div>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <Image
              width={33}
              height={30}
              src="/assets/linkedin.png"
              alt="My LinkedIn profile"
              className="click cursor-pointer py-1"
              onClick={() =>
                (location.href =
                  "https://www.linkedin.com/in/divy-shah-36a533239/")
              }
            />
            <Image
              width={33}
              height={30}
              src="/assets/github.png"
              alt="My Github profile"
              className="click cursor-pointer py-1"
              onClick={() => (location.href = "https://github.com/mrDivyshah")}
            />
            <Image
              width={330}
              height={300}
              src="/assets/whatsapp.png"
              alt="My Whatsapp profile"
              className="click w-10"
              onClick={() => (location.href = "https://wa.me/message/T7UD22K3R4J4B1")}
            />
            <Image
              width={33}
              height={30}
              src="/assets/instagram.png"
              alt="My Instagram profile"
              className="click cursor-pointer py-1"
              onClick={() => (location.href = "https://instagram.com/divyshah2266?igshid=YzAwZjE1ZTI0Zg==")}
            />
          </div>
        </div>
      </section>
      <section
        id="about"
        className="md:mx-52 gap-3 p-0 px-3 m-0 flex items-center xl:justify-center flex-col xl:h-screen h-fit"
      >
        <div>
          <p className="w-full text-center">Get To Know More</p>
          <h1 className="text-center text-5xl my-1 md:text-7xl">About Me</h1>
        </div>
        <div className="flex items-center justify-center flex-col  xl:flex-row gap-10 flex-1">
          <div>
            <Image
              width={800}
              height={800}
              src={images[currentImageIndex]}
              alt="Profile picture"
              className="w-60 md:w-96 duration-100"
            />
          </div>
          <div className="about-details-container">
            <div className="flex justify-between gap-6 items-center mb-5">
              <div className="details-container h-full">
                <div className="w-full flex items-center justify-center icon">
                  <Image
                    width={40}
                    height={40}
                    src="/assets/experience.png"
                    alt="Experience icon"
                    className="m-5"
                  />
                </div>
                <h3 className="text-xl font-bold mb-5">Experience</h3>
                <p>
                  2+ years
                  <br />
                  Mobile Application and Web Development
                </p>
              </div>
              <div className="details-container h-full">
                <div className="w-full  flex items-center justify-center icon">
                  <Image
                    width={30}
                    height={30}
                    src="/assets/education.png"
                    alt="Education icon"
                    className="m-5"
                  />
                </div>
                <h3 className="text-xl font-bold mb-5">Education</h3>
                <p>
                  Bachelor of Computer Applications
                  <br />
                  (BCA)
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                I am the design dynamo ready to bring your graphics and web
                dreams to life! Work with me, and together, let's bring our
                creative visions to reality!
              </p>
            </div>
          </div>
        </div>
        <Image
          width={35}
          height={35}
          src="/assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow invisible md:visible "
          onClick={() => (location.href = "./#experience")}
        />
      </section>
      <section
        id="experience"
        className="md:mx-52 gap-3 p-0 px-3 pb-11 m-0 flex items-center justify-center flex-col mt-40 md:mt-0 h-fit xl:h-screen "
      >
        <div>
          <p className="section__text__p1">Explore My</p>
          <h1 className="title">Experience</h1>
        </div>
        <div className="experience-details-container md:flex-1">
          <div className="flex items-center justify-center flex-col gap-5 lg:flex-row">
            <div className="details-container h-full">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <Image
                    width={35}
                    height={35}
                    src="/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <Image
                    width={35}
                    height={35}
                    src="/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>

                <article>
                  <Image
                    width={35}
                    height={35}
                    src="/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <Image
                    width={35}
                    height={35}
                    src="/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>JAVA</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <Image
                    width={35}
                    height={35}
                    src="/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Streamlit</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <Image
                    width={35}
                    height={35}
                    src="/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Flutter</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <Image
                    width={35}
                    height={35}
                    src="/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Material UI</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container h-full">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
                <article>
                  <Image
                    width={35}
                    height={35}
                    src="/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>MongoDB</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <Image
                    width={35}
                    height={35}
                    src="/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Node JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <Image
                    width={35}
                    height={35}
                    src="/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Express JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <Image
                    width={35}
                    height={35}
                    src="/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <Image
          width={35}
          height={35}
          src="/assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow invisible md:visible"
          onClick={() => (location.href = "./#contact")}
        />
      </section>
      <section
        id="contact"
        className="md:mx-52 gap-3 p-0 px-3 m-0 flex items-center justify-center flex-col h-fit md:h-screen mt-40"
      >
        <div>
          <p className="section__text__p1">Get in Touch</p>
          <h1 className="title">Contact Me</h1>
        </div>
        <div className="border border-black rounded-xl gap-1 flex flex-col lg:flex-row flex-wrap">
          <div className="contact-info-container">
            <Image
              width={38}
              height={30}
              src="/assets/email.png"
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <Link
                href="mailto:divyshah2266@gmail.com"
                className="font-medium hover:text-slate-500 hover:border-b-4 border-slate-400"
              >
                divyshah2266@gmail.com
              </Link>
            </p>
          </div>
          <div className="contact-info-container">
            <Image
              width={32}
              height={29}
              src="/assets/linkedin.png"
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p>
              <Link
                href="https://www.linkedin.com/in/divy-shah-36a533239/"
                className="font-medium hover:text-slate-500 hover:border-b-4 border-slate-400"
              >
                divy-shah-36a533239
              </Link>
            </p>
          </div>
          <div className="contact-info-container">
            <Image
              width={50}
              height={50}
              src="/assets/whatsapp.png"
              alt="Whatsapp icon"
              className="w-9 "
            />
            <p>
              <Link
                href="https://wa.me/message/T7UD22K3R4J4B1"
                className="font-medium hover:text-slate-500 hover:border-b-4 border-slate-400"
              >
                Divy shah
              </Link>
            </p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <Link
                  href="#about"
                  className="text-zinc-400 hover:text-gray-900 hover:border-b-4 "
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-zinc-400 hover:text-gray-900 hover:border-b-4 "
                >
                  Experience
                </Link>
              </li>
              {/* <li><Link href="#projects">Projects</Link></li> */}
              <li>
                <Link
                  href="#contact"
                  className="text-zinc-400 hover:text-gray-900 hover:border-b-4 "
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2024 Divy Shah. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
