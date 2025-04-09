import { FaGithub } from "react-icons/fa";
import img from "../../src/assets/screencapture-rn53themes-net-themes-matrimo-index-html-2024-09-15-22_15_15.png"
import img1 from "../../src/assets/screencapture-react-assignment-9-4a258-web-app-2024-09-15-23_12_49.png"
import { AiFillFacebook } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { TbFileTypeCss } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoFirebase } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaCcStripe } from "react-icons/fa6";
import img3 from "../../src/assets//Employment-Contract.webp"
import img4 from "../../src/assets/screencapture-greedy-basket-surge-sh-2024-07-01-02_48_12.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

AOS.init({

    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    offset: 120, // offset (in px) from the original trigger point
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 2000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});





const Project = () => {
    return (
        <div id="project" className="bg-[#212428] my-20 md:my-32 max-w-7xl mx-auto  overflow-hidden lg:pb-6 pb-6">
            <div className="pt-6 md:py-10">
                <p className="text-center text-2xl  md:text-5xl text-[#dedbdb] poppins-bold tracking-wider">MY PROJECT</p>
            </div>


            <div className="grid gap-12 md:gap-8 lg:gap-0 xl:gap-8 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 pt-16 md:pt-12 md:mx-4 ">

                <div
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="10000"
                >
                    <div className="justify-center rounded-md btn-class mx-7 px-7 py-8 group">
                        <div>
                            <div className="group relative overflow-hidden rounded-md ">
                                <img
                                    className="group-hover:scale-110 transition-transform duration-1000 ease-in-out h-40 w-full"
                                    src={img}
                                    alt="product image"
                                />
                            </div>
                            <div className="pt-7 ">
                                <div className='flex justify-between items-center'>
                                    <h5 className="text-base lg:text-[11px] xl:text-base -tracking-wider text-[#d43030] poppins-bold">MATRIMONY SERVICES -</h5>
                                    <div className="flex items-center gap-2">
                                        <a href="https://github.com/Riad123456789/matrimony-client-repo">
                                            <FaGithub color="white" size={30} className="btn-class cursor-pointer p-2" />
                                        </a>
                                        <a href="">
                                            <FaExternalLinkAlt color="white" size={30} className="btn-class cursor-pointer p-2" />
                                        </a>
                                    </div>
                                </div>

                                <div className='pt-5'>
                                    <p className="text-[#cbc5c5] font-bold text-[10px] md:text-xs lg:text-[9px] xl:text-xs tracking-wider uppercase">Technology :</p>
                                    <div className="grid grid-cols-3 items-center gap-3 pt-4">
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <FaHtml5 color="white" size={11} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px] tracking-wider">HTML</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <TbFileTypeCss color="white" size={12} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px] tracking-wider">CSS</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <IoLogoJavascript color="white" size={11} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px] tracking-wider">JavaScript</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <FaReact color="white" size={12} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px] tracking-wider">React</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <BiLogoTailwindCss color="white" size={13} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px] tracking-wider">Tailwind</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <BiLogoFirebase color="white" size={12} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px] tracking-wider">Firebase</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <SiMongodb color="white" size={12} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px] tracking-wider">MongoDb</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <SiMui color="white" size={12} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px] tracking-wider">MaterialUI</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <FaCcStripe color="white" size={12} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px] tracking-wider">Stripe</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div
                    data-aos="zoom-out-up"
                    data-aos-duration="10000"
                >
                    <div
                        className="justify-center rounded-md btn-class mx-7 px-7 py-8 group">
                        <div>
                            <div className="group relative overflow-hidden rounded-md ">
                                <img
                                    className="group-hover:scale-110 transition-transform duration-1000 ease-in-out h-40 w-full"
                                    src={img4}
                                    alt="product image"
                                />
                            </div>
                            <div className="pt-7">
                                <div className='flex justify-between items-center'>
                                    <h5 className="text-base lg:text-[11px] xl:text-base -tracking-wider text-[#d43030] poppins-bold">RK TRADING -</h5>
                                    <div className="flex items-center gap-2">
                                        <a href="https://github.com/Riad123456789/project12024">
                                            <FaGithub color="white" size={30} className="btn-class cursor-pointer p-2" />
                                        </a>
                                        <a href="http://laughable-tray.surge.sh/">
                                            <FaExternalLinkAlt color="white" size={30} className="btn-class cursor-pointer p-2" />
                                        </a>
                                    </div>
                                </div>
                                <div className='pt-5'>
                                    <p className="text-[#cbc5c5] font-bold text-[10px] md:text-xs lg:text-[9px] xl:text-xs tracking-wider uppercase">Technology :</p>
                                    <div className="grid grid-cols-3 items-center gap-3 pt-4">
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <FaHtml5 color="white" size={11} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px]  tracking-wider">HTML</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <TbFileTypeCss color="white" size={12} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px]  tracking-wider">CSS</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <IoLogoJavascript color="white" size={11} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px]  tracking-wider">JavaScript</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <FaReact color="white" size={12} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px]  tracking-wider">React</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <BiLogoTailwindCss color="white" size={13} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px]  tracking-wider">Tailwind</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <BiLogoFirebase color="white" size={12} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px]  tracking-wider">Firebase</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <SiMongodb color="white" size={12} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px]  tracking-wider">MongoDb</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <SiMui color="white" size={12} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px]  tracking-wider">MaterialUI</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <FaCcStripe color="white" size={12} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px]  tracking-wider">Stripe</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="10000"
                >
                    <div
                        className="justify-center rounded-md btn-class mx-7 px-7 py-8 group">
                        <div>
                            <div className="group relative overflow-hidden rounded-md ">
                                <img
                                    className="group-hover:scale-110 transition-transform duration-1000 ease-in-out h-40 w-full"
                                    src={img1}
                                    alt="product image"
                                />
                            </div>
                            <div className="pt-7">
                                <div className='flex justify-between items-center'>
                                    <h5 className="text-base lg:text-[11px] xl:text-base -tracking-wider text-[#d43030] poppins-bold">GAMING SERVICES -</h5>
                                    <div className="flex items-center gap-2">
                                        <a href="https://github.com/programming-hero-web-course-4/b8a9-event-management-Riad123456789">
                                            <FaGithub color="white" size={30} className="btn-class cursor-pointer p-2" />
                                        </a>
                                        <a href="https://react-assignment-9-4a258.web.app/">
                                            <FaExternalLinkAlt color="white" size={30} className="btn-class cursor-pointer p-2" />
                                        </a>
                                    </div>
                                </div>

                                <div className='pt-5'>
                                    <p className="text-[#cbc5c5] font-bold text-[10px] md:text-xs lg:text-[9px] xl:text-xs tracking-wider uppercase">Technology :</p>
                                    <div className="grid grid-cols-3 items-center gap-3 pt-4">
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <FaHtml5 color="white" size={11} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px]  tracking-wider">HTML</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <TbFileTypeCss color="white" size={12} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px]  tracking-wider">CSS</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <IoLogoJavascript color="white" size={11} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px]  tracking-wider">JavaScript</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <FaReact color="white" size={12} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px]  tracking-wider">React</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <BiLogoTailwindCss color="white" size={13} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px]  tracking-wider">Tailwind</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <BiLogoFirebase color="white" size={12} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px]  tracking-wider">Firebase</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <SiMongodb color="white" size={12} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px]  tracking-wider">MongoDb</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <SiMui color="white" size={12} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px]  tracking-wider">MaterialUI</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-1 btn-class px-1 py-2 cursor-pointer">
                                            <FaCcStripe color="white" size={12} className="  " />
                                            <p className="text-[white] text-[8px] md:text-[10px] lg:text-[6px] xl:text-[10px]  tracking-wider">Stripe</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Project;