import Link from "next/link";


export default function Header() {

    const IMAGE_BASE_PATH = process.env.NEXT_PUBLIC_CUSTOM_IMAGE_BASE_PATH || "";

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
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
        </>
    )
}