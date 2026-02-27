'use client';

import { useState, useRef, KeyboardEvent, ClipboardEvent } from 'react';
import { Send } from 'lucide-react';

const OTPVerificationPage = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const maskedEmail = 'aa**************@gmail.com';

  const handleChange = (index: number, value: string) => {
    // Only allow single digit
    if (value.length > 1) return;
    
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    // Move to previous input on backspace if current is empty
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split('').forEach((char, index) => {
      if (index < 6) {
        newOtp[index] = char;
      }
    });
    setOtp(newOtp);

    // Focus last filled input or first empty
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleVerify = () => {
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      console.log('Verifying OTP:', otpValue);
      // Add your verification logic here
    }
  };

  const handleResend = () => {
    setTimer(60);
    console.log('Resending OTP...');
    // Add your resend logic here
  };

  const isComplete = otp.every(digit => digit !== '');

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="border rounded-lg bg-yellow-50 w-12 h-12 flex items-center justify-center">
            <Send className='text-yellow-500 w-7 h-7' />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl  text-gray-900 mb-4 tracking-tight uppercase bozos-header">
          OTP Verification
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-8">
          We've sent an OTP verification to{' '}
          <span className="font-semibold block mt-2 text-gray-900">{maskedEmail}</span>
        </p>

        {/* OTP Input Label */}
        <div className="mb-4 text-left ml-10">
          <label className="text-sm font-medium text-gray-900">
            Enter OTP <span className="text-red-500">*</span>
          </label>
        </div>

        {/* OTP Input Boxes */}
        <div className="flex gap-3 justify-center mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="w-12 h-14 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
            />
          ))}
        </div>

        {/* Resend Link */}
        <div className="mb-8 text-sm">
          <span className="text-gray-600">Didn't receive any code? </span>
          <button
            onClick={handleResend}
            className="text-amber-600 font-medium hover:text-amber-700 hover:underline"
          >
            Resend in {timer}s
          </button>
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          disabled={!isComplete}
          className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
            isComplete
              ? 'bg-black text-white hover:bg-gray-900'
              : 'bg-white border border-gray-500 text-gray-400 cursor-not-allowed'
          }`}
        >
          VERIFY
        </button>
      </div>
    </div>
  );
}

export default OTPVerificationPage