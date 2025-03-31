"use client"

import { Star } from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import UpgradeButton from "./_components/UpgradeButton";
import LoginButton from "@/components/LoginButton";
import { useRouter } from "next/navigation"; // Import router for navigation

async function PricingPage() {
  const router = useRouter(); // Initialize router

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] selection:bg-blue-500/20 selection:text-blue-200">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-10" />
        <div className="relative bg-[#12121a]/90 backdrop-blur-xl rounded-2xl">
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

          <div className="relative p-8 md:p-12 text-center">
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 ring-1 ring-gray-800/60 mb-6">
              <Star className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-semibold text-white mb-4">Lifetime Pro Access</h2>
            <div className="flex items-baseline justify-center gap-2 mb-4">
              <span className="text-2xl text-gray-400">₹</span>
              <span className="text-6xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text">1999</span>
              <span className="text-xl text-gray-400">one-time</span>
            </div>
            <p className="text-gray-400 text-lg mb-8">Unlock the full potential of CodeKro</p>

            <div className="flex justify-center gap-4">
              <SignedIn>
                <UpgradeButton />
              </SignedIn>
              <SignedOut>
                <LoginButton />
              </SignedOut>
              {/* Home Button */}
              <button 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={() => router.push("/")}
              >
                Go to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
