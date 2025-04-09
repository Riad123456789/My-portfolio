import img from "../assets/074615c6-b12d-4e01-9c94-a89f9b9a172c-removebg-preview.png"
import { AiFillFacebook } from "react-icons/ai";
import { HiArrowDownTray } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import animation from "../../public/animation.json"
import Lottie from "lottie-react";
import Typewriter from 'typewriter-effect';
import { FaInstagramSquare } from "react-icons/fa";


const Banner = () => {
    return (

        <div className="pb-10 max-w-7xl m-auto mt-10 md:mt-16 lg:mt-14 lg:grid lg:grid-cols-2 ">

            <div className=" ">
                <div className="mx-5 px-6 py-6
                 md:mx-10 md:my-2 md:px-10 md:py-10
                 rounded-md btn-class ">
                    <p className="font-bold text-2xl md:text-5xl lg:text-3xl text-white">Hi, I’m <span className="text-red-700">Riad</span></p>
                    <p className="font-bold text-xl md:text-4xl lg:text-3xl text-white pt-1 md:pt-4 ">
                        <Typewriter
                            options={{
                                strings: ['A Front-End Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </p>

                    <p className="py-4 md:pt-6 lg:pt-5 text-[10px] md:text-sm lg:text-[10px]  text-gray-400">As a web developer experienced in,JavaScript, my goal is to build captivating websites and applications.
                        I am eager to learn and collaborate with a talented team to create user-friendly web solutions.
                        By writing clean code and problem-solving effectively.
                    </p>

                    <div className="pt-2 md:pt-10 lg:pt-2 flex md:gap-36 lg:gap-0 items-center justify-between">
                        <div className="">
                            <p className="text-[#cbc5c5] font-bold text-xs md:text-sm">FIND WITH ME</p>
                            <div className="flex items-center gap-1 md:gap-4 lg:gap-3 pt-2 ">
                                <a href="https://www.facebook.com/profile.php?id=100079115744038&mibextid=ZbWKwL">
                                    <AiFillFacebook color="white" size={40} className="btn-class rounded-sm cursor-pointer p-3"></AiFillFacebook>
                                </a>
                                <a href="https://www.instagram.com/rjriad6?igsh=eWhscmt5Z296cmQy">
                                    <FaInstagramSquare color="white" size={40} className="btn-class rounded-sm cursor-pointer p-3"></FaInstagramSquare>
                                </a>
                              <a href="https://www.linkedin.com/in/riad-jowarder-55a80630a/">
                              <FaLinkedin color="white" size={40} className="btn-class rounded-sm cursor-pointer p-3"></FaLinkedin>
                              </a>
                            </div>
                        </div>

                        <div>
                            <p className="text-[#cbc3c3] font-bold text-xs md:text-sm">BEST SKILL ON</p>
                            <div className="flex items-center gap-1 md:gap-4 lg:gap-3 pt-2 ">
                                <TiHtml5 color="#E34F26" size={40} className="btn-class rounded-sm cursor-pointer p-3"></TiHtml5>
                                <IoLogoCss3 color="#264de4" size={40} className="btn-class rounded-sm cursor-pointer p-3"></IoLogoCss3>
                                <TbBrandJavascript color="#f7df1e" size={40} className="btn-class rounded-sm cursor-pointer p-3"></TbBrandJavascript>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-7 mx-5 px-6 py-6
                 md:pt-4  md:mx-10 md:my-2 md:px-10 md:py-10  md:mt-11 
                 lg:mt-10 
                 xl:mt-12
                  rounded-md btn-class">
                    <div className=" md:pt-5">
                        <p className="text-[#bab4b4] font-bold text-sm">Download my curriculum vitae:</p>

                        <div className="flex justify-between md:gap-10 lg:gap-5 pt-6 ">
                            <a
                                href='../../public/Resume_3_2.pdf'
                                download
                                className="flex items-center justify-center px-4 py-4 md:px-6 md:py-4 lg:px-5   btn-class  text-white font-medium rounded-md transition duration-300"
                            >
                                <HiArrowDownTray className="mr-2" />
                                <span className="text-[8px] md:text-sm lg:text-[9px] text-[#cf1138] tracking-[1px]">DOWNLOAD RESUME</span>
                            </a>

                            <a href="#contact">
                                <button
                                    className="flex items-center justify-center px-4 py-4 md:px-7 md:py-4 lg:px-7  btn-class  text-white font-medium rounded-md transition duration-300"
                                >
                                    <span className="text-[8px] md:text-sm lg:text-[9px] text-[#cf1138] tracking-[1px]"> CONTACT  WITH  ME</span>
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mt-14 mx-5 my-2
             md:mt-8 md:mx-10 md:my-2 
             lg:my-[8px] 
             rounded-md btn-class  flex items-center justify-center">

                <div className="w-full flex justify-center items-center relative ">
                    <Lottie loop={true} className="w-full  m-auto" animationData={animation}></Lottie>
                    <img className=" rounded-full w-52 m-auto md:w-[350px] lg:w-[240px] xl:w-[300px] absolute top-1/2 transform -translate-y-1/2" src={img} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;