'use client';

import { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ConfirmationPage = () => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const orderNumber = 'ASR123459';
  const orderTotal = 3012;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-6">
      <div className="max-w-xl w-full border py-8 px-12 rounded-lg shadow">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <Check className="w-10 h-10 text-green-600" strokeWidth={3} />
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Thanks a lot for putting up this order
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
            Your Malifo order{' '}
            <span className="font-semibold text-amber-600 underline">{orderNumber}</span>{' '}
            has successfully been placed. You&apos;ll find all the details about your order below, and we&apos;ll send you a shipping confirmation email as soon as your order ships. In the meantime, you can share Malifo and earn store credit.
          </p>
        </div>

        {/* Email Link */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 mb-1">
            Questions? Suggestions? Insightful show thoughts?
          </p>
          <a
            href="mailto:support@malifo.com"
            className="text-sm text-yellow-600 hover:text-yellow-700 font-medium underline"
          >
            Shoot us an email
          </a>
        </div>

        {/* Order Review Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-6 overflow-hidden">
          <button
            onClick={() => setIsOrderOpen(!isOrderOpen)}
            className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors"
          >
            <div className="flex flex-col items-start gap-1">
              <span className="font-semibold text-gray-900">Order Review</span>
              <span className="text-sm text-gray-900">01 item in cart</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-500 font-semibold">$ {orderTotal}</span>
              {isOrderOpen ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </div>
          </button>

          {isOrderOpen && (
            <div className="px-5 pb-5 border-t border-gray-100">
              <div className="py-4 space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg"></div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 text-sm">Product Name</h3>
                    <p className="text-xs text-gray-500">Size: M, Color: Blue</p>
                    <p className="text-sm font-semibold text-gray-900 mt-1">$ {orderTotal}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Continue Shopping Button */}
        
          <Button asChild className="w-full bg-black text-white rounded-xl font-semibold hover:bg-gray-900 transition-colors py-6">
            <Link href="/shop">
              Continue Shopping
            </Link>
          </Button>
      </div>
    </div>
  );
}


export default ConfirmationPage