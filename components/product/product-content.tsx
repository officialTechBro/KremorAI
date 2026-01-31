'use client'
import { Products } from "@/data/data"
import { useState } from "react";
import ProductCard from "../landing/product/product-card";

const ProductContent = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All products' },
    { id: 'women', label: 'Ankara Clothings (Women)' },
    { id: 'men', label: 'Ankara Clothings (Men)' },
    { id: 'bags', label: 'Bags' },
    { id: 'ready', label: 'Ready to Wear' }
  ];


  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar Filters */}
          <aside className="lg:w-80 shrink-0">
            <div className="bg-white rounded-2xl p-6  sticky top-24">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">All Products</h2>
              <p className="text-gray-800 text-[13px] mb-6">
                Shop now, not later. Browse the best of our favourite sale styles and brands.
              </p>

              <div className="space-y-3">
                {categories.map((category) => (
                  <label
                    key={category.id}
                    className="flex items-center gap-3 cursor-pointer group border-b pb-4"
                  >
                    <input
                      type="radio"
                      name="category"
                      value={category.id}
                      checked={selectedCategory === category.id}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-5 h-5 accent-black cursor-pointer"
                    />
                    <span className="text-black group-hover:text-black transition text-[15px]">
                      {category.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {Products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
          </div>
        </div>
      </section>
  )
}
export default ProductContent