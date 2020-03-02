import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size, ...props }) => {
  return (
    <AnchorLink
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        font-display
        uppercase
        bg-primary
        hover:bg-primary-darker
        rounded
        text-white
        hover:text-white
      `}
      {...props}
    >
      {children}
    </AnchorLink>
  );
};

export default Button;
