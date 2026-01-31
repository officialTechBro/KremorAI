import Newsletter from "@/components/landing/newsletter/newsletter"
import Breadcrumb from "@/components/landing/product/breadcrumb"
import ProductDetailPage from "@/components/product/product-details"
import UseKremor from "@/components/product/use-kremo"
import { Products } from "@/data/data"

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function ProductDetails({ params }: Props) {
  const { id } = await params

  const SingleProduct = Products.find((p) => p.id === id)

  if (!SingleProduct) {
    return (
      <div className="py-4 px-10">
        <Breadcrumb product="Product not found" />
        <p>Product not found.</p>
      </div>
    )
  }

  return (
    <div className="py-4">
      <Breadcrumb product={SingleProduct.name} />
      <ProductDetailPage product={SingleProduct} />
      <UseKremor />
      <Newsletter />
    </div>
  )
}
