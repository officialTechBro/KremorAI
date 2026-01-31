'use client';

import { useState } from 'react';
import { Upload, SparklesIcon } from 'lucide-react';
import Image from 'next/image';
import MeasurmentFormInput from '@/components/measurements/measurement-inputs';
import VideoGuide from '@/components/measurements/video-guide';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const MeasurementPage = () => {
  const [measurements, setMeasurements] = useState({
    bust: '',
    waist: '',
    hips: '',
    frontWaist: '',
    backWaist: '',
    highBust: '',
    highHips: '',
    skirtLength: '',
    inseam: '',
    sleeveLength: '',
    outseam: '',
    height: '',
    additionalNotes: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setMeasurements(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <h1 className="text-xl md:text-3xl font-bold text-black mb-8">MEASUREMENT</h1>

        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-12 max-w-2xl border border-yellow-500/80 bg-yellow-50/30 py-4 px-2 rounded-xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm bg-linear-to-br from-white to via-yellow-600 to-yellow-700 flex items-center justify-center">
              <span className="text-white font-semibold text-sm">1</span>
            </div>
            <span className="text-xs md:text-sm font-medium text-yellow-700">Measurement</span>
          </div>
          <div className="flex-1 h-px bg-gray-300 mx-4"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm bg-yellow-600/20 flex items-center justify-center">
              <span className="text-gray-500 font-semibold text-sm">2</span>
            </div>
            <span className="text-xs md:text-sm font-medium text-gray-400">Payment Info</span>
          </div>
          <div className="flex-1 h-px bg-gray-300 mx-4"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm bg-yellow-600/20 flex items-center justify-center">
              <span className="text-gray-500 font-semibold text-sm">3</span>
            </div>
            <span className="text-xs md:text-sm font-medium text-gray-400">Checkout</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upload Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shrink-0">
                    <SparklesIcon className="w-5 h-5 text-yellow-500/80" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-sm mb-1">
                      Let KremorAI Measure you.
                    </h3>
                    <p className="text-xs text-black">
                      Upload a Front and Side view of yourself <span className="font-semibold">(Make sure it is clear)</span>
                    </p>
                  </div>
                </div>
                <button className="px-10 md:px-6 py-2 border-2 border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  UPLOAD
                </button>
              </div>
            </div>

            {/* Measurements Form */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-900">Measurements (Inches)</h2>
                <p className="text-sm text-gray-600 mt-1">
                  Please fill in your body measurements for a custom, perfect fit. Follow the video guide on the right.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bust */}
                <MeasurmentFormInput
                  label="Bust"
                  value={measurements.bust}
                  onChange={(value) => handleInputChange("bust", value)}
                  placeholder="Enter Bust Value"
                  required
                />

                {/* Waist */}
                <MeasurmentFormInput
                  label="Waist"
                  value={measurements.waist}
                  onChange={(value) => handleInputChange("waist", value)}
                  placeholder="Enter Waist Value"
                  required
                />

                {/* Hips */}
                <MeasurmentFormInput
                  label="Hips"
                  value={measurements.hips}
                  onChange={(value) => handleInputChange("hips", value)}
                  placeholder="Enter Hips Value"
                  required
                />

                {/* Front Waist */}
                <MeasurmentFormInput
                  label="Front Waist"
                  value={measurements.frontWaist}
                  onChange={(value) => handleInputChange("frontWaist", value)}
                  placeholder="Enter Front Waist Value"
                  required
                />

                {/* Back Waist */}
                <MeasurmentFormInput
                  label="Back Waist"
                  value={measurements.backWaist}
                  onChange={(value) => handleInputChange("backWaist", value)}
                  placeholder="Enter Back Waist Value"
                  required
                />

                {/* High Bust */}
                <MeasurmentFormInput
                  label="High Bust"
                  value={measurements.highBust}
                  onChange={(value) => handleInputChange("highBust", value)}
                  placeholder="Enter High Bust Value"
                  required
                />

                {/* High Hips */}
                <MeasurmentFormInput
                  label="High Hips"
                  value={measurements.highHips}
                  onChange={(value) => handleInputChange("highHips", value)}
                  placeholder="Enter High Hips Value"
                  required
                />

                {/* Skirt/Gown Length */}
                <MeasurmentFormInput
                  label="Skirt/Gown Length"
                  value={measurements.skirtLength}
                  onChange={(value) => handleInputChange("skirthLength", value)}
                  placeholder="Enter Skirt/Gown Length Value"
                  required
                />

                {/* Inseam */}
                <MeasurmentFormInput
                  label="Inseam"
                  value={measurements.inseam}
                  onChange={(value) => handleInputChange("inseam", value)}
                  placeholder="Enter Inseam Value"
                  required
                />

                {/* Sleeve Length */}
                <MeasurmentFormInput
                  label="Sleeve Length"
                  value={measurements.sleeveLength}
                  onChange={(value) => handleInputChange("sleeveLength", value)}
                  placeholder="Enter Sleeve Length Value"
                  required
                />

                {/* Outseam */}
                <MeasurmentFormInput
                  label="Outseam"
                  value={measurements.outseam}
                  onChange={(value) => handleInputChange("outseam", value)}
                  placeholder="Enter Outseam Value"
                  required
                />


                {/* Height */}
                <MeasurmentFormInput
                  label="Height (Your Total Height)"
                  value={measurements.height}
                  onChange={(value) => handleInputChange("height", value)}
                  placeholder="Enter Height Length Value"
                  required
                />

              </div>

              {/* Additional Notes */}
              <div className="mt-6">
                <label className="block text-[13px] font-medium text-black mb-2">
                  Additional Notes? Tell us
                </label>
                <textarea
                  value={measurements.additionalNotes}
                  onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                  placeholder="Tell us what you would like us to know"
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none placeholder:text-xs"
                />
              </div>
            </div>

            {/* Next Button */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild  className="flex-1 bg-white border-2 border-gray-300 text-gray-900 py-6 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
              <Link href="/products">
                    Back
              </Link>
            </Button>
            <Button asChild className="flex-1 bg-black text-white py-6 rounded-xl font-semibold hover:bg-gray-900 transition-colors md:col-span-2">
              <Link href="/payment-info">
                  Next
              </Link>
            </Button>
          </div>
            
          </div>

          {/* Right Side - Guide */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-black sticky top-8">
              <h3 className="text-center text-3xl text-gray-900 mb-2 tracking-wide bozos-header">
                MEASUREMENT GUIDE
              </h3>
              
              {/* Video Guide */}
              <VideoGuide />

              {/* AI Transcript */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <SparklesIcon  className='text-yellow-500/80 w-4 h-4'/>
                  </div>
                  <h4 className="font-semibold text-sm text-black">AI Transcript</h4>
                </div>
                
                <div className="space-y-4 text-xs text-black">
                  <div>
                    <p className="font-bold mb-1">1. NECK SIZE</p>
                    <p>Use the tape to measure around the base of your neck, where it meets your shoulders. It should feel snug but not tight. Slip a finger between your neck and the tape measure for a more loose fit collar.</p>
                  </div>
                  
                  <div>
                    <p className="font-bold mb-1">2. SLEEVE</p>
                    <p>Bend your elbow and put your hand on your hip. Ask your friend to measure from middle of the back of your neck, across your shoulder and above to wrist bone.</p>
                  </div>
                  
                  <div>
                    <p className="font-bold mb-1">3. CHEST WIDTH</p>
                    <p>The circumference should be taken beneath your armpits, around the widest part of your chest and shoulder blades. Make sure you keep your arms at your side and hold your breath while measuring.</p>
                  </div>
                  
                  <div>
                    <p className="font-bold mb-1">4. WAIST</p>
                    <p>Put the tape around your natural waistline, which should be close to your bellybutton. Pull the tape and the tape your body before you.</p>
                  </div>
                  
                  <div>
                    <p className="font-bold mb-1">5. INSEAM (LEG LENGTH)</p>
                    <p>This is the distance between your groin and your lower ankle. You might find that is most easily measured on a pair of pants that already suit you.</p>
                  </div>
                </div>
              </div>

              {/* Body Diagram */}
              <div className="mt-6">
                <div className="relative aspect-3/4 bg-gray-50 rounded-lg p-4">
                  <Image
                    src="/images/measurements.png"
                    alt="Body measurement diagram"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeasurementPage