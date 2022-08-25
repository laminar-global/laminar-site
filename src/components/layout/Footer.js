import React from 'react';

const Footer = () => (
  <footer className="container px-8 py-16 mx-auto mt-48 mb-8 text-gray-800">
    <h2 className="font-display uppercase font-semibold text-3xl lg:text-5xl">
      Get In Touch
    </h2>
    <p><a class="inline-block mt-4 text-xl lg:text-2xl mt-2 mx-auto w-full md:w-1/2" href="mailto:sales@lamin.ar">sales@lamin.ar</a></p>
    <div className="flex flex-wrap mt-12 text-left">
      <div className="flex-none w-full text-gray-600 sm:w-1/2 lg:w-1/4 lg:p-0">
        <h2 className="text-xl uppercase font-display font">HQ</h2>
        <p className="mt-1">Laminar Global Limited</p>
        <p className="mt-1">71-75 Shelton Street</p>
        <p className="mt-1">Covent Garden, London</p>
        <p className="mt-1 text-primary">United Kingdom</p>
      </div>
      <div className="flex-none w-full text-gray-600 sm:w-1/2 lg:w-1/4 md:p-0 pt-4">
        <h2 className="text-xl uppercase font-display font">Dev Centre</h2>
        <p className="mt-1">Laminar Global Poland</p>
        <p className="mt-1">św. Mikołaja 8-11</p>
        <p className="mt-1">50-125 Wrocław</p>
        <p className="mt-1 text-primary">Poland</p>
      </div>
      <div className="flex-none w-full text-gray-600 sm:w-1/2 lg:w-1/4 lg:p-0 pt-4">
        <h2 className="text-xl uppercase font-display font">Asia Sales</h2>
        <p className="mt-1">Laminar MediaTech Limited</p>
        <p className="mt-1">Level 7, Gate Village Building 10</p>
        <p className="mt-1">Dubai International Finance Centre</p>
        <p className="mt-1 text-primary">Dubai</p>
      </div>
      {/* <div className="flex-none w-full px-4 py-4 text-gray-600 sm:w-1/2 lg:w-1/3">
        <h2 className="text-lg uppercase font-display font">NOCs</h2>
        <p className="mt-1">Toronto | Singapore | Wroclaw | Dubai | Mumbai</p>
      </div>
      <div className="flex-none w-full px-4 py-4 text-gray-600 sm:w-1/2 lg:w-1/4" />
      <div className="flex-none w-full px-4 py-4 text-gray-600 sm:w-1/2 lg:w-1/4" /> */}
    </div>
  </footer>
);

export default Footer;
