'use client';

import { useState } from 'react';
import { Check, Lock, Info } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PaymentInfoPage() {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'paypal'>('card');
  const [shippingMethod, setShippingMethod] = useState<'ups' | 'dhl'>('ups');
  const [cardDetails, setCardDetails] = useState({
    name: '',
    number: '',
    expiry: '',
    cvv: ''
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <h1 className="text-xl md:text-3xl font-bold text-black mb-8">PAYMENT INFO</h1>

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
              <div className="w-8 h-8 rounded-sm bg-linear-to-br from-white to via-yellow-600 to-yellow-700 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">2</span>
              </div>
              <span className="text-xs md:text-sm font-medium text-yellow-700">Payment Info</span>
            </div>
            <div className="flex-1 h-px bg-gray-300 mx-4"></div>

            {/* Step 3 - Checkout */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-sm bg-yellow-600/20 flex items-center justify-center">
              <span className="text-gray-500 font-semibold text-sm">3</span>
            </div>
            <span className="text-xs md:text-sm font-medium text-yellow-700">Checkout</span>
            </div>
          </div>
        </div>

        

        {/* Billing Address */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Billing Address</h2>

          {/* Payment Method Selection */}
          <div className="space-y-4 mb-6 ">
            {/* Credit Card */}
            <div
              onClick={() => setPaymentMethod('card')}
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                paymentMethod === 'card'
                  ? 'border-black bg-yellow-50/30'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === 'card' ? 'border-black' : 'border-gray-300'
                  }`}>
                    {paymentMethod === 'card' && (
                      <div className="w-3 h-3 rounded-full bg-black"></div>
                    )}
                  </div>
                  <span className="font-medium text-gray-900 text-sm">Pay with Credit Card</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="vectors/visa-logo.svg" alt="Visa" width={32} height={20} />
                  <Image src="vectors/Stripe.svg" alt="Amex" width={32} height={20} />
                  <Image src="vectors/Mastercard.svg" alt="Mastercard" width={32} height={20} />
                </div>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-4 pt-4 border-t border-gray-200">
                  {/* Name on card */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-2">
                      Name on card
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={cardDetails.name}
                      onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/80 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Card number */}
                    <div className="col-span-2">
                      <label className="block text-xs font-medium text-gray-700 mb-2">
                        Card number
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2">
                          <Image src="vectors/Mastercard.svg" alt="Mastercard" width={32} height={20} />
                        </div>
                        <input
                          type="text"
                          placeholder="1234 1234 1234 1234"
                          value={cardDetails.number}
                          onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                          className="w-full pl-12 pr-12 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/80 focus:border-transparent placeholder:text-xs"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2">
                          <Info className="w-4 h-4 text-orange-500" />
                        </button>
                      </div>
                    </div>

                    {/* Expiry */}
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">
                        Expiry
                      </label>
                      <input
                        type="text"
                        placeholder="08 / 2024"
                        value={cardDetails.expiry}
                        onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/80 focus:border-transparent placeholder:text-xs"
                      />
                    </div>

                    {/* CVV */}
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="•••"
                          value={cardDetails.cvv}
                          onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/80 focus:border-transparent"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2">
                          <Info className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Apple Pay */}
            <div
              onClick={() => setPaymentMethod('apple')}
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                paymentMethod === 'apple'
                  ? 'border-black bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === 'apple' ? 'border-black' : 'border-gray-300'
                  }`}>
                    {paymentMethod === 'apple' && (
                      <div className="w-3 h-3 rounded-full bg-black"></div>
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Apple Pay</p>
                    <p className="text-xs text-gray-500">Mastercard and unlimited individual cards</p>
                  </div>
                </div>
                <div className="text-xl">
                    <Image src="vectors/ApplePay.svg" alt="Mastercard" width={32} height={20} />
                </div>
              </div>
            </div>

            {/* PayPal */}
            <div
              onClick={() => setPaymentMethod('paypal')}
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                paymentMethod === 'paypal'
                  ? 'border-black bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === 'paypal' ? 'border-black' : 'border-gray-300'
                  }`}>
                    {paymentMethod === 'paypal' && (
                      <div className="w-3 h-3 rounded-full bg-black"></div>
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Paypal</p>
                    <p className="text-xs text-gray-500">You will be redirected to PayPal website after submitting your order.</p>
                  </div>
                </div>
                <div className="text-xl">
                    <Image src="vectors/PayPal.svg" alt="Mastercard" width={16} height={10} />
                </div>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg">
            <Lock className="w-4 h-4 text-gray-600 mt-0.5 shrink-0" />
            <p className="text-xs text-gray-600">
              We protect your payment information using encryption to provide bank-level security.
            </p>
          </div>
        </div>

        {/* Shipping Method */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">Shipping method</h3>

          <div className="space-y-3">
            {/* UPS */}
            <div
              onClick={() => setShippingMethod('ups')}
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                shippingMethod === 'ups'
                  ? 'border-black bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  shippingMethod === 'ups' ? 'border-black' : 'border-gray-300'
                }`}>
                  {shippingMethod === 'ups' && (
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-900">€3.99 UPS</p>
                  </div>
                  <p className="text-xs text-gray-500">USPS 1st Class With Tracking</p>
                  <p className="text-xs text-gray-500">(5 - 13 days)</p>
                </div>
              </div>
            </div>

            {/* DHL */}
            <div
              onClick={() => setShippingMethod('dhl')}
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                shippingMethod === 'dhl'
                  ? 'border-black bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  shippingMethod === 'dhl' ? 'border-black' : 'border-gray-300'
                }`}>
                  {shippingMethod === 'dhl' && (
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">€4.99 DHL</p>
                  <p className="text-xs text-gray-500">Express Parcel with Tracking</p>
                  <p className="text-xs text-gray-500">(1 - 3 days)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button asChild className="flex-1 bg-white border-2 border-gray-300 text-gray-900 py-6 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
            <Link href="/measurement">
                  Back
            </Link>
          </Button>
          <Button asChild className="flex-1 bg-black text-white py-6 rounded-xl font-semibold hover:bg-gray-900 transition-colors md:col-span-2">
            <Link href="/checkout">
                Next
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}