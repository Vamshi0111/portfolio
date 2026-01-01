"use client";
import { FaLinkedinIn, FaWhatsapp, FaArrowUp } from "react-icons/fa6";
import { FaCaretUp, FaGithub } from "react-icons/fa";
import { useEffect, useState, useMemo } from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import StaticProjects from "@/components/staticCards";
import ProjectCards from "@/components/projectCard";

export default function Page() {

  const [showButton, setShowButton] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

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

  const IMAGE_BASE_PATH = process.env.NEXT_PUBLIC_CUSTOM_IMAGE_BASE_PATH || '';

  const experienceCard = [
    {
      from: "Aug 2025",
      to: "Present",
      employmentType: "Fulltime",
      role: "Full-Stack Developer",
      company: "GK Elite Info.",
      description: "I am responsible for designing, developing, and maintaining full-stack applications using JavaScript technologies, ensuring responsive user interfaces, robust backend services, and seamless integration for delivering efficient, scalable, and high- performing web solutions."
    },
    {
      from: "Jan 2025",
      to: "Apr 2025",
      employmentType: "Intern",
      role: "Web Developer",
      company: "Simple Like This.",
      description: "As a Full-Stack Web Developer, I develop dynamic full-stack applications with technologies like JavaScript, TypeScript, React, React Native, Node.js, Express, and MongoDB/PostgreSQL. My focus lies in creating clean APIs, structured data flow, and user-friendly interfaces. I aim to craft robust, modern solutions that meet real-world demands and adapt to the pace of technological growth."
    },
    {
      from: "Dec 2023",
      to: "Jan 2025",
      employmentType: "Fulltime",
      role: "Software Developer",
      company: "Genamplify Solutions Hub Pvt Ltd.",
      description: "As a Full-Stack Developer, I build responsive, scalable web applications using JavaScript, TypeScript, React, React Native, Node.js, Express, and MongoDB/PostgreSQL. I focus on seamless API integration, efficient database structuring, and intuitive UI design. My goal is to deliver optimized, high-performing digital solutions that align with user needs and evolving tech industry standards."
    }
  ]

  const educationCard = [
    {
      from: "Oct 2020",
      to: "Nov 2023",
      college: "MallaReddy Institute of Technology & Science.",
      location: "Hyderabad.",
      description: "Explored core computer science subjects like data structures, algorithms, operating systems, and database management systems, gaining foundational knowledge in efficient system design. Actively enhancing technical skills through self-learning, delving into advanced topics and mastering new tools. My personal projects demonstrate the practical application of theoretical concepts, showcasing a commitment to continuous improvement and problem-solving through code."
    },
    {
      from: "Jun 2017",
      to: "Jun 2020",
      college: "Ratnapuri Institute of Technology College of Polytechnic.",
      location: "Sangareddy.",
      description: "Gained a strong foundation in core electrical engineering areas: circuits, electronic devices, power, and control systems. This theoretical knowledge was reinforced by practical, hands-on lab work and technical projects. I honed critical analytical and troubleshooting skills, preparing me to diagnose and solve complex engineering challenges effectively in real-world scenarios."
    }
  ]

  const staticProjProps = [
    {
      img: "Messenger.png",
      title: "MessengerApp.",
      description: "MessengerApp is a real-time cross-platform messaging application developed using React for web and React Native for mobile. Key features include instant messaging, media sharing, and secure user authentication. I served as the Team Leader, managing coordination, ensuring smooth progress, and guiding development. I also contributed hands- on by building major UI screens for both platforms."
    },
    {
      img: "ShipEase.png",
      title: "ShipEase.",
      description: "ShipEase is a transport logistics app built with React (web) and React Native (mobile). It features vehicle selection, booking, real- time tracking, and fare estimation. As Team Leader, I coordinated development, managed workflow, and ensured timely delivery. I also contributed directly by developing major user interfaces for both web and mobile platforms."
    }
  ]

  const projectProps = [
    {
      img: "S4.png",
      title: "S4 Tech.",
      imgHeight: "[150px]",
      link: "https://s4tech.io/",
      description: "We are a team of dedicated IT consultants committed to helping businesses grow in the digital era. Our expertise spans modern web development, scalable software solutions, and technology-driven strategies. By aligning technology with business goals, we empower organizations to innovate, streamline operations, and stay ahead in an ever-evolving digital landscape."
    },
    {
      img: "cloud.png",
      title: "WeatherApp.",
      imgHeight: "[150px]",
      link: "https://vamshi0111.github.io/weatherapp/",
      description: "This weather application is built using Next.js and Tailwind CSS to provide real-time weather updates based on the user&apos;s current location. It uses geolocation to fetch coordinates and displays temperature, humidity and more through a clean, responsive UI. The app showcases strong API integration, modern frontend development, and a seamless user experience across devices."
    },
    {
      img: "DevRootz.png",
      title: "DevRootz Hub.",
      imgHeight: "auto",
      link: "https://devrootz.com/",
      description: "Devrootz Hub equips you with cutting-edge tech skills and bridges the gap between learning and employment. Our expert-led training programs focus on the most in-demand technologies, ensuring you&apos;re job-ready. With hands-on learning and personalized placement support, we empower you to succeed in the competitive tech industry and land your dream role confidently."
    },
  ]

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

      <Header />

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
              <p className="text-white">Vamshi</p>
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

            <ProjectCards
              props={projectProps}
            />

            <div className="bg-red-00 lg:w-[93%] lg:mt-2 flex justify-end items-center lg:gap-1 gap-1 mt-2 sm:gap-1 sm:mt-3" onClick={() => setShow(!show)}>
              <button className={`bg-green-00 lg:w-20 lg:text-lg font-regular cursor-pointer transition-all duration-200 ease-in-out`}>
                {show ? 'ShowLess' : 'ShowMore'}
              </button>
              {show ? <FaCaretUp className="transform duration-500 rotate-0" /> : <FaCaretUp className="transform duration-500 rotate-180" />}
            </div>

            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${show ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
              <StaticProjects
                props={staticProjProps}
              />
            </div>
            <div className='bg-yellow-00 lg:w-[93%] overflow-hidden'>
              <Skills />
              <Experience
                props={experienceCard}
              />
              <Education
                props={educationCard}
              />
              <Contact />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}