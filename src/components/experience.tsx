
type ExperienceProps = {
    from: string;
    to: string;
    employmentType: string;
    role: string;
    company: string;
    description: string
}

type ExperienceCardProps = {
    props: ExperienceProps[];
}

export default function Experience({ props }: ExperienceCardProps) {
    return (
        <>
            <div id='experience-section' className='flex flex-col mt-10 sm:mt-10 sm:scroll-mt-12 lg:mt-20 lg:scroll-mt-[80px] mb-5'>
                <h4 className='lg:font-semibold font-semibold lg:text-2xl text-[#6899E0]'>My Job</h4>
                <h3 className='text-white lg:font-semibold font-semibold lg:text-4xl lg:mt-3'>Experience</h3>
            </div>
            {props.map((item, index) => (
                <div className='lg:h-[200px] h-[150px] bg-red-00 flex' key={index}>
                    <div className='relative bg-yellow-00 w-[25%] px-3 lg:w-[25%] border-r-2 border-[#7F95CF] flex items-center justify-center'>
                        <h3 className='font-bold text-white lg:text-xl'>{item.from} - {item.to} <br /> <p className="mt-3 text-end">{item.employmentType}</p></h3>
                        <div className='rounded-full border-2 border-[#7F95CF] h-5 w-5 sm:h-7 sm:w-7 lg:h-7 lg:w-7 absolute flex justify-center items-center -mr-[11px] sm:-mr-[15px] lg:-mr-[15px] right-0 top-center font-bold text-lg shadow-lg'>
                            <div className='rounded-full bg-white h-3 w-3 sm:h-4 sm:w-4 lg:w-4 lg:h-4' />
                        </div>
                    </div>
                    <div className='bg-blue-00 lg:w-[75%] w-[75%] pt-1 px-3 sm:px-5 flex flex-col lg:p-4 lg:pt-6 lg:pl-8 overflow-y-auto lg:overflow-hidden'>
                        <div className="flex items-center justify-between"><h3 className='font-bold text-xl text-[#6899E0]'>{item.role}</h3> <p className="text-red-400 text-xs lg:text-sm">- {item.company}</p></div>
                        <p className='text-md mt-2 text-white lg:mt-4'>{item.description}</p>
                    </div>
                </div>
            ))}
        </>
    )
}