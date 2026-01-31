import { Products} from "@/data/data"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const GalleryBody = () => {
    const galleryItem = Products.slice(0, 3)
  return (
    <div className="mt-8">
        <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {galleryItem.map((product) => (
                <Card key={product.id} className="rounded-xl flex flex-col gap-3 p-0 border-none shadow-none">
                    <CardContent className="p-0">
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={400}
                            height={200}
                            className="rounded-xl object-cover w-full h-auto"
                        />
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
  )
}
export default GalleryBody
