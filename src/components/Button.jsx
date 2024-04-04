import React from 'react';
import { Spinner } from 'flowbite-react';
const Button = ({ textContent, onClick, type, isLoading }) => {
  return (
    <button
      type={type}
      className={`w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
<Spinner aria-label="Spinner button" size="sm" />
        </>
      ) : (
        textContent
      )}
    </button>
  );
};

export default Button;