import { ArrowRight } from "lucide-react"
import React from "react"

interface MajorCardProps {
    icon?: React.ElementType,
    name: string,
    desc: string
}

export default function MajorCard({icon: Icon, name, desc}: MajorCardProps) {
    return (
        <div className="relative bg-[#F6F6F6] text rounded-xl p-5 flex lg:flex-col items-start gap-5 lg:gap-0">
            <div className="absolute -left-1 top-4 w-1 h-18 bg-brand-primary rounded-l-full"></div>
            <div className="rounded-xl lg:rounded-full p-3 bg-white w-max mb-5 mt-2">
                {Icon && 
                    <Icon className="text-brand-primary" height={25} width={25}/>
                }
            </div>
            <div>
                <h2 className="text-lg font-bold">{name}</h2>
                <p className="text-xs my-3">{desc}</p>
                <a className="text-xs text-brand-primary flex items-center gap-2" href="">Lihat Selengkapnya <span><ArrowRight className="h-3"/></span></a>
            </div>
        </div>
    )
}