'use client'
import { useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { BsMicrosoftTeams } from "react-icons/bs";

import emailjs from "emailjs-com";

export default function Contact() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const IMAGE_BASE_PATH = process.env.NEXT_PUBLIC_CUSTOM_IMAGE_BASE_PATH || "";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.subject || !form.message) {
            alert("Please fill in all fields.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        emailjs.sendForm(
            "service_pbt0rw5",
            "template_tmnippn",
            e.target as HTMLFormElement,
            "xb4SnK8NoDXUuofIT"
        )
            .then((result) => {
                console.log("Email sent:", result.text);
                alert("Message sent successfully!");
            })
            .catch((error) => {
                console.error("Email sending error:", error);
                alert("Failed to send message. Please try again.");
            });

        setForm({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <>
            <div id='contact-section' className='flex flex-col lg:flex-row sm:flex-col bg-indigo-00 items-start mt-10 sm:mt-15 sm:scroll-mt-12 h-auto sm:h-full lg:w-full lg:h-[435px] lg:mt-15 rounded-t-lg sm:rounded-b-lg lg:rounded-l-lg'>
                <div className='bg-yellow-00 h-[18%] sm:h-[28%] lg:w-[50%] lg:h-full rounded-t-lg sm:rounded-t-lg lg:rounded-l-lg'>
                    <img src={`${IMAGE_BASE_PATH}/Landing.jpg`} className="rounded-t-lg sm:rounded-t-lg lg:rounded-l-lg" alt="Landing" />
                    <h3 className="relative z-50 bottom-20 left-4 sm:bottom-30 text-white lg:bottom-20 font-bold sm:text-4xl lg:text-3xl">Vamshi Vadla</h3>
                </div>
                <div className='lg:w-[50%] h-[82%] sm:h-[72%] lg:h-full bg-pink-00 w-full sm:w-full sm:h-full bg-[#1C2148] p-3 sm:px-2 sm:pt-6 lg:p-5 lg:rounded-r-lg flex justify-center'>
                    <div className='bg-green-00 w-full sm:w-[70%] lg:w-[80%]'>
                        <h4 className='text-[#6899E0] text-lg font-semibold'>Have a project in mind?</h4>
                        <div className='flex items-end justify-between'>
                            <h2 className='text-4xl text-white mt-2 font-semibold lg:mt-2'>Let&apos;s Connect..</h2>
                            <a href="https://wa.me/918523035382" target='_blank'><div className='flex rounded-full items-center justify-center h-8 w-8 sm:h-9 sm:w-9 lg:h-9 lg:w-9 group hover:bg-red-400 bg-[#F7FBFD] transition-transform hover:-translate-y-1 shadow-lg'>
                                <FaWhatsapp className='text-[#5E77B1] group-hover:text-white' size={20} />
                            </div></a>
                        </div>
                        <form onSubmit={sendEmail} className='lg:mt-3 flex flex-col lg:w-[100%]'>
                            <div className='lg:w-full flex mt-3 sm:mt-4 lg:mt-0 justify-between lg:h-[50px]'>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Your Name'
                                    value={form.name}
                                    onChange={handleChange}
                                    className='shadow-lg p-2 text-white rounded-lg w-[45%] sm:w-[40%] lg:w-[45%] bg-[#232959]'
                                />
                                <input
                                    type="text"
                                    name='email'
                                    placeholder='Your Email'
                                    value={form.email}
                                    onChange={handleChange}
                                    className='shadow-lg p-2 text-white rounded-lg w-[45%] sm:w-[40%] lg:w-[45%] bg-[#232959]'
                                />
                            </div>
                            <input
                                type="text"
                                name='subject'
                                placeholder='Subject'
                                value={form.subject}
                                onChange={handleChange}
                                className='shadow-lg p-2 text-white rounded-lg bg-[#232959] mt-3 sm:mt-4 lg:mt-5 lg:h-[50px]'
                            />
                            <textarea
                                rows={5}
                                name='message'
                                placeholder='Message'
                                value={form.message}
                                onChange={handleChange}
                                className='shadow-lg p-2 text-white rounded-lg bg-[#232959] mt-3 sm:mt-5 lg:mt-5 lg:h-[100px] overflow-y-hidden'
                            />
                            <div className='bg-yellow-00 flex items-end justify-between'>
                                <button type='submit' className='text-white text-xs sm:text-medium lg:text-lg font-medium sm:font-medium lg:font-medium bg-[#5E7CB2] lg:w-[100px] mt-3 lg:mt-5 sm:mt-6 rounded-full h-[30px] w-[65px] lg:h-[40px] sm:h-[30px] sm:w-[70px] hover:-translate-y-1 transition-transform hover:bg-red-400 duration-200 cursor-pointer'>
                                    Submit
                                </button>
                                <div className='bg-green-00 flex gap-2 sm:gap-2 lg:gap-3'>
                                    <a href="https://www.facebook.com/vamshi.chary.92351" target='_blank'><div className='flex rounded-full items-center justify-center h-8 w-8 sm:h-9 sm:w-9 lg:h-9 lg:w-9 group hover:bg-red-400 bg-[#F7FBFD] transition-transform hover:-translate-y-1 shadow-lg'>
                                        <FaFacebook className='text-[#5E77B1] group-hover:text-white' size={20} />
                                    </div></a>
                                    <a href="https://www.instagram.com/v.1.m.s.8.9/" target='_blank'><div className='flex rounded-full items-center justify-center h-8 w-8 sm:h-9 sm:w-9 lg:h-9 lg:w-9 group hover:bg-red-400 bg-[#F7FBFD] transition-transform hover:-translate-y-1 shadow-lg'>
                                        <FaInstagram className='text-[#5E77B1] group-hover:text-white' size={20} />
                                    </div></a>
                                    <a href="https://teams.microsoft.com/l/chat/0/0?users=vamshichary117@gmail.com" target='_blank'><div className='flex rounded-full items-center justify-center h-8 w-8 sm:h-9 sm:w-9 lg:h-9 lg:w-9 group hover:bg-red-400 bg-[#F7FBFD] transition-transform hover:-translate-y-1 shadow-lg'>
                                        <BsMicrosoftTeams className='text-[#5E77B1] group-hover:text-white' size={20} />
                                    </div></a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}