import React from 'react';

const Home = () => {
  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Welcome to My React & Django Project
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          This is the homepage. Explore the app by navigating through the navbar options.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="inline-block bg-blue-600 text-white text-lg font-medium py-3 px-6 rounded-full hover:bg-blue-500 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
