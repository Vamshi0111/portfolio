"use client";
import { FaLinkedinIn, FaWhatsapp, FaCaretRight, FaReact, FaFigma, FaAws, FaArrowUp, FaSkype, FaInstagram, FaFacebook } from "react-icons/fa6";
import { FaCaretUp, FaGithub } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { SiPostgresql, SiMui, SiMongodb } from "react-icons/si";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState, useMemo } from 'react';
import emailjs from "emailjs-com";
import Link from 'next/link';
import { LiaCopyrightSolid } from 'react-icons/lia';
import { TbBrandNextjs } from "react-icons/tb";

const skillCards = [
  { icon: <FaReact className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'React.js' },
  { icon: <TbBrandNextjs className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'Next.js' },
  { icon: <DiNodejs className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'Node.js' },
  { icon: <RiTailwindCssFill className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'Tailwind CSS' },
  { icon: <SiPostgresql className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'PostgreSQL' },
  { icon: <SiMui className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'MUI' },
  { icon: <FaGithub className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'GitHub' },
  { icon: <RiJavascriptFill className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'JavaScript' },
  { icon: <FaFigma className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'Figma' },
  { icon: <FaAws className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'AWS' },
  { icon: <SiMongodb className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'MongoDB' },
];

function Page() {

  const [showButton, setShowButton] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [show, setShow] = useState(false);

  const texts = useMemo(() => {
    return ["I'm a Developer", "I'm a Designer", "I'm a Freelancer"];
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (subIndex === texts[textIndex].length + 1 && forward) {
      setForward(false);
      return;
    }

    if (subIndex === 0 && !forward) {
      setForward(true);
      setTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
    }, forward ? 120 : 50);

    return () => clearTimeout(timeout);
  }, [subIndex, forward, textIndex, texts]);

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

  const IMAGE_BASE_PATH = process.env.NEXT_PUBLIC_CUSTOM_IMAGE_BASE_PATH || '';

  return (
    <div style={{ backgroundColor: '#0E1123' }} className={`flex h-auto w-full flex-col `}>

      {showButton && (
        <div
          onClick={scrollToTop}
          className="fixed z-50 h-10 w-10 bottom-6 right-6 sm:h-[60px] sm:w-[60px] sm:bottom-6 sm:right-6 lg:bottom-6 lg:right-6 lg:z-50 flex items-center justify-center lg:h-[40px] lg:w-[40px] rounded-full bg-red-400 hover:bg-[#5E7CB2] text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
        >
          <FaArrowUp className="sm:h-20 lg:h-auto" />
        </div>
      )}

      {/* // navbar */}
      <nav className="flex w-full h-12 lg:h-15 gap-8 items-center justify-center lg:items-center lg:justify-center lg:gap-40 sm:gap-10 sticky lg:sticky top-0 z-50 shadow-lg bg-[#0E1123]">
        <div className="flex items-center bg-yellow-00 h-8 w-8 sm:h-11 sm:w-11 lg:h-full lg:w-20 justify-center">
          <img src={`${IMAGE_BASE_PATH}/Vv.png`} alt="Logo" className="flex h-xs sm:h-sm lg:h-15 lg:w-auto cursor-pointer" onClick={scrollToTop} />
        </div>
        <div className="flex items-center font-medium gap-4 sm:gap-8 lg:h-full lg:items-center lg:justify-between lg:w-[50%] overflow-hidden">
          <p className={`text-white text-xs sm:text-sm lg:text-lg hover:text-red-400 transition-colors duration-200 cursor-pointer`} onClick={scrollToTop}>Home</p>
          <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}#about-section`}><p className={`text-xs sm:text-sm text-white lg:text-lg hover:text-red-400 transition-colors duration-200`}>About me</p></Link>
          <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}#projects-section`}><p className={`text-xs sm:text-sm text-white lg:text-lg hover:text-red-400 transition-colors duration-200`}>Projects</p></Link>
          <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}#skills-section`}><p className={`text-xs sm:text-sm text-white lg:text-lg hover:text-red-400 transition-colors duration-200`}>Skills</p></Link>
          <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}#experience-section`} className="hidden sm:flex lg:flex"><p className={`text-xs sm:text-sm text-white lg:text-lg hover:text-red-400 transition-colors duration-200`}>Experience</p></Link>
          <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}#education-section`} className="hidden sm:flex lg:flex"><p className={`text-xs sm:text-sm text-white lg:text-lg hover:text-red-400 transition-colors duration-200`}>Education</p></Link>
        </div>
        <div className='h-7 w-13 rounded-full lg:h-10 lg:w-20 sm:h-10 sm:w-20 flex justify-center items-center bg-[#5E7CB2] transition-transform hover:-translate-y-1 hover:bg-red-400'>
          <Link href='#contact-section'><p className={`text-xs text-white font-medium sm:font-medium lg:font-medium sm:text-lg lg:text-lg`}>Contact</p></Link>
        </div>
      </nav>

      {/* // body */}
      <div className='flex flex-col w-full bg-green-00 overflow-hidden p-3 sm:px-5 lg:p-0 lg:overflow-x-hidden'>
        {/* Landing */}
        <div className='lg:w-full bg-red-00 flex'>
          <div className='w-full h-full sm:w-[60%] lg:w-[60%] bg-yellow-00'>
            {/* Icons started Linkedin, Github, Whatsapp */}
            <div className='bg-green-00 w-[48%] h-[13%] sm:w-[36%] lg:w-[17%] mt-6 sm:mt-10 flex items-center justify-between lg:ml-22 lg:mt-30'>
              <a href="https://www.linkedin.com/in/vamshi-vadla/" target='_blank'><div className='flex rounded-full h-7 w-7 sm:h-9 sm:w-9 lg:w-9 lg:h-9 items-center justify-center group transition-colors duration-200 hover:bg-red-400 bg-[#F7FBFD] transition-transform hover:-translate-y-1' >
                <FaLinkedinIn className='text-[#5E77B1] group-hover:text-white h-4 sm:h-20 lg:h-20' size={20} />
              </div></a>
              <a href="https://github.com/Vamshi0111" target='_blank'><div className='flex rounded-full items-center justify-center h-7 w-7 sm:h-9 sm:w-9 lg:h-9 lg:w-9 group hover:bg-red-400 transition-colors duration-200 bg-[#F7FBFD] transition-transform hover:-translate-y-1'>
                <FaGithub className='text-[#5E77B1] group-hover:text-white h-4 sm:h-20 lg:h-20' size={20} />
              </div></a>
              <a href="https://wa.me/918523035382" target='_blank'><div className='flex rounded-full items-center justify-center h-7 w-7 sm:h-9 sm:w-9 lg:h-9 lg:w-9 group hover:bg-red-400 bg-[#F7FBFD] transition-transform hover:-translate-y-1'>
                <FaWhatsapp className='text-[#5E77B1] group-hover:text-white h-4 sm:h-20 lg:h-20' size={20} />
              </div></a>
            </div>
            {/* Icons ended Li, git */}
            <div className='lg:ml-22 lg:mt-5 bg-yellow-00 lg:w-[85%]'>
              <p className={`font-semibold sm:font-semibold sm:text-2xl mt-3 lg:mt-0 sm:mt-3 lg:font-bold lg:text-white lg:text-5xl`}>Software Developer</p>
              <p className={`font-semibold sm:font-semibold sm:text-lg lg:font-semibold lg:mt-3 lg:text-3xl text-[#6899E0]`}>& UI/UX Designer</p>
              <p className={`text-xs text-white sm:text-lg lg:w-[100%] mt-2 sm:mt-3 lg:mt-5 text-lg`}>I&apos;m a Full-Stack Developer skilled in JavaScript, TypeScript, React, React Native, Node.js, and MongoDB/PostgreSQL. I build responsive web apps with efficient APIs and robust database management.</p>
            </div>
            <div className={`hidden lg:flex sm:flex flex sm:text-[65px] text-white bg-green-00 absolute z-10 lg:text-[150px] font-semibold lg:ml-22 sm:gap-4 lg:gap-10 `}>
              <p>Vamshi</p>
              <p className='text-[#DFAFAF] bg-clip-text relative bg-gradient-to-r from-[#EF7979] to-white text-transparent'>Vadla</p>
            </div>
          </div>
          {/* Image started*/}
          <div className='flex bg-red-00 lg:flex sm:flex bg-[#0E1123] rounded-xl ring-2 relative z-0 right-0 top-10 sm:static sm:right-0 sm:top-0 ring-transparent w-[70%] h-[10%] sm:h-auto sm:w-[60%] lg:w-[40%] lg:h-auto flex items-start justify-center'>
            <img src={`${IMAGE_BASE_PATH}/IMG_2.png`} alt="img_1" className='h-full w-full sm:h-[400px] sm:w-[430px] lg:h-[550px] lg:w-[500px] lg:mt-30' />
          </div>
          {/* Image ended */}
        </div>
        {/* Landing ends */}
        <div className='bg-red-00 flex-col mt-4 sm:mt-4 lg:mt-0 flex lg:flex-row lg:w-full'>
          <div id='about-section' className={`font-semibold flex flex-col lg:w-[30%] bg-yellow-00 lg:ml-22 scroll-mt-[45px] sm:scroll-mt-[48px] lg:scroll-mt-[80px]`}>
            <h4 className='lg:font-semibold lg:text-2xl text-[#6899E0]'>More</h4>
            <h2 className='text-white sm:text-lg lg:font-semibold lg:text-4xl lg:mt-3'>About me</h2>
          </div>
          <div className='bg-green-00 w-full text-lg lg:mr-19'>
            <p className={`text-xs text-white sm:text-sm lg:text-lg`}>As a Full-Stack Developer, I specialize in JavaScript, TypeScript, React, Nextjs, React-Native, Node.js, Express.js, and MongoDB/PostgreSQL. I design and develop responsive web applications, ensuring efficient API integrations and database management to deliver high-performance solutions.</p>
          </div>
        </div>
        <div className='lg:w-full bg-green-00 flex justify-center lg:mt-0 sm:mt-5'>
          <div className={`bg-violet-00 flex flex-col sm:mt-5 mt-4 lg:w-full lg:pl-22 lg:mt-10 overflow-hidden`}>
            <div id='projects-section' className='bg-pink-00 w-full lg:w-[93%] lg:mt-25 mt-0 sm:scroll-mt-11 lg:scroll-mt-20'>
              <h4 className='lg:font-semibold lg:text-2xl font-bold text-sm text-[#6899E0]'>My Last</h4>
              <h2 className='text-white sm:text-lg font-bold lg:font-semibold lg:text-4xl lg:mt-3'>Projects</h2>
            </div>
            {/* Gen card */}
            <div className='flex flex-col items-start overflow-y-auto lg:overflow-hidden sm:flex p-3 sm:px-4 sm:px-2 lg:flex lg:flex-row lg:items-center w-[100%] h-[300px] lg:w-[93%] lg:gap-10 mt-5 sm:mt-5 lg:mt-10 bg-rose-00 lg:mr-44 lg:h-[200px] rounded-[20px] sm:rounded-[20px] lg:rounded-[20px] lg:p-3 lg:pl-5 bg-[#16193A] border border-[#5E77B1] transition-transform hover:-translate-y-2 duration-200'>
              <div className='lg:w-[25%] w-full bg-yellow-00 flex justify-start lg:items-center lg:justify-center'>
                <img src={`${IMAGE_BASE_PATH}/Gen.png`} alt="gen" className='rounded-[20px] h-[100px] lg:h-[200px]' />
              </div>
              <div className={`bg-green-00 lg:h-[80%] lg:w-[65%]`}>
                <div className='flex items-center justify-between'>
                  <h1 className='font-bold text-2xl text-[#6899E0]'>Genamplify Solutions Hub Pvt Ltd.</h1>
                  <a href="https://genamplifysol.com/"
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    <div className='w-[55px] h-[27px] text-white sm:w-[65px] sm:h-[33px] pl-1 lg:mt-0 sm:mt-0 lg:w-[85px] lg:h-[35px] border rounded-full flex items-center justify-around sm:pl-2 sm:pr-1 lg:pl-3 lg:pr-3 hover:bg-red-400 hover:-translate-y-1 transition-transform duration-200'>
                      <p className="text-sm lg:text-lg">Visit</p>
                      <FaCaretRight />
                    </div>
                  </a>
                </div>
                <p className='mt-2 text-white lg:mt-3'>We are a passionate team of tech experts focused on turning your ideas into reality.
                  From websites and powerful apps to strategic digital marketing, we deliver impactful solutions.
                  We value strong partnerships and collaborate closely to understand your goals.
                  Let us help you succeed in today’s fast-changing IT landscape with tailored, high-quality results.
                </p>
              </div>
            </div>
            {/* Gen card */}
            {/* Devrootz card */}
            <div className='flex flex-col items-start overflow-y-auto lg:overflow-hidden sm:flex p-3 sm:px-4 lg:flex lg:flex-row lg:items-center w-[100%] h-[300px] lg:w-[93%] lg:gap-10 mt-5 sm:mt-5 lg:mt-10 bg-rose-00 lg:mr-44 lg:h-[200px] rounded-[20px] sm:rounded-[20px] lg:rounded-[20px] pt-3 lg:p-3 lg:pl-5 bg-[#16193A] border border-[#5E77B1] transition-transform hover:-translate-y-2 duration-200'>
              <div className='lg:w-[25%] w-full bg-yellow-00 flex justify-start lg:items-center lg:justify-center'>
                <img src={`${IMAGE_BASE_PATH}/DevRootz.png`} alt="devrootz" className='h-[50px] lg:h-auto' />
              </div>
              <div className={`bg-green-00 lg:h-[80%] lg:w-[65%]`}>
                <div className='flex mt-2 sm:mt-5 lg:mt-0 items-center justify-between'>
                  <h1 className='font-bold text-2xl text-[#6899E0]'>DevRootz Hub.</h1>
                  <a href="https://devrootz.com/"
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    <div className='w-[55px] h-[27px] text-white sm:w-[65px] sm:h-[33px] pl-1 lg:mt-0 sm:mt-0 lg:w-[85px] lg:h-[35px] border rounded-full flex items-center justify-around sm:pl-2 sm:pr-1 lg:pl-3 lg:pr-3 hover:bg-red-400 hover:-translate-y-1 transition-transform duration-200'>
                      <p className="text-sm lg:text-lg">Visit</p>
                      <FaCaretRight />
                    </div>
                  </a>
                </div>
                <p className='mt-2 text-white lg:mt-3'>Devrootz Hub equips you with cutting-edge tech skills and bridges the gap between learning and employment. Our expert-led training programs focus on the most in-demand technologies, ensuring you&apos;re job-ready. With hands-on learning and personalized placement support, we empower you to succeed in the competitive tech industry and land your dream role confidently.
                </p>
              </div>
            </div>
            {/* Devrootz card */}
            {/* S4 Tech card */}
            <div className='flex flex-col items-start overflow-y-auto lg:overflow-hidden sm:flex p-3 sm:px-4 lg:flex lg:flex-row lg:items-center w-[100%] h-[300px] lg:w-[93%] lg:gap-10 mt-5 sm:mt-5 lg:mt-10 bg-rose-00 lg:mr-44 lg:h-[200px] rounded-[20px] sm:rounded-[20px] lg:rounded-[20px] pt-3 lg:p-3 lg:pl-5 bg-[#16193A] border border-[#5E77B1] transition-transform hover:-translate-y-2 duration-200'>
              <div className='lg:w-[25%] w-full bg-yellow-00 flex justify-start lg:items-center lg:justify-center'>
                <img src={`${IMAGE_BASE_PATH}/S4.png`} alt="S4 tech" className='h-[50px] sm:h-[80px] lg:h-[150px]' />
              </div>
              <div className={`bg-green-00 lg:h-[80%] lg:w-[65%]`}>
                <div className='flex mt-2 sm:mt-5 lg:mt-0 items-center justify-between'>
                  <h1 className='font-bold text-2xl text-[#6899E0]'>S4 Tech.</h1>
                  <a href="https://s4tech.io/"
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    <div className='w-[55px] h-[27px] text-white sm:w-[65px] sm:h-[33px] pl-1 lg:mt-0 sm:mt-0 lg:w-[85px] lg:h-[35px] border rounded-full flex items-center justify-around sm:pl-2 sm:pr-1 lg:pl-3 lg:pr-3 hover:bg-red-400 hover:-translate-y-1 transition-transform duration-200'>
                      <p className="text-sm lg:text-lg">Visit</p>
                      <FaCaretRight />
                    </div>
                  </a>
                </div>
                <p className='mt-2 text-white lg:mt-3'>We are a team of dedicated IT consultants committed to helping businesses grow in the digital era.
                  Our expertise spans modern web development, scalable software solutions, and technology-driven strategies.
                  By aligning technology with business goals, we empower organizations to innovate, streamline operations, and stay ahead in an ever-evolving digital landscape.
                </p>
              </div>
            </div>
            <div className="bg-red-00 lg:w-[93%] lg:mt-2 flex justify-end items-center lg:gap-1 gap-1 mt-2 sm:gap-1 sm:mt-3" onClick={() => setShow(!show)}>
              <button className={`bg-green-00 lg:w-20 lg:text-lg font-regular cursor-pointer transition-all duration-200 ease-in-out`}>
                {show ? 'ShowLess' : 'ShowMore'}
              </button>
              {show ? <FaCaretUp className="transform duration-500 rotate-0" /> : <FaCaretUp className="transform duration-500 rotate-180" />}
            </div>
            {/* S4 Tech card */}
            {/* weatherapp */}
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${show ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
              <div className='flex flex-col items-start overflow-y-auto lg:overflow-hidden sm:flex p-3 sm:px-4 lg:flex lg:flex-row lg:items-center w-[100%] h-[300px] lg:w-[93%] lg:gap-10 mt-3 sm:mt-5 lg:mt-10 bg-rose-00 lg:mr-44 lg:h-[200px] rounded-[20px] sm:rounded-[20px] lg:rounded-[20px] pt-3 lg:p-3 lg:pl-5 bg-[#16193A] border border-[#5E77B1] transition-transform hover:-translate-y-2 duration-200'>
                <div className='lg:w-[25%] w-full bg-yellow-00 flex justify-start lg:items-center lg:justify-center'>
                  <img src={`${IMAGE_BASE_PATH}/cloud.png`} alt="cloudimage" className='h-[50px] sm:h-[80px] lg:h-[150px]' />
                </div>
                <div className={`bg-green-00 lg:h-[80%] lg:w-[65%]`}>
                  <div className='flex mt-2 sm:mt-5 lg:mt-0 items-center justify-between'>
                    <h1 className='font-bold text-2xl text-[#6899E0]'>WeatherApp.</h1>
                    <a href="https://vamshi0111.github.io/weatherapp/"
                      target='_blank'
                      rel="noopener noreferrer"
                    >
                      <div className='w-[55px] h-[27px] text-white sm:w-[65px] sm:h-[33px] pl-1 lg:mt-0 sm:mt-0 lg:w-[85px] lg:h-[35px] border rounded-full flex items-center justify-around sm:pl-2 sm:pr-1 lg:pl-3 lg:pr-3 hover:bg-red-400 hover:-translate-y-1 transition-transform duration-200'>
                        <p className="text-sm lg:text-lg">Visit</p>
                        <FaCaretRight />
                      </div>
                    </a>
                  </div>
                  <p className='mt-2 text-white lg:mt-3'>This weather application is built using Next.js and Tailwind CSS to provide real-time weather updates based on the user&apos;s current location. It uses geolocation to fetch coordinates and displays temperature, humidity and more through a clean, responsive UI. The app showcases strong API integration, modern frontend development, and a seamless user experience across devices.
                  </p>
                </div>
              </div>
              {/* weatherapp */}
              {/* Messenger card */}
              <div className='flex flex-col items-start overflow-y-auto lg:overflow-hidden sm:flex p-3 sm:px-4 lg:flex lg:flex-row lg:items-center w-[100%] h-[300px] lg:w-[93%] lg:gap-10 mt-5 sm:mt-5 lg:mt-10 bg-rose-00 lg:mr-44 lg:h-[200px] rounded-[20px] sm:rounded-[20px] lg:rounded-[20px] pt-3 lg:p-3 lg:pl-5 bg-[#16193A] border border-[#5E77B1] transition-transform hover:-translate-y-2 duration-200'>
                <div className='lg:w-[25%] w-full bg-yellow-00 flex justify-start lg:items-center lg:justify-center'>
                  <img src={`${IMAGE_BASE_PATH}/Messenger.png`} alt="messengerapp" className='h-[50px] sm:h-[80px] lg:h-[150px] lg:rounded-[20px] rounded-[10px]' />
                </div>
                <div className={`bg-green-00 lg:h-[80%] lg:w-[65%]`}>
                  <div className='flex mt-4 sm:mt-5 lg:mt-0 items-center justify-between'>
                    <h1 className='font-bold text-2xl text-[#6899E0]'>MessengerApp.</h1>
                  </div>
                  <p className='mt-2 text-white sm:mt-3 lg:mt-3'>MessengerApp is a real-time cross-platform messaging application developed using React for web and React Native for mobile.
                    Key features include instant messaging, media sharing, and secure user authentication.
                    I served as the Team Leader, managing coordination, ensuring smooth progress, and guiding development.
                    I also contributed hands-on by building major UI screens for both platforms.
                  </p>
                </div>
              </div>
              {/* Messenger card */}
              {/* ShipEase card */}
              <div className='flex flex-col items-start overflow-y-auto lg:overflow-hidden sm:flex p-3 sm:px-4 lg:flex lg:flex-row lg:items-center w-[100%] h-[300px] lg:w-[93%] lg:gap-10 mt-5 sm:mt-5 lg:mt-10 bg-rose-00 lg:mr-44 lg:h-[200px] rounded-[20px] sm:rounded-[20px] lg:rounded-[20px] pt-3 lg:p-3 lg:pl-5 bg-[#16193A] border border-[#5E77B1] transition-transform hover:-translate-y-2 duration-200'>
                <div className='lg:w-[25%] w-full bg-yellow-00 flex justify-start lg:items-center lg:justify-center'>
                  <img src={`${IMAGE_BASE_PATH}/ShipEase.png`} alt="Shipease" className='h-[50px] sm:h-[80px] lg:h-[150px] lg:rounded-[20px] rounded-[10px]' />
                </div>
                <div className={`bg-green-00 lg:h-[80%] lg:w-[65%]`}>
                  <div className='flex mt-4 sm:mt-5 lg:mt-0 items-center justify-between'>
                    <h1 className='font-bold text-2xl text-[#6899E0]'>ShipEase.</h1>
                  </div>
                  <p className='mt-2 text-white sm:mt-3 lg:mt-3'>ShipEase is a transport logistics app built with React (web) and React Native (mobile).
                    It features vehicle selection, booking, real-time tracking, and fare estimation.
                    As Team Leader, I coordinated development, managed workflow, and ensured timely delivery.
                    I also contributed directly by developing major user interfaces for both web and mobile platforms.
                  </p>
                </div>
              </div>
            </div>
            {/* ShipEase card */}
            <div className='bg-yellow-00 lg:w-[93%] overflow-hidden'>
              <div id='skills-section' className={`flex flex-col lg:w-[30%] bg-yellow-00 mt-12 scroll-mt-12 sm:scroll-mt-15 sm:mt-12 lg:w-full lg:mt-20`}>
                <h4 className='font-semibold lg:font-semibold lg:text-2xl text-[#6899E0]'>My coding</h4>
                <h3 className='font-semibold sm:text-lg text-white lg:font-semibold lg:text-4xl lg:mt-3'>Skills</h3>
              </div>
              <div className='bg-yellow-00 mt-5 sm:mt-5 lg:mt-10'>
                <div className='bg-blue-00'>
                  <Swiper
                    modules={[Navigation]}
                    slidesPerView={4}
                    spaceBetween={20}
                    navigation
                    speed={600}
                    className='lg:!pt-2'
                  >
                    {skillCards.map((card, i) => (
                      <SwiperSlide key={i}>
                        <div className="bg-gradient-to-r from-[#1E234F] to-[#171A3B] border border-[#5E77B1] rounded-2xl text-white flex flex-col items-center justify-center hover:-translate-y-2 transition-transform duration-300 h-20 w-20 sm:h-[150px] sm:w-[160px] lg:h-[200px] lg:w-[230px] p-0 sm:p-6 lg:p-6">
                          {card.icon}
                          <p className="text-xs sm:text-lg mt-2 sm:mt-3 lg:mt-4 lg:text-xl">{card.name}</p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div id='experience-section' className='flex flex-col mt-10 sm:mt-10 sm:scroll-mt-12 lg:mt-20 lg:scroll-mt-[80px] '>
                <h4 className='lg:font-semibold font-semibold lg:text-2xl text-[#6899E0]'>My Job</h4>
                <h3 className='text-white lg:font-semibold font-semibold lg:text-4xl lg:mt-3'>Experience</h3>
              </div>
              {/* Experience Cards starts */}
              <div className='lg:h-[200px] h-[150px] bg-red-00 mt-5 sm:mt-5 lg:mt-5 flex'>
                <div className='relative bg-yellow-00 w-[25%] px-3 lg:w-[25%] border-r-2 border-[#7F95CF] flex items-center justify-center'>
                  <h3 className='font-bold text-white lg:text-xl'>Dec 2023 - Jan 2025 <br /> <p className="mt-3 text-end">Fulltime</p></h3>
                  <div className='rounded-full border-2 border-[#7F95CF] h-5 w-5 sm:h-7 sm:w-7 lg:h-7 lg:w-7 absolute flex justify-center items-center -mr-[11px] sm:-mr-[15px] lg:-mr-[15px] right-0 top-center font-bold text-lg shadow-lg'>
                    <div className='rounded-full bg-white h-3 w-3 sm:h-4 sm:w-4 lg:w-4 lg:h-4' />
                  </div>
                </div>
                <div className='bg-blue-00 lg:w-[75%] w-[75%] pt-1 px-3 sm:px-5 flex flex-col lg:p-4 lg:pt-6 lg:pl-8 overflow-y-auto lg:overflow-hidden'>
                  <div className="flex items-center justify-between"><h3 className='font-bold text-xl text-[#6899E0]'>Software Developer</h3> <p className="text-red-400 text-xs lg:text-sm">- Genamplify Solutions Hub Pvt Ltd.</p></div>
                  <p className='text-md mt-2 text-white lg:mt-4'>As a Full-Stack Developer, I build responsive, scalable web applications using JavaScript, TypeScript, React, React Native, Node.js, Express, and MongoDB/PostgreSQL. I focus on seamless API integration, efficient database structuring, and intuitive UI design. My goal is to deliver optimized, high-performing digital solutions that align with user needs and evolving tech industry standards.</p>
                </div>
              </div>
              <div className='lg:h-[200px] h-[150px] bg-red-00 flex'>
                <div className='relative bg-yellow-00 lg:w-[25%] px-3 w-[25%] border-r-2 border-[#7F95CF] flex items-center justify-center'>
                  <h3 className='font-bold text-white lg:text-xl'>Jan 2025 - Apr 2025 <br /> <p className="pt-3 text-end">Intern</p></h3>
                  <div className='rounded-full border-2 border-[#7F95CF] h-5 w-5 sm:h-7 sm:w-7 lg:h-7 lg:w-7 absolute flex justify-center items-center -mr-[11px] sm:-mr-[15px] lg:-mr-[15px] right-0 top-center font-bold text-lg shadow-lg'>
                    <div className='rounded-full bg-white h-3 w-3 sm:h-4 sm:w-4 lg:h-4 lg:w-4' />
                  </div>
                </div>
                <div className='bg-blue-00 lg:w-[75%] w-[75%] flex pt-3 sm:px-5 sm:pt-3 flex-col px-3 lg:pt-7 lg:p-4 lg:pl-8 overflow-y-auto'>
                  <div className="flex items-center justify-between"><h3 className='font-bold text-xl text-[#6899E0]'>Web Developer</h3> <p className="text-red-400 text-xs lg:text-sm">- Simple Like This.</p></div>
                  <p className='text-md mt-2 text-white lg:mt-4'>As a Full-Stack Web Developer, I develop dynamic full-stack applications with technologies like JavaScript, TypeScript, React, React Native, Node.js, Express, and MongoDB/PostgreSQL. My focus lies in creating clean APIs, structured data flow, and user-friendly interfaces. I aim to craft robust, modern solutions that meet real-world demands and adapt to the pace of technological growth.</p>
                </div>
              </div>
              <div className='lg:h-[200px] h-[150px] bg-red-00 flex'>
                <div className='relative bg-yellow-00 lg:w-[25%] px-3 w-[25%] border-r-2 border-[#7F95CF] flex items-center justify-center'>
                  <h3 className='font-bold text-white lg:text-xl'>Aug 2025 - Present <br /> <p className="pt-3 text-end">Fulltime</p></h3>
                  <div className='rounded-full border-2 border-[#7F95CF] h-5 w-5 sm:h-7 sm:w-7 lg:h-7 lg:w-7 absolute flex justify-center items-center -mr-[11px] sm:-mr-[15px] lg:-mr-[15px] right-0 top-center font-bold text-lg shadow-lg'>
                    <div className='rounded-full bg-white h-3 w-3 sm:h-4 sm:w-4 lg:h-4 lg:w-4' />
                  </div>
                </div>
                <div className='bg-blue-00 lg:w-[75%] w-[75%] flex pt-3 sm:px-5 sm:pt-3 flex-col px-3 lg:pt-7 lg:p-4 lg:pl-8 overflow-y-auto'>
                  <div className="flex items-center justify-between"><h3 className='font-bold text-xl text-[#6899E0]'>Full-Stack Developer</h3> <p className="text-red-400 text-xs lg:text-sm">- GK Elite Info.</p></div>
                  <p className='text-md mt-2 text-white lg:mt-4'>I am responsible for designing, developing, and maintaining full-stack
                    applications using JavaScript technologies, ensuring responsive user interfaces,
                    robust backend services, and seamless integration for delivering efficient,
                    scalable, and high-performing web solutions.
                  </p>
                </div>
              </div>
              {/* Experience Cards ends */}
              <div id='education-section' className='flex bg-purple-00 flex-col mt-10 sm:mt-10 sm:scroll-mt-12 lg:mt-20 lg:scroll-mt-[80px] '>
                <h4 className='lg:font-semibold font-semibold lg:text-2xl text-[#6899E0]'>Education</h4>
                <h3 className='text-white lg:font-semibold font-semibold lg:text-4xl lg:mt-3'>Summary</h3>
              </div>
              {/* Education Cards starts */}
              <div className='lg:h-[200px] h-[150px] bg-red-00 mt-5 sm:mt-5 lg:mt-5 flex'>
                <div className='relative bg-yellow-00 w-[25%] px-3 lg:w-[25%] border-r-2 border-[#7F95CF] flex items-center justify-center'>
                  <h3 className='font-bold text-white lg:text-xl'>Oct 2020 - Nov 2023</h3>
                  <div className='rounded-full border-2 border-[#7F95CF] h-5 w-5 sm:h-7 sm:w-7 lg:h-7 lg:w-7 absolute flex justify-center items-center -mr-[11px] sm:-mr-[15px] lg:-mr-[15px] right-0 top-center font-bold text-lg shadow-lg'>
                    <div className='rounded-full bg-white h-3 w-3 sm:h-4 sm:w-4 lg:w-4 lg:h-4' />
                  </div>
                </div>
                <div className='bg-blue-00 lg:w-[75%] w-[75%] pt-1 px-3 sm:px-5 flex flex-col lg:p-4 lg:pt-6 lg:pl-8 overflow-y-auto lg:overflow-hidden'>
                  <div className="flex items-center justify-between"><h3 className='font-bold text-xl text-[#6899E0]'>MallaReddy Institute of Technology & Science.</h3> <p className="text-red-400 text-xs lg:text-sm">Hyderabad.</p></div>
                  <p className='text-md mt-2 text-white lg:mt-4'>Explored core computer science subjects like data structures, algorithms, operating systems, and database management systems, gaining foundational knowledge in efficient system design. Actively enhancing technical skills through self-learning, delving into advanced topics and mastering new tools. My personal projects demonstrate the practical application of theoretical concepts, showcasing a commitment to continuous improvement and problem-solving through code.</p>
                </div>
              </div>
              <div className='lg:h-[200px] h-[150px] bg-red-00 flex'>
                <div className='relative bg-yellow-00 lg:w-[25%] px-3 w-[25%] border-r-2 border-[#7F95CF] flex items-center justify-center'>
                  <h3 className='font-bold text-white lg:text-xl'>Jun 2017 - Jun 2020</h3>
                  <div className='rounded-full border-2 border-[#7F95CF] h-5 w-5 sm:h-7 sm:w-7 lg:h-7 lg:w-7 absolute flex justify-center items-center -mr-[11px] sm:-mr-[15px] lg:-mr-[15px] right-0 top-center font-bold text-lg shadow-lg'>
                    <div className='rounded-full bg-white h-3 w-3 sm:h-4 sm:w-4 lg:h-4 lg:w-4' />
                  </div>
                </div>
                <div className='bg-blue-00 lg:w-[75%] w-[75%] flex pt-3 sm:px-5 sm:pt-3 flex-col px-3 lg:pt-7 lg:p-4 lg:pl-8 overflow-y-auto'>
                  <div className="flex items-center justify-between"><h3 className='font-bold text-xl text-[#6899E0]'>Ratnapuri Institute of Technology College of Polytechnic.</h3> <p className="text-red-400 text-xs lg:text-sm">Sangareddy.</p></div>
                  <p className='text-md mt-2 text-white lg:mt-4'>Gained a strong foundation in core electrical engineering areas: circuits, electronic devices, power, and control systems. This theoretical knowledge was reinforced by practical, hands-on lab work and technical projects. I honed critical analytical and troubleshooting skills, preparing me to diagnose and solve complex engineering challenges effectively in real-world scenarios.</p>
                </div>
              </div>
              {/* Education Cards ends */}
              {/* Contact card */}
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
                          <a href="https://join.skype.com/invite/qfGtIZ170RZL" target='_blank'><div className='flex rounded-full items-center justify-center h-8 w-8 sm:h-9 sm:w-9 lg:h-9 lg:w-9 group hover:bg-red-400 bg-[#F7FBFD] transition-transform hover:-translate-y-1 shadow-lg'>
                            <FaSkype className='text-[#5E77B1] group-hover:text-white' size={20} />
                          </div></a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* Contact card */}
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className='sm:h-[40px] lg:h-[60px] bg-[#1C2148] mt-8 sm:mt-15 lg:mt-15 flex items-center justify-center'>
        <div className='rounded-full h-8 w-8 sm:h-15 sm:w-15 lg:h-16 lg:w-16 bg-gradient-to-r from-[#6A97E3] to-white flex items-center justify-center relative z-50 bottom-4 -left-15 sm:bottom-5 sm:-left-54 lg:bottom-7.5 lg:-left-97'>
          <img src={`${IMAGE_BASE_PATH}/Vv.png`} alt="Vv" className='w-[20px] sm:w-[40px] lg:w-[50px]' />
        </div>
        <LiaCopyrightSolid className="text-white" />
        <p className='ml-1 text-white sm:ml-1 lg:ml-1 text-xs sm:text-sm lg:text-lg'>2025 Vamshi. All rights reserved.</p>
      </div>
      {/* Footer */}
    </div>
  )
}

export default Page;