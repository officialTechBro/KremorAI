import Image from "next/image"
import { Play } from "lucide-react"

const VideoGuide = () => {
  return (
    <div className="mb-6 border border-black p-4 rounded-md">
                <h4 className="text-center text-xl text-gray-900 mb-3 bozos-header">
                  VIDEO GUIDE
                </h4>
                <p className="text-xs text-gray-900 text-center mb-4">
                  For the best possible fit, Please follow along the video to capture accurate measurement data.
                </p>
                <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/videoplaceholder.png"
                    alt="Measurement video guide"
                    fill
                    className="object-cover"
                  />
                  <button className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </button>
                </div>
                <button className="w-full mt-3 bg-black text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors flex items-center justify-center gap-2">
                  <Play className="w-4 h-4" />
                  Preview
                </button>
              </div>
  )
}
export default VideoGuide