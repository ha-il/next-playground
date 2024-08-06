'use server';

import { redirect } from 'next/navigation';

// interface FormData {
//   username: string;
//   email: string;
//   password: string;
// }

export async function handleFormSubmit(prevState: any, formData: FormData) {
  console.log(formData);
  const password = formData.get('password');
  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (password !== '12345')
    return {
      errors: ['wrong password'],
    };
  else
    return {
      result: 200,
    };
}
