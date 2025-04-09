/* eslint-disable react/prop-types */
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import img1 from "../assets/074615c6-b12d-4e01-9c94-a89f9b9a172c-removebg-preview.png"
import { AiFillFacebook } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Navber2 = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const NavLink1 = <>
        <li className="hover:text-red-600 font-serif"><a href='#home'>HOME</a></li>
        <li className="hover:text-red-600 font-serif"><a href="#experience">EXPERIENCE</a></li>
        <li className="hover:text-red-600 font-serif"><a href="#skills">SKILLS</a></li>
        <li className="hover:text-red-600 font-serif"><a href='#project'>PROJECT</a></li>
        <li className="hover:text-red-600 font-serif"><a href='#Education'>EDUCATION</a></li>
        <li className="hover:text-red-600 font-serif"> <a href='#contact'>CONTACT</a></li>
    </>

    const NavLink2 = <>

        <li className="hover:text-red-600 font-serif"><a href='#home'>HOME</a></li>
        <li className="hover:text-red-600 font-serif"><a href="#experience">EXPERIENCE</a></li>
        <li className="hover:text-red-600 font-serif"><a href="#skills">SKILLS</a></li>
        <li className="hover:text-red-600 font-serif"><a href='#project'>PROJECT</a></li>
        <li className="hover:text-red-600 font-serif"><a href='#Education'>EDUCATION</a></li>
        <li className="hover:text-red-600 font-serif"> <a href='#contact'>CONTACT</a></li>

    </>

    return (
        <div className="">
            <div className="drawer ">
                <input
                    id="my-drawer-3"
                    type="checkbox"
                    className="drawer-toggle"
                    checked={isSidebarOpen}
                    onChange={toggleSidebar} />
                <div className="drawer-content  ">

                    <div className=" bg-[#212428] shadow-lg lg:flex items-center lg:justify-between    sticky top-0 z-50">

                        <div className=" flex items-center justify-between  px-5 md:px-8 lg:px-5 xl:px-16 py-[9px] lg:py-4 xl:py-4 ">
                            <div className=" flex items-center ">
                                <div className="avatar border-2 rounded-full p-1">
                                    <div className=" w-8 rounded-full">
                                        <img src={img1} />
                                    </div>
                                </div>
                                <p
                                    style={{ textTransform: "uppercase", color: "transparent", WebkitBackgroundClip: "text" }}
                                    className="bg-gradient-to-r from-[#cf1138] to-[#830a22]  text-white text-[14px] md:text-lg lg:text-xl pl-2 font-extrabold  md:w-60 w-40 ">Riad Jowarder
                                </p>
                            </div>
                            <div className=" lg:hidden ">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost text-[#c92828]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className=" inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                        </div>

                        <div className="flex items-center gap-14 lg:mr-6 xl:mr-16">
                            <div className="hidden lg:block ">
                                <ul className=" flex items-center lg:gap-8 xl:gap-10  text-[#dcd3d3] text-xs ">
                                    {NavLink1}
                                </ul>
                            </div>

                            <div className="hidden lg:block">
                                <a href="#contact">
                                    <button
                                        className="hidden md:block text-[#cf1138] bg-[#1f2226] focus:outline-none shadow-md rounded-md text-sm px-6 py-2  text-center me-2 font-medium  tracking-wide btn-class ">HIRE ME
                                    </button>
                                </a>
                            </div>
                        </div>

                    </div>
                    {children}
                </div>

                <div className={`drawer-side lg:drawer-toggle z-50 transition-all  duration-1000 transform ${isSidebarOpen ? "translate-x-0" : ""
                    }`}>
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay " ></label>

                    <div className="menu py-5  px-3 md:px-7 w-60 md:w-96 min-h-full bg-[#212428]">
                        <div className="flex items-center justify-between">
                            <div className=" flex items-center ">
                                <div className="avatar border-2 rounded-full p-1">
                                    <div className=" w-6 rounded-full">
                                        <img src={img1} />
                                    </div>
                                </div>
                                <p
                                    style={{ textTransform: "uppercase", color: "transparent", WebkitBackgroundClip: "text" }}
                                    className="bg-gradient-to-r from-[#cf1138] to-[#830a22]  text-white text-[11px] pl-2 font-extrabold  md:w-60 w-32 ">Riad Jowarder
                                </p>
                            </div>
                            <div
                                className="flex justify-end cursor-pointer"
                                onClick={toggleSidebar}
                            >
                                <RxCross2 className="bg-[#383737] p-1 rounded-full" color="red" size={30}></RxCross2>
                            </div>
                        </div>
                        <div className="h-[1px] my-3 bg-[#393535]"></div>

                        <ul onClick={toggleSidebar} className="pt-7 font-medium text-[#bdb7b4] ">
                            {NavLink2}
                        </ul>

                        <div className="h-[1px] mt-14 bg-[#393535]"></div>
                        <div className="mt-4">
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

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Navber2;