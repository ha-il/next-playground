import React from 'react';

interface FormButtonProps {
  loading: boolean;
  text: string;
}

function FormButton({ loading, text }: FormButtonProps) {
  return <button disabled={loading}>{loading ? '로딩중...' : text}</button>;
}

export default FormButton;
