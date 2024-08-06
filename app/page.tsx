'use client';

import FormButton from '@/components/form-button';
import FormInput from '@/components/form-input';
import React from 'react';
import { useFormState } from 'react-dom';
import { handleFormSubmit } from './actions';
import FireIcon from '@/components/fire-icon';
import SuceesMessage from '@/components/sucees-message';

export default function Home() {
  const [state, formAction] = useFormState(handleFormSubmit, {} as any);
  console.log(state);

  return (
    <div className="h-screen gap-4 flex flex-col items-center justify-center">
      <FireIcon />
      <form action={formAction}>
        <FormInput
          name="email"
          type="email"
          placeholder="이메일"
          required
          errors={[]}
        />
        <FormInput
          name="username"
          type="text"
          placeholder="아이디"
          required
          errors={[]}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="비밀번호"
          required
          errors={state?.errors ?? []}
        />
        <FormButton text="Log in" />
        {state?.result && <SuceesMessage />}
      </form>
    </div>
  );
}
