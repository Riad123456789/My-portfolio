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

        <div  className=" md:flex bg-black md:pt-14 ">
            <div className="flex-1 p-5  md:pt-24 ">
                <div className="md:w-[500px] mx-auto ">
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

                </div>
                <p className="font-bold md:w-[500px]  mx-auto  pt-5 text-gray-400">As a web developer experienced in,JavaScript, my goal is to build captivating websites and applications.
                    I am eager to learn and collaborate with a talented team to create user-friendly web solutions.
                    By writing clean code and problem-solving effectively.</p>
                <div className="flex gap-20 pt-4 md:w-[500px] mx-auto ">
                    <div>
                        <p className="text-gray-400 font-bold text-lg">FIND WITH ME</p>
                        <div className="flex gap-4 pt-2">
                            <AiFillFacebook color="#0535f7" size={41} className="shadow-lg shadow-blue-600 p-1 border"></AiFillFacebook>
                            <IoLogoYoutube color="red" size={38} className="shadow-lg shadow-red-500 p-1 border"></IoLogoYoutube>
                            <FaLinkedin color="blue" size={39} className="shadow-lg shadow-blue-600 p-1 border"></FaLinkedin>


                        </div>
                    </div>
                    <div>
                        <p className="text-gray-400 font-bold text-lg">BEST SKILL ON</p>
                        <div className="flex gap-2 pt-2">
                            <TiHtml5 color="#f55142" size={40} className="shadow-lg shadow-orange-500 p-1 border"></TiHtml5>
                            <IoLogoCss3 color="#4269f5" size={40} className="shadow-lg shadow-blue-600 p-1 border"></IoLogoCss3>
                            <TbBrandJavascript color="#f5e642" size={40} className="shadow-lg shadow-amber-400 p-1 border"></TbBrandJavascript>
                        </div>
                    </div>
                </div>


                <div className="flex gap-10 md:w-[500px] mx-auto pt-10">
                    <a href='../../public/Resume_3_2.pdf' download className=" text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  font-medium rounded-lg  text-center  btn btn-outline btn-sm"><HiArrowDownTray color="white"> </HiArrowDownTray>
                        <span className="text-black font-bold"> Download Resume</span>
                    </a>
                    <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  font-medium rounded-lg  text-center  btn btn-outline btn-sm">
                        <span className="text-black font-bold">CONTACT WITH ME</span></button>
                </div>

            </div>

            <div className="flex-1 flex justify-center mx-auto   ">
                <div>
                    <Lottie loop={true} className=" w-[450px]   md:w-[600px] relative" animationData={animation}></Lottie>
                    <img className=" rounded-full h-[300px] w-[260px] md:h-[400px] md:w-[350px] top-[570px] right-20 absolute md:top-52 md:right-48" src={img} alt="" />

                </div>
            </div>

        </div>
    );
};

export default Banner;