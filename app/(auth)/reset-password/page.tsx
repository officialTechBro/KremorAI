'use client'
import { useState } from "react";

const PasswordResetPage = () => {
    const [email, setEmail] = useState<string>('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle login logic here
      };
   return (
    <div className="min-h-[70vh] bg-white flex items-center justify-center px-4">
        <div className="w-full max-w-xl">
            <div className="text-center mb-8">
                <h1 className="text-5xl font-thin text-black  bozos-header">Reset Password</h1>
            </div>

            <div className="bg-white p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                            Email Address*
                        </label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter registered email"
                            className="w-full px-0 py-3 bg-white border-0 border-b border-gray-300 focus:outline-none focus:border-black text-gray-900 placeholder-gray-500 placeholder:text-xs"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 border border-gray-700 rounded-lg font-semibold text-black hover:bg-black hover:text-white transition-colors duration-200"
                    >
                        RESET
                    </button>
                </form>
            </div>
        </div>
    </div>

)}
export default PasswordResetPage