import Image from "next/image";
import { BiArrowFromRight, BiRightArrow } from "react-icons/bi";
import { GoArrowRight, GoDownload } from "react-icons/go";
import { HiHand } from "react-icons/hi";

const Header = () => {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <div>
                <Image src="/dnshah.png" width={500} height={500} alt="Divy N shah" className="rounded-full w-55" />
            </div>
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">Hi! I'm Divy Shah <span className="w-6">
                <picture>
                    <source
                        srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/512.webp"
                        type="image/webp"
                    />
                    <img
                        src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/512.gif"
                        alt="👋"
                        width={604}
                        height={604}
                        className="h-10 w-10"
                    />
                </picture>
            </span> </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
                Web & Mobile App Developer | Shopify Specialist
            </h1>
            <p className="max-w-2xl nx-auto font-ovo">
                I’m a passionate Shopify, Next.js, and Flutter developer from Gujarat, India, with experience building custom web apps, mobile apps, and e-commerce solutions. I’ve worked with companies like DB Aasediay Jewelers and also as a freelancer, designing and developing Shopify stores, automation tools, and business management solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <button className="flex gap-3 items-center rounded-full bg-black text-white px-10 py-3">
                    Contact me <GoArrowRight className="text-xl" />
                </button>
                <button className="flex gap-3 items-center px-10 py-3 border rounded-full border-gray-500">my resume <GoDownload /></button>
            </div>
        </div>
    );
}

export default Header;