import Features from "@/components/landing/features/features"
import Gallery from "@/components/landing/gallery/gallery"
import HeroSection from "@/components/landing/hero-section/hero"
import Newsletter from "@/components/landing/newsletter/newsletter"
import ProductSection from "@/components/landing/product/products-section"
import SecSection from "@/components/landing/section-2/section-2"
import Testimonial from "@/components/landing/testimonials/testimonial"
import AiAssistant from "@/components/common/ai-assistant"
import AiPrompter from "@/components/common/ai-propmter"


const HomePage = () => {
  return (
    <main className="relative">
      <HeroSection />
      <SecSection />
      <ProductSection />
      <Testimonial />
      <Gallery />
      <Newsletter />
      <Features />
      <AiAssistant />
      <AiPrompter />
    </main>
  )
}
export default HomePage