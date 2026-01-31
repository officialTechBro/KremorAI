import Image from "next/image"
import FlipCard from "./flip-card"
import Features from "@/components/landing/features/features"
import { Profile } from "@/data/data"


const AboutPage = () => {
  return (
    <section>
        <header 
            className="text-center p-20 bg-cover mb-8"
            style={{backgroundImage: `url('/images/About-pattern1.png')`}}
        >
          <h1 className="text-5xl md:text-7xl bozos-header font-thin">About Kremor AI</h1>
          <p className="text-gray-700 text-sm md:text-base">
            Celebrating African Fashion Through the Power of AI
          </p>
        </header>
        <div className="container mx-auto flex lg:grid lg:grid-cols-2 gap-6 mb-6">
            <div className="hidden lg:flex">
              <Image 
                src='/images/Kremor.png'
                alt="kremor logo"
                width={700}
                height={400}
                className="object-cover"
              />
            </div>

            <div className="px-6">
              <div>
                <h1 className="text-4xl md:text-5xl bozos-header mb-3">Who we are?</h1>
                <p className="text-sm md:text-[18px] mb-6 text-gray-600">Kremor Studios is a creative technology company dedicated to reimagining African fashion for the modern world. 
                  We blend deep cultural heritage with advanced artificial intelligence to create a new era of personalized, on-demand African design.
                </p>
                <p className="text-sm md:text-[18px] mb-6 text-gray-600">Our flagship product, KrèmorAI, gives anyone the ability to generate custom outfits inspired by the richness 
                  of African textiles — from Ankara to Aso-Oke, Adire, Kente, and contemporary Afro-fusion styles. With a single prompt, users can create breathtaking designs tailored to 
                  their taste, body shape, and event.
                </p>
              </div>
              <div>
                <Image 
                  src='/images/About-pattern2.png'
                  alt="kremor"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm md:text-[18px] my-6 text-gray-600">We believe African fashion is more than fabric; it is identity, expression, and storytelling. Our mission is to bring 
                  the artistry of African design to a global audience through intuitive technology and the craftsmanship of skilled tailors.
                </p>
              </div>
            </div>
        </div>

        <div className="h-20 w-full bg-black text-white flex items-center">
            <div className="lg:flex items-center justify-between w-full gap-4 p-6 hidden">
              <p className="text-xl bozos-header font-thin">Shop Now</p>
              <p className="text-xl bozos-header font-thin">Shop the sale</p>
              <p className="text-xl bozos-header font-thin">Shop Now</p>
              <p className="text-xl bozos-header font-thin">Shop the sale</p>
              <p className="text-xl bozos-header font-thin">Shop Now</p>
              <p className="text-xl bozos-header font-thin">Shop the sale</p>
              <p className="text-xl bozos-header font-thin">Shop Now</p>
              <p className="text-xl bozos-header font-thin">Shop the sale</p>
            </div>
        </div>

        <div className="my-18">
          <div className="text-center">
            <p>Join us</p>
            <h1 className="text-5xl font-thin bozos-header">@KremorAI</h1>
          </div>
          <div className="mt-8 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-10">
              {Profile.map((pr) => (
                <FlipCard key={pr.id} {...pr} />
              ))}
            </div>
          </div>
        </div>

        <Features />
    </section>
  )
}
export default AboutPage