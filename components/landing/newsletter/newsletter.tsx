import Image from "next/image"
import NewsImage from '@/public/images/Newsbg.png'
import { Send } from "lucide-react"

const Newsletter = () => {
  return (
    <section className="py-15 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-stone-100 rounded-md h-md mt-20">
            <div className="flex items-center h-[500px] lg:pl-20  justify-center md:justify-start ">
                <div className="flex flex-col gap-4 md:pl-5 lg:pl-10 px-15">
                  <h1 className="text-2xl lg:text-3xl font-semibold max-w-xs lg:max-w-md tracking-wide">Join our newsletter. Enjoy big discounts.</h1>
                  <p>Hear what they say about us</p>
                  <div className="flex flex-col max-w-md items-center gap-3">
                        {/* <Input type="email" placeholder="jane@kremoreAI.coml"  className="bg-stone-200 lg:py-5 placeholder:text-black rounded"/>
                        <Button type="submit" variant="default" className="lg:p-5 rounded">
                          Signup
                        </Button> */}
                        <form action="" className="w-full flex flex-col md:flex-row gap-2">
                          <input 
                            type="email"
                            placeholder="jane@kremoreAI.com"
                            name="newsletter"
                            // value={newsletter}
                            className="bg-stone-200 py-2 px-4 placeholder:text-black rounded w-full"
                          />
                          <button type="submit" className="bg-black text-xs text-white w-full rounded flex items-center justify-center py-3 px-6 flex-1 md:w-[300px]">
                            <Send />
                          </button>
                        </form>
                  </div>
                </div>
            </div>
            <Image
                src={NewsImage}
                alt="newsletter bg"
                width={400}
                height={200}
                className="hidden md:block object-cover w-full h-[500px] rounded-r-md"
            />
        </div>
    </section>
  )
}
export default Newsletter