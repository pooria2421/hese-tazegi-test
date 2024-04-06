import React, { useEffect } from 'react';

type DialogProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Dialog: React.FC<DialogProps> = ({ open, onClose, children }) => {
  return (
    <>
      {open ? (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
          <div className={`relative z-20 p-8 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center w-full md:w-1/3 sm:w-2/3 xs:2/2 lg:w-90 m-2 ${open ? 'animate__animated animate__fadeInDown' : 'animate__animated animate__fadeInOut'}`}>
            {children}
            <button className="mt-4 py-2 px-4 bg-red-500 text-white rounded" onClick={onClose}>Close</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Dialog;