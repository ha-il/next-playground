'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';

interface FormButtonProps {
  text: string;
}

function FormButton({ text }: FormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-gray-200 p-4 border-2 w-full rounded-full"
      disabled={pending}
    >
      {pending ? 'Loading...' : text}
    </button>
  );
}

export default FormButton;
