import AiAssistant from "@/components/common/ai-assistant"
import AiPrompter from "@/components/common/ai-propmter"
import Features from "@/components/landing/features/features"
import Newsletter from "@/components/landing/newsletter/newsletter"
import ProductsPage from "@/components/product/product"

const ProductPage = () => {
  return (
    <div className="relative">
        <ProductsPage />
        <Newsletter />
        <Features />
        <AiAssistant />
        <AiPrompter />
    </div>
  )
}
export default ProductPage