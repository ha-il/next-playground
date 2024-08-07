'use client';

import React from 'react';
import { useFormState } from 'react-dom';
import { handleFormSubmit } from './actions';
import Button from '@/components/button';
import Input from '@/components/input';
import FireIcon from '@/components/fire-icon';
import SuceesMessage from '@/components/sucees-message';

export default function Home() {
  const [state, formAction] = useFormState(handleFormSubmit, {} as any);

  return (
    <div className="h-screen gap-4 flex flex-col items-center justify-center">
      <FireIcon />
      <form action={formAction} className="min-w-96">
        <Input
          name="email"
          type="email"
          placeholder="이메일"
          required
          errors={state?.fieldErrors?.email}
        />
        <Input
          name="username"
          type="text"
          placeholder="아이디"
          required
          errors={state?.fieldErrors?.username}
        />
        <Input
          name="password"
          type="password"
          placeholder="비밀번호"
          required
          errors={state?.fieldErrors?.password}
        />
        <Button text="Log in" />
        {state.success && <SuceesMessage />}
      </form>
    </div>
  );
}
