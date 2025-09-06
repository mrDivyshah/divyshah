import web_icon from "../assets/web-icon.png" 
import mobile_icon from "../assets/mobile-icon.png" 
import ui_icon from "../assets/ui-icon.png" 
import graphics_icon from "../assets/graphics-icon.png" 
import Image from "next/image"
import Link from "next/link"
import { BiArrowFromRight, BiArrowToRight, BiRightArrow, BiSolidRightArrow } from "react-icons/bi"
import { GoArrowRight } from "react-icons/go"

export const serviceData = [
    { icon: web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

const Service = () => {

    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-ovo ">What i offer</h4>
            <h2 className="text-center text-5xl font-ovo">My Services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">I Am a Frontend Developer from California, USA with 10 years of experience in multiple companies like microshoft, Tesla and Apple.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
                {serviceData.map(({icon, title, description, link}, index) => (
                    <div key={index} className="border rounded-lg border-gray-400 px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-rose-50 hover:-translate-y-1 duration-500">
                        <Image src={icon} alt={title} width={100} height={100} className="w-10"/>
                        <h3 className="text-lg my-4 text-gray-700">{title}</h3>
                        <p className="text-sm text-gray-600 leading-5">{description}</p>
                        <Link href={link} className="flex gap-2 text-sm mt-5 items-center">Read More <GoArrowRight className="text-xl"/></Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Service;