import Footer from '@/components/Footer';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaTwitter } from 'react-icons/fa'; // Added phone icon

const ContactUs = () => {
  return (
    <div className='pb-8'>
        <div className="min-h-screen bg-cover bg-center bg-[url('/images/Background.jpg')] px-6 py-12 flex flex-col items-center justify-center mt-12">
      
      {/* Centered Title */}
      <h1 className="text-4xl font-bold text-[#6b4e3d] mb-4 text-center">Get in Touch</h1>
      <p className="text-lg text-[#8d6e5a] text-center mb-8 max-w-md">
        We’d love to hear from you! Whether you have questions or just want to say hi.
      </p>

      {/* Container for Form and Map */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-3/4 gap-8 mb-12">
        
        {/* Contact Form */}
        <form className="md:w-1/2 w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <div className="mb-6">
            <label htmlFor="name" className="block text-[#6b4e3d] mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#6b4e3d]" 
              placeholder="Your name" 
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-[#6b4e3d] mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#6b4e3d]" 
              placeholder="Your email" 
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-[#6b4e3d] mb-2">Message</label>
            <textarea 
              id="message" 
              rows={4} 
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#6b4e3d]" 
              placeholder="Write your message"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#6b4e3d] text-white py-2 rounded hover:bg-[#5d4037] transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Google Map */}
        <div className="md:w-1/2 w-full h-96 rounded-lg shadow-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508791!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064aa1c5c93%3A0x8b58b59e68ba223e!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sph!4v1692732812345!5m2!1sen!2sph"
            allowFullScreen={true}
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </div>

      {/* Centered Social Media Links */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#6b4e3d] mb-2">Follow Us</h2>
        <p className="text-[#8d6e5a] mb-4">Stay connected with us on social media:</p>
        <div className="flex justify-center gap-6">
          <a href="https://www.facebook.com/YourIcedCoffeeBrand" target="_blank" className="text-[#6b4e3d] hover:text-gray-700 flex items-center">
            <FaFacebookF className="mr-2" /> Facebook
          </a>
          <a href="https://www.instagram.com/YourIcedCoffeeBrand" target="_blank" className="text-[#6b4e3d] hover:text-gray-700 flex items-center">
            <FaInstagram className="mr-2" /> Instagram
          </a>
          <a href="https://twitter.com/YourIcedCoffeeBrand" target="_blank" className="text-[#6b4e3d] hover:text-gray-700 flex items-center">
            <FaTwitter className="mr-2" /> Twitter
          </a>
        </div>

        {/* Phone Number */}
        <div className="mt-8">
          <p className="text-lg text-[#8d6e5a] mb-2">Or give us a call at:</p>
          <div className="flex justify-center items-center text-[#6b4e3d]">
            <FaPhoneAlt className="mr-2" />
            <span className="font-semibold">+63 (123) 456-7890</span>
          </div>
        </div>
      </div>

    </div>
    <Footer/>
    </div>
  );
};

export default ContactUs;
