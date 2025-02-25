import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-full bg-transparent rounded-xl">
      <div className="container mx-auto relative md:px-0 px-4 md:my-10 rounded-xl overflow-hidden">
        {/* Nav */}
        <nav className="shadow-lg w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a
                  href="#"
                  className="lg:text-xl md:text-lg text-base font-bold text-gray-700 capitalize"
                >
                  {/* {"DShine".split("" ).map((char, index) => (
                    <span
                      key={index}
                      className="px-1 bg-green-400 dark:bg-green-600 rounded-full"
                      style={{ animation: `ping ${1.9 + index * 0.1}s linear infinite` }}
                    >
                      {char}
                    </span>
                  ))} */}
                  DShine
                </a>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8 text-gray-400 dark:text-gray-700">
                <a href="#about" className="hover:scale-105 transition-all text-green-400 dark:text-green-600">
                  Accueil
                </a>
                <a
                  href="#what-i-do"
                  className="hover:scale-105 transition-all hover:text-green-400 dark:hover:text-green-600"
                >
                  Apropos
                </a>
                <a
                  href="#testimonials"
                  className="hover:scale-105 transition-all hover:text-green-400 dark:hover:text-green-600"
                >
                  Produits
                </a>
                <a
                  href="#clients"
                  className="hover:scale-105 transition-all hover:text-green-400 dark:hover:text-green-600"
                >
                  Gallerie
                </a>
                <a
                  href="#fun-facts"
                  className="hover:scale-105 transition-all hover:text-green-400 dark:hover:text-green-600"
                >
                  Liens
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="text-green-400 dark:text-green-600 hover:text-green-600 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div key="modal" exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-[#111111] dark:bg-white bg-opacity-50 z-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="fixed inset-y-0 left-0 bg-[#111111] dark:bg-white w-64 p-6 transform transition-transform">
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-green-400 dark:text-green-600 hover:text-green-600 focus:outline-none mb-4"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <nav className="space-y-4 text-gray-400 dark:text-gray-700">
                      <a
                        href="#about"
                        className="block text-green-400 dark:text-green-600"
                      >
                        Accueil
                      </a>
                      <a
                        href="#what-i-do"
                        className="block hover:text-green-400 dark:hover:text-green-600"
                      >
                        Apropos
                      </a>
                      <a
                        href="#testimonials"
                        className="block hover:text-green-400 dark:hover:text-green-600"
                      >
                        Produits
                      </a>
                      <a
                        href="#clients"
                        className="block hover:text-green-400 dark:hover:text-green-600"
                      >
                        Galérie
                      </a>
                      <a
                        href="#fun-facts"
                        className="block hover:text-green-400 dark:hover:text-green-600"
                      >
                        Liens
                      </a>
                    </nav>
                  </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </div>
  );
}
