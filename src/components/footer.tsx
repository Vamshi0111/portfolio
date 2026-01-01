'use client'
import { LiaCopyrightSolid } from "react-icons/lia";

export default function Footer() {

    const IMAGE_BASE_PATH = process.env.NEXT_PUBLIC_CUSTOM_IMAGE_BASE_PATH || "";

    return (
        <>
            <footer>
                <div className='sm:h-[40px] lg:h-[60px] bg-[#1C2148] mt-8 sm:mt-15 lg:mt-15 flex items-center justify-center'>
                    <div className='rounded-full h-8 w-8 sm:h-15 sm:w-15 lg:h-16 lg:w-16 bg-gradient-to-r from-[#6A97E3] to-white flex items-center justify-center relative z-50 bottom-4 -left-15 sm:bottom-5 sm:-left-54 lg:bottom-7.5 lg:-left-97'>
                        <img src={`${IMAGE_BASE_PATH}/Vv.png`} alt="Vv" className='w-[20px] sm:w-[40px] lg:w-[50px]' />
                    </div>
                    <LiaCopyrightSolid className="text-white" />
                    <p className='ml-1 text-white sm:ml-1 lg:ml-1 text-xs sm:text-sm lg:text-sm'>{new Date().getFullYear()} Vamshi. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}