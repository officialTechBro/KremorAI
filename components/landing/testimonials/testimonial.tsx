import { ArrowUpRight, Rewind, Sparkle } from "lucide-react"

const Testimonial = () => {
  return (
    <section className="p-10 bg-stone-100">
        <div className="flex flex-col items-center justify-center py-20 md:py-25">
            <div className="text-center">
                <p className="text-md md:text-xl lg:text-3xl font-medium">&quot;I Love the variety of styles and the high-quality clothing on this web fashion site&quot;</p>
                <p className="text-gray-500 text-xs mt-4 md:text-[15px] lg:text-xl">- Some & Co</p>
            </div>
            <div className="flex items-center justify-between space-x-10 md:min-w-xl mt-15 text-stone-400">
                <span className="font-bold flex  items-center text-xs md:text-xl lg:text-2xl"><ArrowUpRight className="mr-2 size-4 md:size-6 lg:size-10" />45 Degrees</span>
                <span className="font-bold flex items-center text-xs md:text-xl lg:text-2xl"><Sparkle className="mr-2 size-4 md:size-6 lg:size-10" />Acme Corp</span>
                <span className="font-bold flex items-center text-xs md:text-xl lg:text-2xl"><Rewind className="mr-2 size-4 md:size-6 lg:size-10" />AlphaWave</span>
            </div>
        </div> 
    </section>
  )
}
export default Testimonial