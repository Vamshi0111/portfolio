'use client'

import { FaGithub } from 'react-icons/fa'
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'
import { IconType } from 'react-icons'

export type SocialProps = {
    icon: 'github' | 'linkedin' | 'whatsapp'
    link: string
}

type SocialMediaProps = {
    props: SocialProps[]
}

const iconMap: Record<SocialProps['icon'], IconType> = {
    github: FaGithub,
    linkedin: FaLinkedinIn,
    whatsapp: FaWhatsapp,
}

export default function SocialMedia({ props }: SocialMediaProps) {
    return (
        <>
            {props.map((item, index) => {
                const Icon = iconMap[item.icon]

                return (
                        <div
                            key={index}
                            className='bg-green-400 w-[48%] h-[13%] sm:w-[36%] lg:w-[17%] mt-6 sm:mt-10 flex items-center justify-between lg:ml-22 lg:mt-30'
                        >
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-9 w-9 items-center justify-center rounded-full bg-[#F7FBFD] transition-all duration-200 hover:-translate-y-1 hover:bg-red-400"
                            >
                                <Icon
                                    size={20}
                                    className="text-[#5E77B1] group-hover:text-white"
                                />
                            </a>
                        </div>
                )
            })}
        </>
    )
}
