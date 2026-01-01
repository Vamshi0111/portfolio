'use client'
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoVercel } from "react-icons/io5";
import { DiNodejs } from "react-icons/di";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { SiPostgresql, SiMui, SiMongodb } from "react-icons/si";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaAws, FaFigma, FaReact } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const skillCards = [
    { icon: <TbBrandNextjs className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'Next.js' },
    { icon: <FaReact className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'React.js' },
    { icon: <RiTailwindCssFill className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'Tailwind CSS' },
    { icon: <SiMui className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'MUI' },
    { icon: <DiNodejs className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'Node.js' },
    { icon: <SiPostgresql className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'PostgreSQL' },
    { icon: <SiMongodb className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'MongoDB' },
    { icon: <FaGithub className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'GitHub' },
    { icon: <RiJavascriptFill className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'JavaScript' },
    { icon: <BiLogoTypescript className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'Typescript' },
    { icon: <FaAws className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'AWS' },
    { icon: <IoLogoVercel className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'Vercel' },
    { icon: <FaFigma className='text-3xl sm:text-9xl lg:text-9xl' />, name: 'Figma' },
];

export default function Skills() {
    return (
        <>
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

        </>
    )
}