import React from 'react';

const Footer = () => (
  <footer className="container px-8 py-16 mx-auto mt-48 mb-8 text-gray-800">
    <div className="flex flex-wrap mt-12 text-left">
      <div className="flex-none w-full px-4 py-4 text-gray-600 sm:w-1/2 lg:w-1/4">
        <h2 className="text-lg uppercase font-display font">Headquarters</h2>
        <p className="mt-1">71-75 Shelton Street</p>
        <p className="mt-1">Covent Garden</p>
        <p className="mt-1">London</p>
        <p className="mt-1">WC2H 9JQ</p>
      </div>
      <div className="flex-none w-full px-4 py-4 text-gray-600 sm:w-1/2 lg:w-1/3">
        <h2 className="text-lg uppercase font-display font">NOCs</h2>
        <p className="mt-1">Toronto | Singapore | Wroclaw | Dubai | Mumbai</p>
      </div>
      <div className="flex-none w-full px-4 py-4 text-gray-600 sm:w-1/2 lg:w-1/4" />
      <div className="flex-none w-full px-4 py-4 text-gray-600 sm:w-1/2 lg:w-1/4" />
    </div>
  </footer>
);

export default Footer;
