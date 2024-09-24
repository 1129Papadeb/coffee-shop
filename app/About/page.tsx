import Footer from '@/components/Footer';
import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-[#f5e9e2] text-gray-800">
      {/* Top Banner Section with Text Overlay */}
      <div className="relative overflow-hidden">
        <Image
          src="/images/Coffee Beans.jpg"
          alt="Top Banner Image"
          layout="responsive"
          width={1200}
          height={450}
          className="object-cover w-full h-[450px] brightness-90"
        />
        
        {/* Text Overlay */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
          <h1 className="text-6xl font-extrabold">
            <span className="text-white">Damuhal&apos;s </span>
            <span className="text-yellow-400">Café</span>
          </h1>
        </div>
      </div>

      {/* About Us Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-extrabold text-[#6b4e3d] mb-4">About Us</h1>
        <p className="text-lg max-w-3xl mx-auto mb-4 text-gray-700 px-4">
          Welcome to &apos;Damuhal&apos;s Café&apos;. Located in the heart of Iloilo City, we are a specialty coffee shop dedicated to showcasing the rich and diverse coffee flavors the Philippines has to offer.
        </p>
        <p className="text-lg max-w-3xl mx-auto text-gray-700 px-4">
          Join us on a journey of taste and discovery as we explore the vibrant coffee culture of the Philippines. From classic blends to single-origin beans, our menu offers something for every palate.
        </p>
      </section>

      {/* Coffee Experience Section */}
      <section className="flex flex-col md:flex-row items-center justify-center py-12 space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/images/DiverseBeans.jpg"
            alt="Diverse Beans"
            layout="responsive"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 text-left px-4">
          <h2 className="text-3xl font-bold text-[#6b4e3d] mb-4">Experience the Philippines in Every Cup</h2>
          <p className="text-lg text-gray-700 mb-4">
            At Damuhal&apos;s Cafe, we guarantee a taste of the richness of our locally sourced coffee, from high-caffeine robusta beans to the sweeter, zesty arabica beans. You are sure to taste the bliss of the Philippines in every cup.
          </p>
        </div>
      </section>

      {/* Support Farmers Section */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-center py-12 space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/images/Parmer.jpg"
            alt="Farmer"
            layout="responsive"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 text-left px-4">
          <h2 className="text-3xl font-bold text-[#6b4e3d] mb-4">Brewing a Better Future</h2>
          <p className="text-lg text-gray-700 mb-4">
            Here at Damuhal&apos;s Café, we are dedicated to supporting the coffee farmers of the Philippines. Our partnerships foster fair trade and promote the rich flavors of Filipino coffee.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12">
        <h2 className="text-center text-3xl font-bold text-[#6b4e3d] mb-8">The Team Behind it All</h2>
        <div className="flex flex-wrap justify-center">
          {[
            { name: 'Regino Balogo Jr.', image: '/images/Reg.jpg', role: 'Front-end Developer' },
            { name: 'Lemmuel Dave Dañosos', image: '/images/Deyb.jpg', role: 'Front-end Developer' },
            { name: 'Rhazel Jay Gumacal', image: '/images/Rhaz.jpg', role: 'Leader / Front-end Developer' },
            { name: 'Christian Angelo Panique', image: '/images/Tian.jpg', role: 'Front-end Developer' },
            { name: 'Ethan Gabriel Soncio', image: '/images/Ethan.JPG', role: 'Front-end Developer' },
          ].map((member) => (
            <div key={member.name} className="text-center p-4">
              <div className="overflow-hidden rounded-full w-48 h-48 mx-auto shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-lg font-semibold text-[#6b4e3d]">{member.name}</p>
              <p className="text-sm font-semibold text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
