import ProductContent from "./product-content"
import ProductsPageHeader from "./products-header"

const ProductsPage = () => {
  return (
    <div className="min-h-screen">
        <ProductsPageHeader />
        <ProductContent />
    </div>
  )
}
export default ProductsPage