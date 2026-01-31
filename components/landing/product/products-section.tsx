import ProductHeader from "./header"
import ProductsBody from "./products-body"

const ProductSection = () => {
  return (
    <div className="bg-white py-15 px-10">
        <ProductHeader />
        <ProductsBody />
    </div>
  )
}
export default ProductSection