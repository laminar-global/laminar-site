import React from 'react';
import DismissIcon from '../svg/DismissIcon';

const DismissButton = (props) => (
    <button
        type="button"
        className="-mr-1 flex p-2 rounded-md hover:bg-primary-darker focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2 transition-all duration-200"
        onClick={() => props.dismissBanner(true)}
    >
        <span className="sr-only">Dismiss</span>
        <DismissIcon />
    </button>
);
  
export default DismissButton;