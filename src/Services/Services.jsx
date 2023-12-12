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
        <div  className="bg-black ">
            <div className="bg-black pt-14">
                <p className="text-center font-extrabold text-4xl text-white">---- EXPERIENCE ----</p>
                <p className="text-center text-red-500 text-lg pt-4">
                    These are the technologies i have worked with
                </p>
            </div>
            <div className="grid grid-cols-2 max-w-7xl gap-6 md:gap-44 mx-auto pt-16 md:grid-cols-4">
                <div className="w-40 mx-auto border shadow-xl shadow-orange-500  ">
                    <Lottie animationData={html}></Lottie>
                    {/* <p className="text-yellow-400 text-center">HTML</p> */}
                </div>
                <div className="w-40 mx-auto border shadow-xl shadow-blue-500 ">
                    <Lottie animationData={css}></Lottie>
                    {/* <p className="text-blue-500 text-center">CSS</p> */}
                </div>
                <div className="w-40 mx-auto border shadow-xl shadow-yellow-400">
                    <Lottie animationData={java}></Lottie>
                </div>
                <div className="w-40 mx-auto border shadow-xl shadow-blue-500">
                    <Lottie animationData={react}></Lottie>
                </div>
                <div className="w-40 mx-auto border shadow-xl shadow-teal-400">
                    <img className="pt-5 py-16" src={img} alt="" />
                </div>
                <div className="w-40 mx-auto border shadow-xl shadow-yellow-400">
                    <Lottie animationData={firebase}></Lottie>
                </div>
                <div className="w-40 mx-auto border shadow-xl shadow-sky-600">
                    <img className="rounded-full pt-4 py-7" src={img2} alt="" />
                </div>
                <div className="w-40 mx-auto border shadow-xl shadow-green-600">
                    <img className="rounded-full pt-4 py-7" src={img1} alt="" />
                </div>

            </div>

        </div>
    );
};

export default Services;