import Image from "next/image";
import { BsStackOverflow } from "react-icons/bs";
import { FaCode, FaGraduationCap } from "react-icons/fa6";
import { GoBook, GoCode } from "react-icons/go";
import { LuGraduationCap } from "react-icons/lu";
export const infilist = [
    {
        icon: <FaCode className="text-4xl mt-3"/>,
        iconDark: <GoCode/>, 
        title: "Language",
        description: "HTML, CSS, JavaScript, React, liquid(Shopify), Dart, Java" 
    },
  
    {
        icon: <BsStackOverflow className="text-4xl mt-3"/>,
        iconDark: <GoCode/>, 
        title: "Framework",
        description: "Next js, Flutter" 
    },
  
    {
        icon: <LuGraduationCap className="text-4xl mt-3"/>,
        iconDark: <GoCode/>, 
        title: "Education",
        description: `BCA[2021-2024], MCA [2024-2026]` 
    },
  
];

export const tools = [
   '/vscode.png',
   '/firebase.png',
   '/mongodb.png',
   '/git.png',
   '/android.png',  
   '/firebasestudio.png',  
]

const About = () => {    
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-ovo ">Introduction</h4>
            <h2 className="text-center text-5xl font-ovo">About me</h2>
            <div className="flex">

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="relative w-[400px] h-[500px] rounded-5xl group">
                    <Image
                        src="/3.png"
                        alt="Default Image"
                        fill
                        className="object-cover transition-opacity duration-300 group-hover:opacity-0 rounded-2xl"
                    />
                    <Image
                        src="/2.png"
                        alt="Hover Image"
                        fill
                        className="object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-2xl"
                    />
                </div>
                <div className="flex-1"> 
                    <p className="mb-10 max-w-2xl font-ovo">
                        I Am a experienced frontend developer with over a decode of professional expertise in the field. Throught my cureer,I have had the prevolege of collaborating with prestigious organizations, contributing to their success and growth.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {infilist.map(({icon,iconDark, title, description}, index) => (
                            <li key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-pink-50 hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                                {icon} 
                                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                                <p className="text-gray-600 text-sm">{description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className="my-6 text-gray-700 font-ovo">Tool i use</h4>
                    <ul className="flex items-center gap-3 sm:gap-5 ">
                        {tools.map((tool,index) => (
                                <li key={index} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-xl cursor-pointer hover:-translate-y-1 duration-500">
                                    <Image src={tool} width={200} height={200} alt="icon" className="w-5 sm:w-7"/>
                                </li>
                            ))}
                    </ul>
                </div>
</div>
            </div>
        </div>
    );
}

export default About;