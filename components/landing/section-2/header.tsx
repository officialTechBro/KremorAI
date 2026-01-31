import { SparklesIcon } from "lucide-react"


const SectionHeader = () => {
  return (
    <div className="flex flex-col " >
        <div className="flex items-center space-x-2 border border-gray-300 px-4 py-2 w-[150px] justify-center rounded-full">
            <SparklesIcon className="size-5 text-yellow-500/80 mr-2" />
            <span className="text-black font-medium text-sm md:text-lg">KremorAI</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mt-5 md:mt-10">
            <h1 className="bozos-header text-5xl md:text-7xl max-w-lg font-thin">Create Your Bespoke African Fashion With AI</h1>
            <p className="self-auto text-xs md:text-sm text-gray-800 max-w-xl mt-2 md:mt-0">Imagine a dress that perfectly captures your style and heritage. Our AI empowers you to design custom African fashion with ease</p>
        </div>
    </div>
  )
}
export default SectionHeader