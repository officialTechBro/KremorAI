import { Card } from "@/components/ui/card"
import Image from "next/image"

interface SectionCardProps {
    img: string,
    title: string,
    body: string
}

const SectionCard = ({img, title, body}: SectionCardProps) => {
  return (
    <Card className="p-4 rounded-xl shadow-md flex flex-col gap-3">
        <Image
            src={img}
            alt={title}
            width={400}
            height={200}
            className="rounded-lg object-cover w-full h-auto"
        />

      <h3 className="text-2xl md:text-3xl tracking-widest font-thin bozos-header">{title}</h3>
      <p className="text-xs md:text-sm text-gray-600">{body}</p>
    </Card>
  )
}
export default SectionCard