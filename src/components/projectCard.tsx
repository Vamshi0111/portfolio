'use client'
import { FaCaretRight } from "react-icons/fa6";

type Props = {
    img: string;
    title: string;
    link: string;
    description: string;
    imgHeight: string;
}

type ProjectCardProps = {
    props: Props[]
}

export default function ProjectCards({ props }: ProjectCardProps) {

    const IMAGE_BASE_PATH = process.env.NEXT_PUBLIC_CUSTOM_IMAGE_BASE_PATH || "";

    return (
        <>
            {props.map((item, index) => (
                <div className='flex flex-col items-start overflow-y-auto lg:overflow-hidden sm:flex p-3 sm:px-4 lg:flex lg:flex-row lg:items-center w-[100%] h-[300px] lg:w-[93%] lg:gap-10 mt-5 sm:mt-5 lg:mt-10 bg-rose-00 lg:mr-44 lg:h-[200px] rounded-[20px] sm:rounded-[20px] lg:rounded-[20px] pt-3 lg:p-3 lg:pl-5 bg-[#16193A] border border-[#5E77B1] transition-transform hover:-translate-y-2 duration-200' key={index}>
                    <div className='lg:w-[25%] w-full bg-yellow-00 flex justify-start lg:items-center lg:justify-center'>
                        <img src={`${IMAGE_BASE_PATH}/${item.img}`} alt="S4 tech" className={`h-[50px] sm:h-[80px] lg:h-${item.imgHeight}`} />
                    </div>
                    <div className={`bg-green-00 lg:h-[80%] lg:w-[65%]`}>
                        <div className='flex mt-2 sm:mt-5 lg:mt-0 items-center justify-between'>
                            <h1 className='font-bold text-2xl text-[#6899E0]'>{item.title}</h1>
                            <a href={item.link}
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <div className='w-[55px] h-[27px] text-white sm:w-[65px] sm:h-[33px] pl-1 lg:mt-0 sm:mt-0 lg:w-[85px] lg:h-[35px] border rounded-full flex items-center justify-around sm:pl-2 sm:pr-1 lg:pl-3 lg:pr-3 hover:bg-red-400 hover:-translate-y-1 transition-transform duration-200'>
                                    <p className="text-sm lg:text-lg">Visit</p>
                                    <FaCaretRight />
                                </div>
                            </a>
                        </div>
                        <p className='mt-2 text-white lg:mt-3'>{item.description}</p>
                    </div>
                </div>
            ))}

        </>
    )
}