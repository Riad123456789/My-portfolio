import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import img from "../../src/assets/Screenshot_13.png"
import img1 from "../../src/assets/Screenshot_14.png"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
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
        <div className="bg-black pt-20 pb-5 ">
            <div>
                <p className="text-center text-red-700 text-5xl font-bold p-4" >MY PROJECT</p>
            </div>
            <div className="grid gap-8 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 pt-12 max-w-7xl mx-auto">

                <div

                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="10000"


                    className="  flex justify-center rounded-xl   ">
                    <div className=" w-[400px] px-3 bg-slate-950 rounded-lg shadow-2xl shadow-slate-400 group ">
                        <img className="p-8  rounded-2xl group-hover:scale-110 transition " src={img} alt="product image" />
                        <div className="px-5 pb-5">
                            <h5 className="text-2xl tracking-tight text-slate-100 font-extrabold ">MATRIMONY SERVICES</h5>
                            <div>
                                <p className='text-white pt-2'>Technology :</p>
                                <div className="flex gap-2 pt-2">
                                    <TiHtml5 color="#f55142" size={40} className="shadow-lg shadow-orange-500 p-1 border"></TiHtml5>
                                    <IoLogoCss3 color="#4269f5" size={40} className="shadow-lg shadow-blue-600 p-1 border"></IoLogoCss3>
                                    <TbBrandJavascript color="#f5e642" size={40} className="shadow-lg shadow-amber-400 p-1 border"></TbBrandJavascript>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    data-aos="zoom-out-up"
                    data-aos-duration="10000"

                    className="  flex justify-center rounded-xl   ">
                    <div className=" w-[400px] px-3 bg-slate-950 rounded-lg shadow-2xl shadow-slate-400 group ">
                        <img className="p-8  rounded-2xl group-hover:scale-110 transition " src={img1} alt="product image" />
                        <div className="px-5 pb-5">
                            <h5 className="text-2xl tracking-tight text-slate-100 font-extrabold ">BRAND SHOP</h5>
                            <div>
                                <p className='text-white pt-2'>Technology</p>
                                <div className="flex gap-2 pt-2">
                                    <TiHtml5 color="#f55142" size={40} className="shadow-lg shadow-orange-500 p-1 border"></TiHtml5>
                                    <IoLogoCss3 color="#4269f5" size={40} className="shadow-lg shadow-blue-600 p-1 border"></IoLogoCss3>
                                    <TbBrandJavascript color="#f5e642" size={40} className="shadow-lg shadow-amber-400 p-1 border"></TbBrandJavascript>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div

                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="10000"

                    className="  flex justify-center rounded-xl   ">
                    <div className=" w-[400px] px-3 bg-slate-950 rounded-lg shadow-2xl shadow-slate-400 group ">
                        <img className="p-8  rounded-2xl group-hover:scale-110 transition " src={img} alt="product image" />
                        <div className="px-5 pb-5">
                            <h5 className="text-2xl tracking-tight text-slate-100 font-extrabold ">FOOD DONATION</h5>
                            <div>
                                <p className='text-white pt-2'>Technology</p>
                                <div className="flex gap-2 pt-2">
                                    <TiHtml5 color="#f55142" size={40} className="shadow-lg shadow-orange-500 p-1 border"></TiHtml5>
                                    <IoLogoCss3 color="#4269f5" size={40} className="shadow-lg shadow-blue-600 p-1 border"></IoLogoCss3>
                                    <TbBrandJavascript color="#f5e642" size={40} className="shadow-lg shadow-amber-400 p-1 border"></TbBrandJavascript>
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