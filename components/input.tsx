import React, { InputHTMLAttributes } from 'react';

interface InputProps {
  errors?: string[];
  name: string;
}

function Input({
  errors = [],
  name,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="mb-4">
      <input
        name={name}
        className={`w-full p-4 border-2 bg-white ${
          errors.length > 0
            ? 'border-red-400 ring-red-300'
            : 'border-gray-200 ring-gray-300'
        }  rounded-full focus:ring-2  ring-offset-1 outline-none`}
        {...rest}
      />
      {errors.map((error, index) => (
        <div className="text-red-400 mt-2" key={index}>
          {error}
        </div>
      ))}
    </div>
  );
}

export default Input;
