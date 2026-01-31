'use client';

import Image from "next/image"
import { Search, ShoppingCart, User, SparklesIcon, Menu, X, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="shrink-0">
            <Link href='/' className="block relative h-8 w-24 sm:w-28 md:w-32">
              <Image 
                src="/images/logo.png" 
                alt="Krémor.AI Logo" 
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/" className="text-white/80 hover:text-white transition text-sm">Home</Link>
            <Link href="/about" className="text-white/80 hover:text-white transition text-sm">About</Link>
          </nav>

          {/* Search Bar - Hidden on small/medium, visible on large screens */}
          <div className="relative hidden lg:block flex-1 max-w-md xl:max-w-lg">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60 z-10 pointer-events-none" />
            <input 
              type="text"
              placeholder="Search" 
              className="w-full h-10 pl-10 pr-4 bg-black/40 border border-white/20 rounded-full text-white text-sm placeholder:text-white/60 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30 transition"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/products" className="text-white/80 hover:text-white transition text-sm">Shop</Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition text-sm">Contact</Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* Cart */}
            <Button 
              variant="ghost" 
              size="icon"
              className="relative text-white hover:text-yellow-500/80 hover:bg-white/10"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-yellow-500/80 text-white text-[10px] font-semibold rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Account Dropdown */}
            <div className="relative">
              <Button 
                variant="default" 
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className="text-white hover:text-yellow-500/80 hover:bg-white/10 rounded-full px-3 sm:px-4 md:px-6 h-10 md:h-12 flex items-center gap-2"
              >
                <User className="h-4 w-4 md:h-5 md:w-5" />
                <span className="text-xs hidden sm:block font-medium">ACCOUNT</span>
              </Button>

              {/* Dropdown Menu */}
              {isAccountOpen && (
                <>
                  {/* Backdrop */}
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsAccountOpen(false)}
                  />
                  
                  {/* Dropdown Content */}
                  <div className="absolute -left-37 md:-left-20 top-full mt-2 w-72 sm:w-80 bg-neutral-900 rounded-lg shadow-2xl border border-white/10 overflow-hidden z-50">
                    <div className="p-4">
                      <h3 className="text-yellow-500/80 font-semibold text-[13px] tracking-wider">ACCOUNT</h3>
                    </div>

                    <div className="p-2">
                      {/* Login/Sign up */}
                      <Link 
                        href="/login"
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition group"
                        onClick={() => setIsAccountOpen(false)}
                      >
                        <div>
                          <h4 className="text-white text-[13px] font-medium mb-1">Login/Sign up</h4>
                          <p className="text-white/60 text-xs">Log into your account to buy/ add desired product to cart.</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-white group-hover:text-yellow-500/80 transition shrink-0" />
                      </Link>

                      {/* Cart/Wishlist */}
                      <Link 
                        href="/cart"
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition group"
                        onClick={() => setIsAccountOpen(false)}
                      >
                        <div>
                          <h4 className="text-white text-[13px] font-medium mb-1">Cart/Wishlist</h4>
                          <p className="text-white/60 text-xs">View added product for checkout</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-white group-hover:text-yellow-500/80 transition shrink-0" />
                      </Link>

                      {/* Shop */}
                      <Link 
                        href="/products"
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition group"
                        onClick={() => setIsAccountOpen(false)}
                      >
                        <div>
                          <h4 className="text-white text-[13px] font-medium mb-1">Shop</h4>
                          <p className="text-white/60 text-xs">View our latest designs available. Discount coupon applied.</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-white group-hover:text-yellow-500/80 transition shrink-0" />
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* AI Sparkles Button */}
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="bg-black rounded-full h-10 w-10 md:h-12 md:w-12 shrink-0 hover:bg-gray-900"
            >
              <Link href="/chat"><SparklesIcon className="h-5 w-5 text-yellow-500/80 hover:text-white" /></Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10 hover:text-yellow-500/80"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile/Tablet Search Bar */}
        <div className="relative lg:hidden mt-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60 z-10 pointer-events-none" />
          <input 
            type="text"
            placeholder="Search" 
            className="w-full h-10 pl-10 pr-4 bg-black/40 border border-white/20 rounded-full text-white text-sm placeholder:text-white/60 focus:border-yellow-500/80 focus:outline-none focus:ring-2 focus:ring-orange-500/30 transition"
          />
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-2 space-y-2 border-t border-white/10 pt-4">
            <Link 
              href="/" 
              className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/products" 
              className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              href="/contact" 
              className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header;