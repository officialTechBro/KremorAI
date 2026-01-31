'use client';

import { useState } from 'react';
import { Check, ChevronDown, ChevronUp, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CheckoutReviewPage() {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const orderDetails = {
    items: 1,
    subtotal: 3333.89,
    discount: 33.89,
    extraFee: 33.89,
    shipping: 33.89,
    tax: 33.89,
  };

  const total = orderDetails.subtotal + orderDetails.extraFee + orderDetails.shipping + orderDetails.tax - orderDetails.discount;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">CHECKOUT REVIEW</h1>

        {/* Step Indicator */}
         {/* Step Indicator */}
        <div className="rounded-2xl p-6 mb-8 shadow-sm border border-yellow-500/80 bg-yellow-50/30">
          <div className="flex items-center justify-between max-w-xl mx-auto">
            {/* Step 1 - Measurement */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-sm bg-green-500 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs md:text-sm font-medium text-black">Measurement</span>
            </div>
            <div className="flex-1 h-px bg-yellow-500/80 mx-4"></div>

            {/* Step 2 - Payment Info */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-sm bg-green-500 flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs md:text-sm font-medium text-black">Payment Info</span>
            </div>
            <div className="flex-1 h-px bg-yellow-500/80 mx-4"></div>

            {/* Step 3 - Checkout */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-sm bg-linear-to-br from-white to via-yellow-600 to-yellow-700 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">2</span>
              </div>
              <span className="text-xs md:text-sm font-medium text-yellow-700">Checkout</span>
            </div>
          </div>
        </div>

        {/* Order Summary Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-6 overflow-hidden">
          {/* Order Review Section */}
          <button
            onClick={() => setIsOrderOpen(!isOrderOpen)}
            className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="font-semibold text-gray-900 text-sm">Order Review</span>
            </div>
            <div className="flex items-center gap-4">
              {/* <span className="text-gray-600 font-medium">$ {orderDetails.subtotal.toFixed(2)}</span> */}
              {isOrderOpen ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400 " />
              )}
            </div>
          </button>

          {isOrderOpen && (
            // <div className="px-5 pb-5 border-t border-gray-100">
            //   <p className="text-sm text-gray-600 py-4">{orderDetails.items} item in cart</p>
            // </div>

            <div className="flex items-center justify-between text-[13px] px-5 pb-5 border-t border-gray-100">
                <p className="text-gray-600 py-4">{orderDetails.items} item in cart</p>
                <span className="text-gray-900 font-medium">$ {orderDetails.subtotal.toFixed(2)}</span>
            </div>
          )}

          <div className="border-t border-gray-200"></div>

          {/* Coupons Section */}
          <button
            onClick={() => setIsCouponOpen(!isCouponOpen)}
            className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900 text-sm">Coupons</span>
            <div className="flex items-center gap-2">
              <Plus className="w-5 h-5 text-gray-400" />
            </div>
          </button>

          {isCouponOpen && (
            <div className="px-5 pb-5 border-t border-gray-100">
              <div className="py-4">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
            </div>
          )}

          <div className="border-t border-gray-200"></div>

          {/* Checkout Summary Section */}
          <button
            onClick={() => setIsSummaryOpen(!isSummaryOpen)}
            className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900 text-sm">Check out Summary</span>
            {isSummaryOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {isSummaryOpen && (
            <div className="px-5 pb-5 border-t border-gray-100">
              <div className="space-y-3 py-4">
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900 font-medium">$ {orderDetails.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-gray-600">Discount</span>
                  <span className="text-gray-900 font-medium">$ {orderDetails.discount.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-gray-600">Extra Fee</span>
                  <span className="text-gray-900 font-medium">$ {orderDetails.extraFee.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900 font-medium">$ {orderDetails.shipping.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900 font-medium">$ {orderDetails.tax.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          {/* Total */}
          <div className="border-t border-gray-200 bg-gray-50 px-5 py-4">
            <div className="flex items-center justify-between">
              <span className="font-bold text-gray-900 text-sm">Total</span>
              <span className="font-bold text-gray-900 text-[15px]">$ {total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 mb-6">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-gray-300 text-black focus:ring-1 focus:ring-black cursor-pointer"
            />
            <span className="text-sm text-gray-700">
              Please check to acknowledge our{' '}
              <a href="/privacy" className="text-black font-medium hover:underline">
                Privacy & Terms Policy
              </a>
            </span>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button asChild className="bg-white border-2 border-gray-300 text-gray-900 py-6 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-sm">
            <Link href="/payment-info">Back</Link>
          </Button>
          <Button
            asChild
            disabled={!agreedToTerms}
            className={`md:col-span-2 py-6 rounded-xl font-semibold transition-colors text-sm ${
              agreedToTerms
                ? 'bg-black text-white hover:bg-gray-900'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <Link href="/confirmation">Proceed to Pay $ {total.toFixed(2)}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}