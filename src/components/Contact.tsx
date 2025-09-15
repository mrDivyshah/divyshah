"use client";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "919978943793"; // <-- your WhatsApp number with country code
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleLinkedIn = (e: React.FormEvent) => {
    e.preventDefault();
    const linkedInUrl = "https://www.linkedin.com/in/divynshah/";
    window.open(linkedInUrl, "_blank");
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>

      <form className="max-w-xl mx-auto">
        <textarea
          className="w-full outline-none border-[0.5px] border-gray-400 rounded-md bg-white p-3"
          rows={5}
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="flex gap-5 justify-center m-5 mt-14">
          <button
            onClick={handleWhatsApp}
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-transparent text-black outline-1 rounded-full mx-auto hover:bg-blue-600/10 duration-500 hover:cursor-pointer"
          >
            Send on WhatsApp
          </button>

          <button
            onClick={handleLinkedIn}
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 hover:cursor-pointer"
          >
            Contact on LinkedIn
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
