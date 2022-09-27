import React from 'react';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="font-sans top-0 bg-white">
    {/* <a className="product-hunt-badge md:absolute md:bottom-0 md:right-0 md:m-4" href="https://www.producthunt.com/posts/laminar?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-laminar" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=361138&theme=light" alt="Laminar - Zero&#0032;Turbulence&#0032;Video&#0032;Streaming&#0032;PaaS | Product Hunt" width="250" height="54" /></a> */}
    <div className="container mx-auto px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center py-4">
        <div className="flex items-center text-2xl">
          <LogoIcon />
        </div>
        <div className="hidden md:block">
          <Button className="text-sm" href="#contact">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
