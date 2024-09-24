import { motion } from 'framer-motion'; // Importing motion from Framer Motion
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const reviews = [
  { name: "Jane Doe", text: "Great coffee and friendly staff!", rating: 5, imageUrl: "/review/mark.jpg" },
  { name: "John Smith", text: "Love the caramel iced latte. Will be back!", rating: 4, imageUrl: "/review/mark.jpg" },
  { name: "Alice Johnson", text: "The best mocha I've ever had!", rating: 5, imageUrl: "/review/mark.jpg" },
  { name: "Bob Brown", text: "Good ambiance and excellent service.", rating: 4, imageUrl: "/review/mark.jpg" },
  { name: "Bob Brown", text: "Good ambiance and excellent service.", rating: 4, imageUrl: "/review/mark.jpg" },
  { name: "Bob Brown", text: "Good ambiance and excellent service.", rating: 4, imageUrl: "/review/mark.jpg" },
];

export default function ReviewGrid() {
  return (
    <section className="py-12 bg-gradient-to-b from-[#f5e9e2] to-[#d1c4b7]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#6b4e3d] mb-8 text-center">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 flex items-center hover:shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }} // Initial state for animation
              whileInView={{ scale: 1, opacity: 1 }} // Final state when in view
              transition={{ duration: 0.5, delay: index * 0.1 }} // Transition effect
              viewport={{ once: true }} // Animation occurs only once
            >
              <Image
                src={review.imageUrl}
                alt={`${review.name}'s photo`}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-[#6b4e3d]">{review.name}</h3>
                <p className="text-[#8d6e5a] mb-2">{review.text}</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`text-yellow-500 ${i < review.rating ? '' : 'text-gray-300'}`} />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({review.rating})</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
