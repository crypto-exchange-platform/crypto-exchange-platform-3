import type { FC } from "react";

interface CtaSectionProps {
  onSignup: () => void;
}

export const CtaSection: FC<CtaSectionProps> = ({ onSignup }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">Ready to Start Trading?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-300">
          Join millions of users trading on CryptoXchange. Create your account in minutes and get started today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={onSignup}
            className="px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Sign Up Now
          </button>
          <button
            className="px-8 py-4 border-2 border-blue-600 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition text-blue-600"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};
 