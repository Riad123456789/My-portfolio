import img from '../../src/assets/Employment-Contract.webp'
import { AiFillFacebook } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
const ContactForm = () => {
    return (
        <div id='contact' className="bg-black md:pt-32 md:pb-16">
            <div>
                <p className="text-center text-red-700 text-5xl font-bold p-4" >Contact With Me</p>
            </div>
            <div className="sm:space-y-5  md:flex  justify-center   bg-black  py-10">


                <div className="  flex justify-center rounded-xl   ">
                    <div className=" w-[400px] px-3 bg-slate-950 rounded-lg shadow-2xl shadow-red-600 group ">
                        <img className="p-8  rounded-2xl group-hover:scale-110 transition " src={img} alt="product image" />
                        <div className="px-5 pb-5">
                            <h5 className="text-2xl tracking-tight text-slate-100 font-extrabold ">Riad jowarder</h5>
                            <h5 className="text-lg  tracking-tight text-slate-400 py-3">Front-End Devloper</h5>
                            <p className='text-gray-500 pb-2'>I am available for freelance work. Connect with me via and call in to my account</p>
                            <p className='text-gray-500 '><span className='text-white font-bold'>Phone : </span> +8801756660368</p>
                            <p className='text-gray-500 '><span className='text-white font-bold'>Email : </span> riad80717@gmail.com</p>

                            <div>
                                <p className='text-white pt-2'>FIND WITH ME</p>
                                <div className="flex gap-2 pt-2">
                                <AiFillFacebook color="#0535f7" size={41} className="shadow-lg shadow-blue-600 p-1 border"></AiFillFacebook>
                            <IoLogoYoutube color="red" size={38} className="shadow-lg shadow-red-500 p-1 border"></IoLogoYoutube>
                            <FaLinkedin color="blue" size={39} className="shadow-lg shadow-blue-600 p-1 border"></FaLinkedin>
                            <IoLogoGithub color="white" size={39} className="shadow-lg shadow-slate-300 p-1 border"></IoLogoGithub>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="   rounded-lg lg:ml-40 ">
                    <form className="lg:w-[650px] mx-auto bg-slate-900 p-4 rounded-lg shadow-2xl shadow-red-500">
                        <div className="grid md:grid-cols-2 md:gap-6 pt-2 pb-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_first_name" id="floating_first_name" className="block text-white py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-50 appearance-none  focus:outline-none focus:ring-0 focus:border-red-700 peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-700 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">YOUR NAME </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_first_name" id="floating_first_name" className="block text-white py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-50 appearance-none  focus:outline-none focus:ring-0 focus:border-red-700 peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-700 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">PHONE NUMBER </label>
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-5 group pb-6">
                            <input type="text" name="floating_first_name" id="floating_first_name" className="block text-white py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-50 appearance-none  focus:outline-none focus:ring-0 focus:border-red-700 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-700 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">EMAIL</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group pb-6">
                            <input type="text" name="floating_first_name" id="floating_first_name" className="block text-white py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-50 appearance-none  focus:outline-none focus:ring-0 focus:border-red-700 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-700 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">SUBJECT </label>
                        </div>
                        <div>
                            <label className="block  mb-5 text-sm font-medium text-gray-900 ">
                                <span className='text-white'>Your message</span></label>
                            <input id="message" rows="4" className="block p-2.5 w-full pb-20 text-sm  text-white bg-slate-900 rounded-lg border border-gray-300 " placeholder="Write your thoughts here..."></input>
                        </div>

                        <button type="submit" className="border btn btn-outline text-white bg-slate-900 mt-10  focus:ring-4 peer-focus:ring-red-600  font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center ">
                            <div className='flex justify-center items-center gap-2'>
                                <span className="text-red-700"> SEND MESSAGE </span>
                                <FaArrowRight className='text-red-700'></FaArrowRight>
                            </div>
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ContactForm;