import React from 'react';
import AnnouncementBanner from '../AnnouncementBanner';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="font-sans top-0 bg-white">
    <AnnouncementBanner />
    <div className="container mx-auto px-8">
      <div className="flex flex-col sm:flex-row justify-center items-center py-4">
        <div className="flex items-center text-2xl">
          <LogoIcon />
        </div>
        {/* <div className="hidden md:block">
          <Button className="text-sm" href="#contact">
            Get Started
          </Button>
        </div> */}
      </div>
    </div>
  </header>
);

export default Header;
