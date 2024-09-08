import html from "../../public/html.json"
import css from "../../public/css.json"
import java from "../../public/java.json"
import react from "../../public/react.json"
import firebase from "../../public/firebs.json"
import Lottie from "lottie-react";
import img from "../../src/assets/Tailwind-CSS1-900x0.png"
import img1 from "../../src/assets/erkxwhl1gd48xfhe2yld.webp"
import img2 from "../../src/assets/https___v4.material-ui.com_static_logo.webp"

const Services = () => {
    return (
        <div className="my-28">

            <div className=" space-y-5">
                <p className="text-center montserrat-uniquifier text-[#f4395e] text-xs tracking-wide uppercase">
                    These are the technologies i have worked with
                </p>
                <p className="text-center  text-5xl text-[#eae6e6] poppins-bold tracking-wider">My Experience</p>
            </div>



            <div className="my-2 px-16 py-10 btn-class max-w-7xl mx-auto mt-14 ">

                <div>
                    <p className="text-[#bab4b4] font-bold text-base uppercase pt-2">Primary Skills on :</p>
                    <div className="h-[2px] max-w-7xl my-5 m-auto bg-[#151515]"></div>

                    <div className="flex  pt-4">
                        <div className="w-24 h-24 mx-auto btn-class  ">
                            <Lottie className="pt-2 w-20 m-auto" size={10} animationData={html}></Lottie>
                        </div>
                        <div className="w-24 h-24 mx-auto btn-class ">
                            <Lottie className=" w-20 m-auto" animationData={css}></Lottie>
                        </div>
                        <div className="w-24 h-24 mx-auto  btn-class">
                            <Lottie className="pt-2 w-20 m-auto" animationData={java}></Lottie>
                        </div>
                        <div className="w-24 h-24 mx-auto  btn-class">
                            <img className="w-16 m-auto pt-7 py-16" src={img} alt="" />
                        </div>
                        <div className="w-24 h-24 mx-auto  btn-class">
                            <Lottie className="pt-2 w-20 m-auto" animationData={react}></Lottie>
                        </div>
                        <div className="w-24 h-24 mx-auto  btn-class">
                            <Lottie className="pt-4 w-20 m-auto" animationData={firebase}></Lottie>
                        </div>
                        <div className="w-24 h-24 mx-auto  btn-class">
                            <img className="w-16 m-auto rounded-full pt-4 py-7" src={img1} alt="" />
                        </div>
                        <div className="w-24 h-24 mx-auto  btn-class">
                            <img className="w-16 m-auto rounded-full pt-4 py-7" src={img2} alt="" />
                        </div>
                    </div>

                </div>

                <div className="pt-20 pb-8">
                    <p className="text-[#bab4b4] font-bold text-base uppercase ">Secondary Skills on :</p>
                    <div className="h-[2px] max-w-7xl my-5 m-auto bg-[#151515]"></div>

                    <div className="flex  pt-4">
                        <div className="w-24 h-24 mx-auto btn-class  ">
                            <Lottie className="pt-2 w-20 m-auto" size={10} animationData={html}></Lottie>
                        </div>
                        <div className="w-24 h-24 mx-auto btn-class ">
                            <Lottie className=" w-20 m-auto" animationData={css}></Lottie>
                        </div>
                        <div className="w-24 h-24 mx-auto  btn-class">
                            <Lottie className="pt-2 w-20 m-auto" animationData={java}></Lottie>
                        </div>
                        <div className="w-24 h-24 mx-auto  btn-class">
                            <img className="w-16 m-auto pt-7 py-16" src={img} alt="" />
                        </div>
                        <div className="w-24 h-24 mx-auto  btn-class">
                            <Lottie className="pt-2 w-20 m-auto" animationData={react}></Lottie>
                        </div>
                        <div className="w-24 h-24 mx-auto  btn-class">
                            <Lottie className="pt-4 w-20 m-auto" animationData={firebase}></Lottie>
                        </div>
                        <div className="w-24 h-24 mx-auto  btn-class">
                            <img className="w-16 m-auto rounded-full pt-4 py-7" src={img1} alt="" />
                        </div>
                        <div className="w-24 h-24 mx-auto  btn-class">
                            <img className="w-16 m-auto rounded-full pt-4 py-7" src={img2} alt="" />
                        </div>
                    </div>
                </div>


            </div>



        </div>
    );
};

export default Services;