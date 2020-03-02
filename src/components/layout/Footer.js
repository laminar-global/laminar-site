import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-8 mt-48 mb-8 text-gray-800">
    <div className="flex flex-wrap mt-12 text-left">
      <div className="flex-none px-4 py-4 w-full sm:w-1/2 lg:w-1/4 text-gray-600">
        <h2 className="font-display uppercase font text-lg">London</h2>
        <p className="mt-6">
          Some Address in London
          Singapore 278245
        </p>
      </div>
      <div className="flex-none px-4 py-4 w-full sm:w-1/2 lg:w-1/4 text-gray-600">
        <h2 className="font-display uppercase font text-lg">Singapore</h2>
        <p className="mt-6">
          52 Jalan Kelabu Asap
          Singapore 278245
        </p>
      </div>
      <div className="flex-none px-4 py-4 w-full sm:w-1/2 lg:w-1/4 text-gray-600" />
      <div className="flex-none px-4 py-4 w-full sm:w-1/2 lg:w-1/4 text-gray-600">
        <h2 className="font-display uppercase font text-lg">Copyright</h2>
        <p className="mt-6">
          52 Jalan Kelabu Asap
          Singapore 278245
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
