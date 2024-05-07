'use client'
import React from 'react';

const Dialogue = ({children, isOpen, onClose, onConfirm, confirmParam }) => {
  
  return (
    isOpen && (
      <div className="dialogue">
        {children}
        <button onClick={() => onConfirm(confirmParam)}>Apply</button>
        <button onClick={onClose}>Close</button>
      </div>
    )
  );
};

export default Dialogue;