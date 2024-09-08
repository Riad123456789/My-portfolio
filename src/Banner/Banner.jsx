import img from "../assets/074615c6-b12d-4e01-9c94-a89f9b9a172c-removebg-preview.png"
import { AiFillFacebook } from "react-icons/ai";
import { HiArrowDownTray } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import animation from "../../public/animation.json"
import Lottie from "lottie-react";
import Typewriter from 'typewriter-effect';



const Banner = () => {
    return (

        <div className=" flex gap-8 max-w-7xl m-auto mt-20 pb-10">
            <div className="flex-1  ">

                <div className="mx-2 my-2 px-10 py-10  rounded-md btn-class ">
                    <p className="font-bold text-5xl  text-white">Hi, I’m <span className="text-red-700">Riad</span></p>
                    <p className="font-bold text-4xl  text-white pt-4 ">
                        <Typewriter
                            options={{
                                strings: ['A Front-End Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />

                    </p>

                    <p className=" pt-6 text-sm   text-gray-400">As a web developer experienced in,JavaScript, my goal is to build captivating websites and applications.
                        I am eager to learn and collaborate with a talented team to create user-friendly web solutions.
                        By writing clean code and problem-solving effectively.
                    </p>

                    <div className="pt-10 flex gap-36 items-center">
                        <div>
                            <p className="text-[#cbc5c5] font-bold text-sm">FIND WITH ME</p>
                            <div className="flex gap-4 pt-2 ">
                                <AiFillFacebook color="white" size={40} className="btn-class cursor-pointer p-3"></AiFillFacebook>
                                <IoLogoYoutube color="white" size={40} className="btn-class cursor-pointer p-3"></IoLogoYoutube>
                                <FaLinkedin color="white" size={40} className="btn-class cursor-pointer p-3"></FaLinkedin>
                            </div>
                        </div>

                        <div>
                            <p className="text-[#cbc3c3] font-bold text-sm">BEST SKILL ON</p>
                            <div className="flex gap-2 pt-2">
                                <TiHtml5 color="#E34F26" size={40} className="btn-class cursor-pointer p-3"></TiHtml5>
                                <IoLogoCss3 color="#264de4" size={40} className="btn-class cursor-pointer p-3"></IoLogoCss3>
                                <TbBrandJavascript color="#f7df1e" size={40} className="btn-class cursor-pointer p-3"></TbBrandJavascript>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="pt-4 mx-2 my-2 px-10 py-10  mt-11 rounded-md btn-class">
                    <div className="pt-5">
                        <p className="text-[#bab4b4] font-bold text-sm">Download my curriculum vitae:</p>
                        <div className="flex gap-10 pt-6 ">

                            <a
                                href='../../public/Resume_3_2.pdf'
                                download
                                className="flex items-center justify-center px-6 py-4  btn-class  text-white font-medium rounded-md transition duration-300"
                            >
                                <HiArrowDownTray className="mr-2" />
                                <span className="text-sm text-[#cf1138] tracking-[1px]">DOWNLOAD RESUME</span>
                            </a>

                            <button
                                className="flex items-center justify-center px-6 py-4  btn-class  text-white font-medium rounded-md transition duration-300"
                            >

                                <span className="text-sm text-[#cf1138] tracking-[1px]"> CONTACT  WITH  ME</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 mx-2 my-2 rounded-md  btn-class   ">
                <div className="relative">
                    <Lottie loop={true} className=" ml-6  w-[600px]  " animationData={animation}></Lottie>
                    <img className=" rounded-full absolute top-[17%] right-[26%]   w-80" src={img} alt="" />
                    {/* <img className=" rounded-full h-[300px] w-[260px] md:h-[400px] md:w-[350px] top-[570px] right-24 absolute md:top-52 md:right-[190px]" src={img} alt="" /> */}

                </div>
            </div>

        </div>
    );
};

export default Banner;