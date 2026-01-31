const ProductsPageHeader = () => {
  return (
    <section 
        className="bg-white py-16 md:py-24 bg-cover"
        style={{backgroundImage: `url('/images/About-pattern1.png')`}}
    >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase mb-6 tracking-tight bozos-header">
            Made for you
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            we&apos;ve pioneered the creation of beautiful clothing and bags for all the family with AI.
          </p>
        </div>
    </section>
  )
}
export default ProductsPageHeader