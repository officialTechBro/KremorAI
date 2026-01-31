'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { ProductsType } from '@/lib/types';
import { Products } from '@/data/data';
import ProductCard from '../landing/product/product-card';
import Link from 'next/link';
import { Button } from '../ui/button';

type Props = {
  product: ProductsType
}

const  ProductDetailPage = ({ product }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const thumbnails = [
    '/images/kimono-green-1.jpg',
    '/images/kimono-green-2.jpg',
    '/images/kimono-green-3.jpg',
  ];

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Side - Images */}
          <div className="flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-3 sm:w-24">
              {thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-black ring-2 ring-black'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <Image
                    src={product.image}
                    alt={`Product view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 relative aspect-3/4 rounded-2xl overflow-hidden bg-gray-100 object-cover">
              <Image
                src={product.image}
                alt="Ankara Kimono and Inner Set"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="flex flex-col">
            {/* Stock Status */}
            <div className="mb-4">
              <span className="inline-block  text-orange-600 text-xs font-medium rounded-full">
                Out of stock
              </span>
            </div>

           <div className='border-b mb-4'>
                {/* Product Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Ankara Kimono and Inner Set
                </h1>

                {/* Price */}
                <div className="mb-2">
                <p className="text-3xl font-bold text-gray-900">₦ {product.price.toLocaleString()}</p>
                </div>
           </div>

            

            {/* Description */}
            <div className="mb-8 space-y-4">
              <p className="text-black leading-relaxed">
                {product.description}
              </p>
              
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <div className="flex items-center bg-gray-50 rounded-lg p-2">
                <button
                  onClick={decrementQuantity}
                  className="p-3 hover:bg-gray-200 rounded-lg transition"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="flex-1 text-center text-lg font-medium">
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="p-3 hover:bg-gray-200 rounded-lg transition"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild className="flex-1 bg-black text-white py-6 px-8 rounded-lg hover:bg-gray-900 transition text-base">
                <Link href='/measurement'>
                  Checkout
                </Link>
              </Button>
              <Button className="flex-1 bg-gray-50 text-black py-6 px-8 rounded-lg border border-black hover:bg-white transition text-base">
                Add to Cart
              </Button>
            </div>

            {/* Product Features */}
            <div className="space-y-3 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text text-sm">Fast & free delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text text-sm">100% Cotton</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text text-sm">Recycled material</span>
              </div>
            </div>

            {/* Size & Fit */}
            <div className="mb-6">
              <h3 className="text-sm text-black mb-3">Size & Fit</h3>
              <p className="text-gray-700 text-xs">
                Refer to our size guide for the perfect fit tailored to your measurements.
              </p>
            </div>

            {/* Delivery & Returns */}
            <div className="mb-6">
              <h3 className="text-sm text-black mb-3">Delivery & Returns</h3>
              <p className="text-gray-700 text-xs">
                We offer fast shipping and hassle-free returns within 30 days.
              </p>
            </div>

            {/* How This Was Made */}
            <div>
              <h3 className="text-sm text-black mb-3">How This Was Made</h3>
              <p className="text-gray-700 text-xs">
                Crafted with traditional Ankara fabric techniques combined with modern AI-assisted design.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className=" px-10">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between ">
                <h1 className="bozos-header text-5xl md:text-7xl font-thin">You Might Also Like</h1>
                <div className="flex flex-col mt-3 md:mt-0">
                    <h2 className="font-medium tracking-wide">All Products</h2>
                    <div className="h-0.5 w-12 bg-black lg:self-end" />
                </div>
            </div>
        </div>
        <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 px-10">
            {Products.slice(0, 4).map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
      </section>
    </div>
  );
}

export default ProductDetailPage