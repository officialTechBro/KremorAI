import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ProductsType } from "@/lib/types"


const ProductCard = ({id, image, category, name, price}: ProductsType) => {
  return (
    <Link href={`/products/${id}`}>
      <Card className="rounded-xl flex flex-col gap-3 p-0 border-none shadow-none">
          <CardContent className="p-0">
            <div>
              <Image
                src={image}
                alt={`${name} ${id}`}
                width={400}
                height={200}
                className="rounded-t-lg object-cover w-full h-auto"
              />
              <div className="h-12 w-full bg-black flex items-center justify-center uppercase text-white text-medium rounded-b-lg">
                View Product
              </div>
            </div>

            <div className="flex flex-col py-4 gap-1.5">
              <p className="font-medium tracking-widest">{category}</p>
              <h1 className="text-sm font-bold">{name}</h1>
              <p className="font-bold text-lg">₦ {price.toLocaleString()}</p>
            </div>
            
          </CardContent>
      </Card>
    </Link>
  )
}
export default ProductCard