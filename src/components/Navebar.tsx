'use client'
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import { GoArrowUpRight, GoMoon } from "react-icons/go";
import { MdMenu } from "react-icons/md";


const Navebar = () => {
    const [isScroll, setIsScroll] = useState(false);

    const sideMenu = useRef<HTMLUListElement | null>(null);

    const openMenu = () => {
        if (sideMenu.current) {
        sideMenu.current.style.transform = 'translateX(-16rem)'
    }}
    const closeMenu = () => {
        if (sideMenu.current) {
        sideMenu.current.style.transform = 'translateX(16rem)'
    }}
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(scrollY > 50)
            {
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    })
    return (
        <>
        <div className="fixed -z-10 top-0 right-0 w-11/12 translate-y-[-50%]">
            <Image src="/bgradient.png" className="w-full" width={200} height={200} alt="new bg" />
        </div>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between z-50 items-center ${isScroll ? "bg-white/50 bg-opa backdrop-blur-lg shadow-sm":""}`}>
            <a href="" className="">
                <Image src="/logo light.png" width={500} height={500} className="w-28" alt="my logo" />
            </a>
            <ul className={`hidden md:flex align-middle items-center gap-6 lg:gap-8 rounded-full px-12 py-3  ${!isScroll ? "shadow-sm bg-white/50" : ""}`}> 
                <li><a href="#top" className="font-ovo">Home</a></li>
                <li><a href="#about" className="font-ovo">About</a></li>
                <li><a href="#services" className="font-ovo">Services</a></li>
                <li><a href="#work" className="font-ovo">My Work</a></li>
                <li><a href="#contact" className="font-ovo">Contact  Me</a></li>
            </ul>
            <div className="flex items-center gap-6">
                <GoMoon className="text-2xl"/>
            <a href="#contact" className="hidden md:flex justify-center items-center gap-2 border border-gray-500 rounded-full px-10 py-2.5" >Contact  Me <GoArrowUpRight className="text-2xl"/></a>
            <button className="block md:hidden" onClick={openMenu}>
                <MdMenu className="text-2xl"/>
            </button>
            </div>
            {/* mobile View Nav */}
                <ul ref={sideMenu} className="flex md:hidden flex-col h-screen gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 -right-64 bg-rose-50 transition duration-500">
<button onClick={closeMenu} className="absolute right-6 top-6">
    <CgClose />
</button>
                    <li><a href="#top" onClick={closeMenu} className="font-ovo">Home</a></li>
                    <li><a href="#about" onClick={closeMenu} className="font-ovo">About</a></li>
                    <li><a href="#services" onClick={closeMenu} className="font-ovo">Services</a></li>
                    <li><a href="#work" onClick={closeMenu} className="font-ovo">My Work</a></li>
                    <li><a href="#contact" onClick={closeMenu} className="font-ovo">Contact  Me</a></li>
                </ul>
        </nav>
        </>
    );
}

export default Navebar