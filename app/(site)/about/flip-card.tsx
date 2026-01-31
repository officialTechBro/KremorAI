'use client'

import { Card } from "@/components/ui/card";
import Image from "next/image";

interface FlipCardProps {
    id: number
    image: string,
    name: string,
    about: string
}
export default function FlipCard({id, image, name, about}: FlipCardProps) {
  return (
    <>
        {/* Card 1 */}
        <div className="group perspective w-80 h-[400px]">
          <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
            {/* Front */}
            <Card className="absolute w-full h-full backface-hidden rounded-2xl shadow-xl flex flex-col items-center justify-center p-0">
              <Image
                src={image}
                alt={`profile ${id}`}
                width={300}
                height={300}
                className=" h-full  w-full object-cover rounded-xl"
              />
            </Card>
            
            {/* Back */}
            <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-2xl rotate-y-180 p-0 flex flex-col items-center justify-center">
              <h3 className="text-4xl text-gray-800 mb-4 bozos-header font-thin">{name}</h3>
              <p className="text-gray-600 text-md leading-relaxed p-6">
                {about}
              </p>
            </div>
          </div>
        </div>

      
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
</>
  );
}