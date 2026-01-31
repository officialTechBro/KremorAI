import Image from "next/image"

interface FeatureCardProps {
  iconSrc: string
  text: string
  tag: string
}

const FeatureCard = ({ iconSrc, text, tag }: FeatureCardProps) => {
  return (
    <div className="flex space-x-4">
      <div className="h-6 w-6 md:h-8 md:w-8 flex items-center justify-center">
        <Image
          src={iconSrc}
          alt={text}
          width={200}
          height={200}
          className="md:w-6 md:h-6 object-fill"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="font-semibold">{text}</h1>
        <p className="text-xs md:text-sm">{tag}</p>
      </div>
    </div>
  )
}

export default FeatureCard
