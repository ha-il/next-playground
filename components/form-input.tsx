import React from 'react';

interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  errors: string[];
  name: string;
}

function FormInput({
  type,
  placeholder,
  required,
  errors,
  name,
}: FormInputProps) {
  return (
    <div className="mb-4">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className={`p-4 border-2 bg-white ${
          errors.length > 0 ? 'border-red-400' : 'border-gray-200'
        }  rounded-full focus:ring-2 ring-gray-300 ring-offset-1 outline-none`}
      />
      {errors.map((error, index) => (
        <div className="text-red-400 mt-2" key={index}>
          {error}
        </div>
      ))}
    </div>
  );
}

export default FormInput;
