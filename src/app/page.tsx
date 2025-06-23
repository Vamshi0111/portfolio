"use client";
import { Jost } from 'next/font/google';
import { FaLinkedinIn, FaWhatsapp, FaCaretRight, FaReact, FaFigma, FaAws, FaArrowUp, FaSkype, FaInstagram, FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { SiPostgresql, SiMui, SiMongodb } from "react-icons/si";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import emailjs from "emailjs-com";
import LandscapeImg from '../../public/Landing.jpg';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LiaCopyrightSolid } from 'react-icons/lia';

const skillCards = [
  { icon: <FaReact className='text-9xl' />, name: 'React' },
  { icon: <DiNodejs className='text-9xl' />, name: 'Node.js' },
  { icon: <RiTailwindCssFill className='text-9xl' />, name: 'Tailwind CSS' },
  { icon: <SiPostgresql className='text-9xl' />, name: 'PostgreSQL' },
  { icon: <SiMui className='text-9xl' />, name: 'MUI' },
  { icon: <FaGithub className='text-9xl' />, name: 'GitHub' },
  { icon: <RiJavascriptFill className='text-9xl' />, name: 'JavaScript' },
  { icon: <FaFigma className='text-9xl' />, name: 'Figma' },
  { icon: <FaAws className='text-9xl' />, name: 'AWS' },
  { icon: <SiMongodb className='text-9xl' />, name: 'MongoDB' },
];

export const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
});

function Page() {

  const [showButton, setShowButton] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["I'm a Developer", "I'm a Designer", "I'm a Freelancer"];
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [animateUnderline, setAnimateUnderline] = useState(false);


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
    const img = new (window as any).Image();
    img.src = LandscapeImg.src;
    img.onload = () => setImageLoaded(true);
  }, []);

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
  }, [subIndex, forward, textIndex]);

  const displayText = texts[textIndex].substring(0, subIndex);
  const currentWord = texts[textIndex].split(" ")[3];

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

    const templateParams = {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    };

    emailjs.sendForm(
      "service_pbt0rw5",      // This is Actual EmailJS Service ID
      "template_tmnippn",     // This is Actual EmailJS Template ID
      e.target as HTMLFormElement,
      "xb4SnK8NoDXUuofIT"       // This is Actual EmailJS Public Key
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

  useEffect(() => {
    const imageLoadTimer = setTimeout(() => {
      setImageLoaded(true);
    }, 100);

    const underlineTimer = setTimeout(() => {
      setAnimateUnderline(true);
    }, 300);

    return () => {
      clearTimeout(imageLoadTimer);
      clearTimeout(underlineTimer);
    };
  }, []);


  return (
    <div style={{ backgroundColor: '#0E1123' }} className={`flex h-auto w-full flex-col ${jost.className}`}>

      {showButton && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center lg:h-[40px] lg:w-[40px] rounded-full bg-red-400 hover:bg-[#5E7CB2] text-white shadow-lg transition-transform duration-300 hover:-translate-y-1"
        >
          <FaArrowUp />
        </div>
      )}

      {/* // navbar */}
      <nav className="flex w-full lg:h-15 items-center justify-center lg:gap-40 sticky top-0 z-50 shadow-lg bg-[#0E1123]">
        <div className="flex items-end h-full w-20 justify-center">
          <img src='/Vv.png' alt="Logo" className="flex lg:h-15 lg:w-auto cursor-pointer" onClick={scrollToTop}/>
        </div>
        <div className="flex lg:h-full items-center justify-between lg:w-[50%]">
          <p className={`${jost.className} text-white lg:text-lg lg:font-medium hover:text-red-400 transition-colors duration-200 cursor-pointer`} onClick={scrollToTop}>Home</p>
          <Link href='#about-section'><p className={`${jost.className} text-white lg:text-lg lg:font-medium hover:text-red-400 transition-colors duration-200`}>About me</p></Link>
          <Link href='#projects-section'><p className={`${jost.className} text-white lg:text-lg lg:font-medium hover:text-red-400 transition-colors duration-200`}>Projects</p></Link>
          <Link href='#skills-section'><p className={`${jost.className} text-white lg:text-lg lg:font-medium hover:text-red-400 transition-colors duration-200`}>Skills</p></Link>
          <Link href='#experience-section'><p className={`${jost.className} text-white lg:text-lg lg:font-medium hover:text-red-400 transition-colors duration-200`}>Experience</p></Link>
          <Link href='#education-section'><p className={`${jost.className} text-white lg:text-lg lg:font-medium hover:text-red-400 transition-colors duration-200`}>Education</p></Link>
        </div>
        <div className='lg:w-20 rounded-full lg:h-10 flex justify-center items-center bg-[#5E7CB2] transition-transform hover:-translate-y-1 hover:bg-red-400'>
          <Link href='#contact-section'><p className={`${jost.className} text-white lg:text-md lg:font-medium`}>Contact</p></Link>
        </div>
      </nav>

      {/* // body */}
      <div className='flex flex-col w-full lg:overflow-x-hidden'>
        {/* Landing */}
        <div className='lg:w-full bg-red-00 flex'>
          <div className='w-[60%] bg-yellow-00'>
            {/* Icons started Linkedin, Github, Whatsapp */}
            <div className='flex lg:w-[17%] flex justify-between lg:ml-22 lg:mt-30'>
              <a href="https://www.linkedin.com/in/vamshi-vadla/" target='_blank'><div className='flex rounded-full w-9 h-9 items-center justify-center group transition-colors duration-200 hover:bg-red-400 bg-[#F7FBFD] transition-transform hover:-translate-y-1' >
                <FaLinkedinIn className='text-[#5E77B1] group-hover:text-white' size={20} />
              </div></a>
              <a href="https://github.com/Vamshi0111" target='_blank'><div className='flex rounded-full items-center justify-center lg:h-9 lg:w-9 group hover:bg-red-400 transition-colors duration-200 bg-[#F7FBFD] transition-transform hover:-translate-y-1'>
                <FaGithub className='text-[#5E77B1] group-hover:text-white' size={20} />
              </div></a>
              <a href="https://wa.me/918523035382" target='_blank'><div className='flex rounded-full items-center justify-center lg:h-9 lg:w-9 group hover:bg-red-400 bg-[#F7FBFD] transition-transform hover:-translate-y-1'>
                <FaWhatsapp className='text-[#5E77B1] group-hover:text-white' size={20} />
              </div></a>
            </div>
            {/* Icons ended Li, git */}
            <div className='lg:ml-22 lg:mt-5 w-[85%]'>
              <p className={`${jost.className} lg:font-bold lg:text-white lg:text-5xl`}>Software Developer</p>
              <p className={`${jost.className} lg:font-semibold lg:mt-3 lg:text-3xl text-[#6899E0]`}>& UI/UX Designer</p>
              <p className={`${jost.className} lg:w-[100%] lg:mt-5 text-lg`}>I'm a Full-Stack Developer skilled in JavaScript, TypeScript, React, React Native, Node.js, Express, and MongoDB/PostgreSQL. I build responsive web apps with efficient APIs and robust database management.</p>
            </div>
            <div className={` lg:text-[150px] font-semibold lg:ml-22 flex gap-10 ${jost.className}`}>
              <p>Vamshi</p>
              <p className='text-[#DFAFAF] bg-clip-text relative bg-gradient-to-r from-[#EF7979] to-white text-transparent'>Vadla</p>
            </div>
          </div>
          {/* Image started*/}
          <div className='bg-[#0E1123] rounded-xl ring-2 ring-transparent  lg:w-[40%] flex items-start justify-center'>
            <img src="IMG_1.png" className='lg:mt-30' />
          </div>
          {/* Image ended */}
        </div>
        {/* Landing ends */}
        <div className='bg-red-00 flex lg:w-full'>
          <div id='about-section' className={`${jost.className} flex flex-col lg:w-[30%] bg-yellow-00 lg:ml-22 lg:scroll-mt-[80px]`}>
            <h4 className='lg:font-semibold lg:text-2xl text-[#6899E0]'>More</h4>
            <h2 className='text-white lg:font-semibold lg:text-4xl lg:mt-3'>About me</h2>
          </div>
          <div className='bg-green-00 w-full text-lg lg:mr-19'>
            <p className={`${jost.className}`}>As a Full-Stack Developer, I specialize in JavaScript, TypeScript, React, Nextjs, React-Native, Node.js, Express.js, and MongoDB/PostgreSQL. I design and develop responsive web applications, ensuring efficient API integrations and database management to deliver high-performance solutions.</p>
          </div>
        </div>
        <div className='lg:w-full flex justify-center'>
          <div id='projects-section' className={`bg-green-00 flex flex-col lg:w-full ${jost.className} lg:pl-22 lg:mt-10`}>
            <div className='bg-yellow-00 lg:w-full lg:mt-25'>
              <h4 className='lg:font-semibold lg:text-2xl text-[#6899E0]'>My Last</h4>
              <h2 className='text-white lg:font-semibold lg:text-4xl lg:mt-3'>Projects</h2>
            </div>
            {/* Gen card */}
            <div className='flex items-center lg:w-[93%] gap-10 lg:mt-10 bg-yellow-00 lg:mr-44 lg:h-[200px] rounded-[20px] lg:p-3 lg:pl-5 bg-[#16193A] border border-[#5E77B1] transition-transform hover:-translate-y-2 duration-200'>
              <div className='lg:w-[25%] bg-yellow-00 flex items-center justify-center'>
                <img src="Gen.png" className='rounded-[20px] lg:h-[200px]' />
              </div>
              <div className={`${jost.className} bg-green-00 lg:h-[80%] lg:w-[65%]`}>
                <div className='flex items-center justify-between'>
                  <h1 className='font-bold text-2xl text-[#6899E0]'>Genamplify Solutions Hub Pvt Ltd.</h1>
                  <a href="https://genamplifysol.com/"
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    <div className='lg:w-[85px] lg:h-[35px] border rounded-full flex items-center justify-between lg:pl-3 lg:pr-3 hover:bg-red-400 hover:-translate-y-1 transition-transform duration-200'>
                      <p>Visit</p>
                      <FaCaretRight />
                    </div>
                  </a>
                </div>
                <p className='lg:mt-3'>We are a passionate team of tech experts focused on turning your ideas into reality.
                  From websites and powerful apps to strategic digital marketing, we deliver impactful solutions.
                  We value strong partnerships and collaborate closely to understand your goals.
                  Let us help you succeed in today’s fast-changing IT landscape with tailored, high-quality results.
                </p>
              </div>
            </div>
            {/* Gen card */}
            {/* Devrootz card */}
            <div className='flex items-center lg:w-[93%] gap-10 lg:mt-10 bg-yellow-00 lg:mr-44 lg:h-[200px] rounded-[20px] lg:p-3 lg:pl-5 bg-[#16193A] border border-[#5E77B1] transition-transform hover:-translate-y-2 duration-200'>
              <div className='lg:w-[25%] bg-yellow-00 flex items-center justify-center'>
                <img src="DevRootz.png" />
              </div>
              <div className={`${jost.className} bg-green-00 lg:h-[80%] lg:w-[65%]`}>
                <div className='flex items-center justify-between'>
                  <h1 className='font-bold text-2xl text-[#6899E0]'>DevRootz Hub.</h1>
                  <a href="https://devrootz.com/"
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    <div className='lg:w-[85px] lg:h-[35px] border rounded-full flex items-center justify-between lg:pl-3 lg:pr-3 hover:bg-red-400 hover:-translate-y-1 transition-transform duration-200'>
                      <p>Visit</p>
                      <FaCaretRight />
                    </div>
                  </a>
                </div>
                <p className='lg:mt-3'>Devrootz Hub equips you with cutting-edge tech skills and bridges the gap between learning and employment. Our expert-led training programs focus on the most in-demand technologies, ensuring you're job-ready. With hands-on learning and personalized placement support, we empower you to succeed in the competitive tech industry and land your dream role confidently.
                </p>
              </div>
            </div>
            {/* Devrootz card */}
            {/* S4 Tech card */}
            <div className='flex items-center lg:w-[93%] gap-10 lg:mt-10 bg-yellow-00 lg:mr-44 lg:h-[200px] rounded-[20px] lg:p-3 lg:pl-5 bg-[#16193A] border border-[#5E77B1] transition-transform hover:-translate-y-2 duration-200'>
              <div className='lg:w-[25%] bg-yellow-00 flex items-center justify-center'>
                <img src="S4.png" className='rounded-[20px] lg:h-[140px]' />
              </div>
              <div className={`${jost.className} bg-green-00 lg:h-[80%] lg:w-[65%]`}>
                <div className='flex items-center justify-between'>
                  <h1 className='font-bold text-2xl text-[#6899E0]'>S4 Tech.</h1>
                  <a href="https://s4tech.io/"
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    <div className='lg:w-[85px] lg:h-[35px] border rounded-full flex items-center justify-between lg:pl-3 lg:pr-3 hover:bg-red-400 hover:-translate-y-1 transition-transform duration-200'>
                      <p>Visit</p>
                      <FaCaretRight />
                    </div>
                  </a>
                </div>
                <p className='lg:mt-3'>We are a team of dedicated IT consultants committed to helping businesses grow in the digital era.
                  Our expertise spans modern web development, scalable software solutions, and technology-driven strategies.
                  By aligning technology with business goals, we empower organizations to innovate, streamline operations, and stay ahead in an ever-evolving digital landscape.
                </p>
              </div>
            </div>
            {/* S4 Tech card */}
            {/* Messenger card */}
            <div className='flex items-center lg:w-[93%] gap-10 lg:mt-10 bg-yellow-00 lg:mr-44 lg:h-[200px] rounded-[20px] lg:p-3 lg:pl-5 bg-[#16193A] border border-[#5E77B1] transition-transform hover:-translate-y-2 duration-200'>
              <div className='lg:w-[25%] bg-yellow-00'>
                <img src="Messenger.png" className='rounded-[20px]' />
              </div>
              <div className={`${jost.className} bg-green-00 lg:h-[80%] lg:w-[65%]`}>
                <h1 className='font-bold text-2xl text-[#6899E0]'>MessengerApp.</h1>
                <p className='lg:mt-3'>MessengerApp is a real-time cross-platform messaging application developed using React for web and React Native for mobile.
                  Key features include instant messaging, media sharing, and secure user authentication.
                  I served as the Team Leader, managing coordination, ensuring smooth progress, and guiding development.
                  I also contributed hands-on by building major UI screens for both platforms.</p>
              </div>
            </div>
            {/* Messenger card */}
            {/* ShipEase card */}
            <div className='flex items-center lg:w-[93%] gap-10 lg:mt-10 bg-yellow-00 lg:mr-44 lg:h-[200px] rounded-[20px] lg:p-3 lg:pl-5 bg-[#16193A] border border-[#5E77B1] transition-transform hover:-translate-y-2 duration-200'>
              <div className='lg:w-[25%] bg-yellow-00'>
                <img src="ShipEase.png" className='rounded-[20px]' />
              </div>
              <div className={`${jost.className} bg-green-00 lg:h-[80%] lg:w-[65%]`}>
                <h1 className='font-bold text-2xl text-[#6899E0]'>ShipEase.</h1>
                <p className='lg:mt-3'>ShipEase is a transport logistics app built with React (web) and React Native (mobile).
                  It features vehicle selection, booking, real-time tracking, and fare estimation.
                  As Team Leader, I coordinated development, managed workflow, and ensured timely delivery.
                  I also contributed directly by developing major user interfaces for both web and mobile platforms.
                </p>
              </div>
            </div>
            {/* ShipEase card */}
            <div id='skills-section' className='bg-yellow-00 lg:w-[93%] overflow-y-hidden'>
              <div className={`flex flex-col lg:w-[30%] bg-yellow-00 lg:w-full lg:mt-20`}>
                <h4 className='lg:font-semibold lg:text-2xl text-[#6899E0]'>My coding</h4>
                <h3 className='text-white lg:font-semibold lg:text-4xl lg:mt-3'>Skills</h3>
              </div>
              <div className='bg-yellow-00 lg:mt-10'>
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
                        <div className="bg-gradient-to-r from-[#1E234F] to-[#171A3B] border border-[#5E77B1] rounded-2xl p-6 text-white flex flex-col items-center justify-center hover:-translate-y-2 transition-transform duration-300">
                          {card.icon}
                          <p className="mt-4 text-lg">{card.name}</p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div id='experience-section' className='flex flex-col lg:mt-20 lg:scroll-mt-[80px]'>
                <h4 className='lg:font-semibold lg:text-2xl text-[#6899E0]'>My Job</h4>
                <h3 className='text-white lg:font-semibold lg:text-4xl lg:mt-3'>Experience</h3>
              </div>
              {/* Experience Cards starts */}
              <div className='lg:h-[200px] bg-red-00 lg:mt-5 flex'>
                <div className='relative bg-yellow-00 lg:w-[25%] border-r-2 border-[#7F95CF] flex items-center justify-center'>
                  <h3 className='font-bold lg:text-xl'>Dec 2023 - Jan 2025 <br /><p className='mt-3 text-end'>Fulltime</p></h3>
                  <div className='rounded-full border-2 border-[#7F95CF] h-7 w-7 absolute flex justify-center items-center -mr-[15.5px] right-0 top-center font-bold text-lg shadow-lg'>
                    <div className='rounded-full bg-white h-4 w-4' />
                  </div>
                </div>
                <div className='bg-blue-00 lg:w-[75%] flex flex-col lg:pt-6 lg:p-4 lg:pl-8'>
                  <h3 className='font-bold text-xl'>Software Developer</h3>
                  <p className='text-md lg:mt-4'>As a Full-Stack Developer, I build responsive, scalable web applications using JavaScript, TypeScript, React, React Native, Node.js, Express, and MongoDB/PostgreSQL. I focus on seamless API integration, efficient database structuring, and intuitive UI design. My goal is to deliver optimized, high-performing digital solutions that align with user needs and evolving tech industry standards.</p>
                </div>
              </div>
              <div className='lg:h-[200px] bg-red-00 flex'>
                <div className='relative bg-yellow-00 lg:w-[25%] border-r-2 border-[#7F95CF] flex items-center justify-center'>
                  <h3 className='font-bold lg:text-xl'>Jan 2025 - Apr 2025 <br /><p className='mt-3 text-end'>Intern</p></h3>
                  <div className='rounded-full border-2 border-[#7F95CF] h-7 w-7 absolute flex justify-center items-center -mr-[15.5px] right-0 top-center font-bold text-lg shadow-lg'>
                    <div className='rounded-full bg-white h-4 w-4' />
                  </div>
                </div>
                <div className='bg-blue-00 lg:w-[75%] flex flex-col lg:pt-6 lg:p-4 lg:pl-8'>
                  <h3 className='font-bold text-xl'>Web Developer</h3>
                  <p className='text-md lg:mt-4'>As a Full-Stack Web Developer, I develop dynamic full-stack applications with technologies like JavaScript, TypeScript, React, React Native, Node.js, Express, and MongoDB/PostgreSQL. My focus lies in creating clean APIs, structured data flow, and user-friendly interfaces. I aim to craft robust, modern solutions that meet real-world demands and adapt to the pace of technological growth.</p>
                </div>
              </div>
              {/* Experience Cards ends */}
              <div id='education-section' className='flex flex-col lg:mt-20 lg:scroll-mt-[80px]'>
                <h4 className='lg:font-semibold lg:text-2xl text-[#6899E0]'>Education</h4>
                <h3 className='text-white lg:font-semibold lg:text-4xl lg:mt-3'>Summary</h3>
              </div>
              {/* Education Cards starts */}
              <div className='lg:h-[200px] bg-red-00 lg:mt-5 flex'>
                <div className='relative bg-yellow-00 lg:w-[25%] border-r-2 border-[#7F95CF] flex items-center justify-center'>
                  <h3 className='font-bold lg:text-xl'>Oct 2020 - Nov 2023</h3>
                  <div className='rounded-full border-2 border-[#7F95CF] h-7 w-7 absolute flex justify-center items-center -mr-[15.5px] right-0 top-center font-bold text-lg shadow-lg'>
                    <div className='rounded-full bg-white h-4 w-4' />
                  </div>
                </div>
                <div className='bg-blue-00 lg:w-[75%] flex flex-col lg:p-4 lg:pt-6 lg:pl-8'>
                  <h3 className='font-bold text-xl'>MallaReddy Institute of Technology & Science</h3>
                  <p className='text-md lg:mt-4'>Explored core computer science subjects like data structures, algorithms, operating systems, and database management systems, gaining foundational knowledge in efficient system design. Actively enhancing technical skills through self-learning, delving into advanced topics and mastering new tools. My personal projects demonstrate the practical application of theoretical concepts, showcasing a commitment to continuous improvement and problem-solving through code.</p>
                </div>
              </div>
              <div className='lg:h-[200px] bg-red-00 flex'>
                <div className='relative bg-yellow-00 lg:w-[25%] border-r-2 border-[#7F95CF] flex items-center justify-center'>
                  <h3 className='font-bold lg:text-xl'>Jun 2017 - Jun 2020</h3>
                  <div className='rounded-full border-2 border-[#7F95CF] h-7 w-7 absolute flex justify-center items-center -mr-[15.5px] right-0 top-center font-bold text-lg shadow-lg'>
                    <div className='rounded-full bg-white h-4 w-4' />
                  </div>
                </div>
                <div className='bg-blue-00 lg:w-[75%] flex flex-col lg:pt-7 lg:p-4 lg:pl-8'>
                  <h3 className='font-bold text-xl'>Ratnapuri Institute of Technology College of Polytechnic</h3>
                  <p className='text-md lg:mt-4'>Gained a strong foundation in core electrical engineering areas: circuits, electronic devices, power, and control systems. This theoretical knowledge was reinforced by practical, hands-on lab work and technical projects. I honed critical analytical and troubleshooting skills, preparing me to diagnose and solve complex engineering challenges effectively in real-world scenarios.</p>
                </div>
              </div>
              {/* Education Cards ends */}
              {/* Contact card */}
              <div id='contact-section' className='flex items-start lg:w-full bg-pink-00 lg:h-[435px] lg:mt-15 lg:rounded-lg'>
                <div className='bg-red-00 lg:w-[50%] lg:h-full rounded-l-lg'>
                  <motion.div className="relative h-full w-full overflow-hidden flex items-center justify-start rounded-l-lg"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}>
                    <div className="absolute inset-0 z-0 flex flex-col">
                      <Image
                        src={LandscapeImg}
                        alt="Background"
                        fill
                        className={`object-cover transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                          }`}
                        priority
                        onLoadingComplete={() => setImageLoaded(true)}
                      />
                      <p className='absolute font-bold text-white lg:bottom-40 lg:ml-4 text-3xl'>Vamshi Vadla</p>
                    </div>
                    <div className={`relative z-10 text-white text-center lg:ml-4 lg:mt-40 font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-2xl scrolling-underline ${animateUnderline ? 'animate-underline' : ''}`}
                      style={{ fontFamily: 'var(--font-jost)' }}
                    >
                      {displayText}
                    </div>
                  </motion.div>
                </div>
                <div className='lg:w-[50%] lg:h-full bg-[#1C2148] p-5 rounded-r-lg flex justify-center'>
                  <div className='bg-red-00 w-[80%]'>
                    <h4 className='text-[#6899E0] text-lg font-semibold'>Have a project in mind?</h4>
                    <div className='flex items-end justify-between'>
                      <h2 className='text-4xl font-semibold lg:mt-2'>Let's Connect..</h2>
                      <a href="https://wa.me/918523035382" target='_blank'><div className='flex rounded-full items-center justify-center lg:h-9 lg:w-9 group hover:bg-red-400 bg-[#F7FBFD] transition-transform hover:-translate-y-1'>
                        <FaWhatsapp className='text-[#5E77B1] group-hover:text-white' size={20} />
                      </div></a>
                    </div>
                    <form onSubmit={sendEmail} className='lg:mt-3 flex flex-col lg:w-[100%] bg-red-00'>
                      <div className='lg:w-full flex justify-between lg:h-[50px]'>
                        <input
                          type="text"
                          name='name'
                          placeholder='Your Name'
                          value={form.name}
                          onChange={handleChange}
                          className='shadow-lg p-2 rounded-lg lg:w-[45%] bg-[#232959]'
                        />
                        <input
                          type="text"
                          name='email'
                          placeholder='Your Email'
                          value={form.email}
                          onChange={handleChange}
                          className='shadow-lg p-2 rounded-lg lg:w-[45%] bg-[#232959]'
                        />
                      </div>
                      <input
                        type="text"
                        name='subject'
                        placeholder='Subject'
                        value={form.subject}
                        onChange={handleChange}
                        className='shadow-lg p-2 rounded-lg bg-[#232959] mt-5 lg:h-[50px]'
                      />
                      <textarea
                        rows={5}
                        name='message'
                        placeholder='Message'
                        value={form.message}
                        onChange={handleChange}
                        className='shadow-lg p-2 rounded-lg bg-[#232959] mt-5 lg:h-[100px] overflow-y-hidden'
                      />
                      <div className='bg-yellow-00 flex items-end justify-between'>
                        <button type='submit' className='bg-[#6899E0] lg:w-[100px] lg:mt-5 rounded-full lg:h-[40px] hover:-translate-y-1 transition-transform hover:bg-red-400 duration-200'>
                          Submit
                        </button>
                        <div className='bg-green-00 flex lg:gap-3'>
                          <a href="https://www.facebook.com/vamshi.chary.92351" target='_blank'><div className='flex rounded-full items-center justify-center lg:h-9 lg:w-9 group hover:bg-red-400 bg-[#F7FBFD] transition-transform hover:-translate-y-1'>
                            <FaFacebook className='text-[#5E77B1] group-hover:text-white' size={20} />
                          </div></a>
                          <a href="https://www.instagram.com/v.1.m.s.8.9/" target='_blank'><div className='flex rounded-full items-center justify-center lg:h-9 lg:w-9 group hover:bg-red-400 bg-[#F7FBFD] transition-transform hover:-translate-y-1'>
                            <FaInstagram className='text-[#5E77B1] group-hover:text-white' size={20} />
                          </div></a>
                          <a href="https://join.skype.com/invite/qfGtIZ170RZL" target='_blank'><div className='flex rounded-full items-center justify-center lg:h-9 lg:w-9 group hover:bg-red-400 bg-[#F7FBFD] transition-transform hover:-translate-y-1'>
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
      <div className='lg:h-[60px] bg-[#1C2148] lg:mt-15 flex items-center justify-center'>
        <div className='rounded-full lg:h-16 lg:w-16 bg-gradient-to-r from-[#6A97E3] to-white flex items-center justify-center relative z-50 lg:bottom-7.5 lg:-left-97'>
          <img src="Vv.png" alt="" className='lg:w-[50px]' />
        </div>
        <LiaCopyrightSolid />
        <p className='lg:ml-1'>2025 Vamshi. All Rights Reserved.</p>
      </div>
      {/* Footer */}
    </div>
  )
}

export default Page;