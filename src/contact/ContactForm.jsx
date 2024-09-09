import { useState } from 'react';
import img from '../../src/assets/Employment-Contract.webp';
import { AiFillFacebook } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const ContactForm = () => {
    const [focusField, setFocusField] = useState('');

    const getOutlineStyle = (field) => {
        if (focusField === field) {
            switch (field) {
                case 'name':
                    return '2px solid red';
                case 'phone':
                    return '2px solid red';
                case 'email':
                    return '2px solid red';
                case 'subject':
                    return '2px solid red';
                case 'message':
                    return '2px solid red';
                default:
                    return 'none';
            }
        }
        return 'none';
    };

    const style = (field) => ({
        boxShadow: 'inset 0px 5px 7px 0px rgba(0, 0, 0, 0.9)',
        borderRadius: '6px',
        height: '50px',
        fontSize: '22px',
        padding: '0 20px',
        backgroundColor: '#191b1e',
        color: '#fff',
        outline: getOutlineStyle(field),
    });

    return (
        <div className="bg-[#212428] max-w-7xl m-auto pb-20 ">

            <div className="space-y-5">
                <p className="pr-5 text-center montserrat-uniquifier text-[#eb3535] text-xs tracking-wide uppercase">
                    Contact
                </p>
                <p className="text-center text-5xl text-[#eae6e6] poppins-bold tracking-wider">Contact With Me</p>
            </div>

            <div className='grid grid-cols-7 gap-14 items-center mt-24'>
                <div className="col-span-3 justify-center rounded-md btn-class mx-5 px-11 py-12 group">
                    <div>
                        <div className="group relative overflow-hidden rounded-lg">
                            <img
                                className="group-hover:scale-110 transition-transform duration-500 ease-in-out rounded-lg"
                                src={img}
                                alt="product image"
                            />
                        </div>
                        <div className="pt-8">
                            <div className='space-y-2'>
                                <h5 className="text-2xl -tracking-wider text-slate-100 poppins-bold">Riad Jowarder</h5>
                                <h5 className="text-lg tracking-tight text-slate-400">Front-End Developer</h5>
                            </div>
                            <p className='text-gray-500 py-4'>I am available for freelance work. Connect with me via and call in to my account</p>
                            <div className='py-3 space-y-2'>
                                <div className='flex items-center gap-2'>
                                    <FiPhoneCall size={20} color='red'></FiPhoneCall>
                                    <p className='text-gray-500'><span className='text-white font-bold'>Phone : </span> +8801756660368</p>
                                </div>
                                <div className='flex items-center gap-2 '>
                                    <MdOutlineMarkEmailUnread size={23} color='red'></MdOutlineMarkEmailUnread>
                                    <p className='text-gray-500'><span className='text-white font-bold'>Email : </span> riad80717@gmail.com</p>
                                </div>
                            </div>
                            <div className='pt-2'>
                                <p className="text-[#cbc5c5] font-bold text-sm">FIND WITH ME</p>
                                <div className="flex gap-4 pt-4">
                                    <AiFillFacebook color="white" size={40} className="btn-class cursor-pointer p-3" />
                                    <IoLogoYoutube color="white" size={40} className="btn-class cursor-pointer p-3" />
                                    <FaLinkedin color="white" size={40} className="btn-class cursor-pointer p-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-span-4 rounded-md btn-class px-10 py-16'>
                    <form className="">
                        <div className='flex items-center justify-between'>
                            <div>
                                <label className='text-[#c8c3c3] text-sm uppercase'>Your Name</label>
                                <div className="py-3">
                                    <input
                                        required
                                        onFocus={() => setFocusField('name')}
                                        onBlur={() => setFocusField('')}
                                        style={style('name')}
                                        className="border-[#18191b] border-[3px] px-5 py-3"
                                        name="contact-name"
                                        id="contact-name"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className='text-[#c8c3c3] text-sm uppercase'>Phone Number</label>
                                <div className="py-3">
                                    <input
                                        required
                                        onFocus={() => setFocusField('phone')}
                                        onBlur={() => setFocusField('')}
                                        style={style('phone')}
                                        className="border-[#18191b] border-[3px] px-5 py-3"
                                        name="contact-phone"
                                        id="contact-phone"
                                        type="text"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center justify-between pt-4'>
                            <div>
                                <label className='text-[#c8c3c3] text-sm uppercase'>Email</label>
                                <div className="py-3">
                                    <input
                                        required
                                        onFocus={() => setFocusField('email')}
                                        onBlur={() => setFocusField('')}
                                        style={style('email')}
                                        className="border-[#18191b] border-[3px] px-5 py-3"
                                        name="contact-email"
                                        id="contact-email"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className='text-[#c8c3c3] text-sm uppercase'>Subject</label>
                                <div className="py-3">
                                    <input
                                        required
                                        onFocus={() => setFocusField('subject')}
                                        onBlur={() => setFocusField('')}
                                        style={style('subject')}
                                        className="border-[#18191b] border-[3px] px-5 py-3"
                                        name="contact-subject"
                                        id="contact-subject"
                                        type="text"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='pt-5'>
                            <label className="block mb-3 text-sm font-medium text-gray-900">
                                <span className='text-[#c8c3c3] uppercase'>Your Message</span>
                            </label>
                            <textarea
                                required
                                onFocus={() => setFocusField('message')}
                                onBlur={() => setFocusField('')}
                                style={{ ...style('message'), height: '215px' }}
                                id="message"
                                rows="4"
                                className="block p-2.5 w-full pb-20 text-sm text-white bg-slate-900"
                            />
                        </div>

                        <button
                            type="submit"
                            className="rounded-md btn-class text-white mt-10 font-medium text-sm w-full px-5 py-4 text-center"
                        >
                            <div className='flex justify-center items-center gap-2'>
                                <span className="text-red-700">SEND MESSAGE</span>
                                <FaArrowRight className='text-red-700' />
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
