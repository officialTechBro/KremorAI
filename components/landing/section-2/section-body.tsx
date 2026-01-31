import SectionCard from "./section-card"
import { Badge } from "@/components/ui/badge"
import { SparklesIcon } from "lucide-react"
import { sectionsDetails } from "@/data/data"


const SectionBody = () => {
  return (
    <div className="mt-10">
        <div  className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sectionsDetails.map((section) => (
                    <SectionCard key={section.title} {...section} />
            ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
            <p className="mt-10 text-gray-600 text-sm text-center">Generate you custom African Fashion with Kremor AI now</p>
            <Badge
                variant='outline'
                className="py-2 px-4 text-sm backdrop-blur-lg border-gray-200"
            >
                <div className=" flex items-center space-x-3 py-4 px-15 md:px-30 rounded-full bg-primary hover:bg-primary/80 cursor-pointer">
                    <SparklesIcon className="h-5 w-5 text-yellow-500/80" />
                    <span className="text-white text-md font-medium uppercase tracking-wider">Use Kremor.AI</span>
                </div>
            </Badge>
        </div>
    </div>
  )
}
export default SectionBody