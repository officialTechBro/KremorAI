import Blob from "./blob"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{backgroundImage: `url('/images/Hero-bg.jpg')`}}
        >
          <Blob />
        </div>
    </section>
  )
}
export default HeroSection