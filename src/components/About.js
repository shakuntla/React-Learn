import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">About Food Zone</h1>
          <p className="mt-4 text-lg text-gray-600">
            At Food Zone, we believe in delivering delicious and healthy food to our customers, while ensuring quality and excellence in every bite.
          </p>
        </div>
        
        {/* Team Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="./image/ceo.avif"
              alt="CEO"
              className="w-full h-48 object-cover rounded-md mb-6"
            />
            <h2 className="text-xl font-semibold text-gray-800">shivani Tyagi</h2>
            <p className="text-gray-600">Founder & CEO</p>
            <p className="mt-4 text-gray-500">
              Shivani founded Food Zone with the vision of making healthy, tasty food accessible to everyone.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="./image/chef.avif"
              alt="Chef"
              className="w-full h-48 object-cover rounded-md mb-6"
            />
            <h2 className="text-xl font-semibold text-gray-800">Jane Smith</h2>
            <p className="text-gray-600">Head Chef</p>
            <p className="mt-4 text-gray-500">
              Jane ensures that every meal is crafted with the finest ingredients and utmost care.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="./image/manager.avif"
              alt="Marketing Manager"
              className="w-full h-48 object-cover rounded-md mb-6"
            />
            <h2 className="text-xl font-semibold text-gray-800">Tom Johnson</h2>
            <p className="text-gray-600">Marketing Manager</p>
            <p className="mt-4 text-gray-500">
              Tom brings the passion and story of Food Zone to the world, connecting with customers through creative campaigns.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-600">
            At Food Zone, we are committed to providing high-quality, nutritious, and delicious meals. We aim to revolutionize the way people experience food by combining convenience with outstanding taste.
          </p>
          <img
            src="./image/mgmts.avif"
            alt="Mission"
            className="w-full h-64 object-cover rounded-lg mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
