import type { FC } from "react";
import { useState } from "react";

interface HeaderProps {
  onLogin: () => void;
  onSignup: () => void;
}

export const Header: FC<HeaderProps> = ({ onLogin, onSignup }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
  };

  return (
    <header className="text-white sticky top-0 z-50 shadow-lg bg-blue-900">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <i className="fab fa-bitcoin text-3xl text-yellow-400"></i>
            <h1 className="text-2xl font-bold">
              Crypto<span className="text-yellow-400">Xchange</span>
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#markets" className="hover:text-yellow-400 transition">Markets</a>
            <a href="#features" className="hover:text-yellow-400 transition">Features</a>

            <a href="#testimonials" className="hover:text-yellow-400 transition">Testimonials</a>

            <a href="#cta" className="hover:text-yellow-400 transition">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={onLogin}
              className="px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
            <button
              onClick={onSignup}
              className="px-4 py-2 bg-yellow-400 text-blue-900 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Sign Up
            </button>
            <button className="md:hidden" onClick={toggleMobileMenu}>
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>

        {isMobileOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#features" className="hover:text-yellow-400 transition">Features</a>
              <a href="#markets" className="hover:text-yellow-400 transition">Markets</a>
              <a href="#about" className="hover:text-yellow-400 transition">About</a>
              <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
 