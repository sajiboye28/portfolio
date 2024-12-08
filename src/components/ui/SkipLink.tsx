import React from 'react';
import { SkipLinkProps } from '../../types';

const SkipLink = ({ href, children }: SkipLinkProps) => {
  return (
    <a 
      href={href} 
      className="skip-link fixed top-4 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-md transition-transform duration-300 transform -translate-y-full focus:translate-y-0"
    >
      {children}
    </a>
  );
};

export default SkipLink;
