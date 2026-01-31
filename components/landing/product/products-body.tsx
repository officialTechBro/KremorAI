import { Products } from "@/data/data"
import ProductCard from "./product-card"


const ProductsBody= () => {
  return (
    <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {Products.map((product) => (
                <ProductCard key={product.id} {...product} />
        ))}
    </div>
  )
}
export default ProductsBody
