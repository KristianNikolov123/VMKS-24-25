import React from 'react';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto text-center py-16 px-4">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          Welcome to My React & Django Project
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore the app by navigating through the navbar options.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Home;
