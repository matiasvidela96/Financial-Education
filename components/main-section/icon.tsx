import * as logo from "@phosphor-icons/react";
import type { IconWeight } from "@phosphor-icons/react"

interface IconProps {
    name: keyof typeof logo;
    size: number
    color: string
    weight: IconWeight,
    title: string,
    description: string,   
}

export default function Icon({
    name,
    size,
    color,
    weight,
    title,
    description
  }: IconProps) {
    const IconComponent = logo[name] as React.ElementType;
  return (
    <>           
     <div className="w-16 h-16 mb-2 bg-purple-600 rounded-lg flex items-center justify-center">     
     <IconComponent size={size} color={color} weight={weight} />
     </div>              
      <h4 className="h4 mb-2">{title}</h4>
      <p className="text-lg text-gray-400 text-center">{description}</p>   
    </>
  )
}