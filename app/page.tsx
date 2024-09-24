'use client';

import FavoriteProducts from '@/components/FavoriteProducts';
import FloatingOrderButton from '@/components/FloatingOrderButton';
import Footer from '@/components/Footer';
import ReviewGrid from '@/components/ReviewGrid';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Home() {
  return (
    <div className="h-screen flex flex-col overflow-x-hidden bg-cover bg-center bg-[url('/images/Background.jpg')]">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-8 pt-12">
        {/* Left Section: Text */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.1 }} // Added delay for staggered effect
          className="w-full md:w-1/2 text-left space-y-6"
        >
          <motion.h1
            className="text-5xl font-extrabold text-[#6b4e3d]"
            initial={{ opacity: 0, y: -20 }} // Start with a slide down effect
            whileInView={{ opacity: 1, y: 0 }} // Move to original position
            transition={{ duration: 0.5, delay: 0.2 }} // Slight delay
          >
            Welcome to Our Coffee Shop!
          </motion.h1>
          <motion.p
            className="text-lg text-[#8d6e5a]"
            initial={{ opacity: 0, y: 20 }} // Start with a slight upward slide
            whileInView={{ opacity: 1, y: 0 }} // Move to original position
            transition={{ duration: 0.5, delay: 0.3 }} // Slight delay
          >
            Indulge in the finest iced coffee made with passion. We serve the best blends, carefully brewed to perfection.
          </motion.p>
          <motion.button
            onClick={() => window.location.href = '/About'}
            className="bg-brown-600 hover:bg-brown-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
            initial={{ opacity: 0 }} // Start invisible
            whileInView={{ opacity: 1 }} // Fade in
            transition={{ duration: 0.5, delay: 0.4 }} // Delay for button
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Right Section: Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }} // Added delay for staggered effect
          className="hidden md:block w-full md:w-1/2 pl-8 mt-12 mb-20"
        >
          <Image
            src="/images/Display.png"
            alt="Iced Coffee"
            className="rounded-xl object-cover"
            width={800}
            height={800}
            priority={true}
          />
        </motion.div>
      </main>

      {/* Favorite Products Section */}

        <FavoriteProducts />
        <ReviewGrid />
        <Footer />
      <FloatingOrderButton />
    </div>
  );
}

export default Home;
