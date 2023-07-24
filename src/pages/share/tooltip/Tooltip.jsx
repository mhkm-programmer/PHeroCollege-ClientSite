import React from 'react';

const Tooltip = ({text, children}) => {
    return (
        <div className="relative inline-block">
        <div className="hidden group-hover:block absolute z-10 bg-black text-white text-xs px-2 py-1 rounded">
          {text}
        </div>
        {children}
      </div>
    );
};

export default Tooltip;