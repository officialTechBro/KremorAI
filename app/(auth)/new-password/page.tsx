'use client';

import { useState, useEffect } from 'react';
import { Check, X, Eye, EyeOff } from 'lucide-react';

const NewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [touched, setTouched] = useState({
    password: false,
    confirmPassword: false
  });

  // Password validation
  const isPasswordStrong = password.length >= 8 && 
    /[A-Z]/.test(password) && 
    /[a-z]/.test(password) && 
    /[0-9]/.test(password);
  
  const containsNameOrEmail = false; // You can add logic to check against user's name/email
  
  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0;
  const passwordsDontMatch = confirmPassword.length > 0 && password !== confirmPassword;

  const canProceed = isPasswordStrong && passwordsMatch && !containsNameOrEmail;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl  text-gray-900 mb-12 text-center tracking-tight bozos-header">
          Enter New Password
        </h1>

        <div className="space-y-6">
          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setTouched({ ...touched, password: true })}
                placeholder="Enter your Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={() => setTouched({ ...touched, confirmPassword: true })}
                placeholder="Confirm Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Validation Messages */}
          <div className="space-y-2">
            {/* Password Strength */}
            {touched.password && password.length > 0 && (
              <div className="flex items-center gap-2">
                {isPasswordStrong ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-green-600 font-medium">
                      Password Strength : Strong
                    </span>
                  </>
                ) : (
                  <>
                    <X className="w-4 h-4 text-orange-600" />
                    <span className="text-sm text-orange-600 font-medium">
                      Password Strength : Weak
                    </span>
                  </>
                )}
              </div>
            )}

            {/* Name/Email Check */}
            {touched.password && password.length > 0 && (
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-600">
                  Cannot contain your name or email address
                </span>
              </div>
            )}

            {/* Password Match */}
            {touched.confirmPassword && confirmPassword.length > 0 && (
              <div className="flex items-center gap-2">
                {passwordsMatch ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-green-600 font-medium">
                      Passwords match
                    </span>
                  </>
                ) : (
                  <>
                    <X className="w-4 h-4 text-red-600" />
                    <span className="text-sm text-red-600 font-medium">
                      Does not match. Please verify!
                    </span>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Proceed Button */}
          <button
            disabled={!canProceed}
            className={`w-full py-4 rounded-xl font-semibold text-lg transition-all mt-8 ${
              canProceed
                ? 'bg-black text-white hover:bg-gray-900'
                : 'bg-white border border-gray-500 text-gray-400 cursor-not-allowed'
            }`}
          >
            PROCEED TO LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewPassword