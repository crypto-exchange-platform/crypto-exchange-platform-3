import type { FC } from "react";

export const Hero: FC = () => {
  return (
    <section className="text-white py-20 relative overflow-hidden bg-blue-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 z-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Trade Cryptocurrencies with{" "}
            <span className="text-yellow-400">Confidence</span>
          </h1>
          <p className="text-xl mb-8">
            Join the world’s most secure and user-friendly cryptocurrency
            exchange with ultra-low fees and lightning-fast transactions.
          </p>

          <div className="flex space-x-4 mb-6">
            <button className="px-6 py-3 bg-yellow-400 text-blue-900 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Get Started
            </button>
            <button className="px-6 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">
              Learn More
            </button>
          </div>

          <ul className="text-sm text-white/80 space-y-2">
            <li>✅ Regulated & Insured Exchange</li>
            <li>✅ 10M+ Traders Worldwide</li>
            <li>✅ 24/7 Live Support</li>
          </ul>
        </div>

        <div className="md:w-1/2 relative h-[400px] w-full z-0 flex items-center justify-center">
          <img
            src="/Bitcoin.png"
            alt="3D Bitcoin"
            className="w-auto h-98 animate-float"
          />
        </div>
      </div>
    </section>
  );
};
 