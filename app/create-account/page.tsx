import FormButton from '@/components/form-button';
import FormInput from '@/components/form-input';
import SocialLoginButton from '@/components/social-login-button';
import React from 'react';

function CreateAccount() {
  const handleFormSubmit = async (formData: FormData) => {
    'use server';
    console.log(formData.get('username'));
  };

  return (
    <div>
      <form action={handleFormSubmit}>
        <FormInput
          name="username"
          type="text"
          placeholder="아이디"
          required
          errors={[]}
        />
        <FormInput
          name="email"
          type="email"
          placeholder="이메일"
          required
          errors={[]}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="비번"
          required
          errors={[]}
        />
        <FormButton loading={false} text="계정 생성" />
      </form>
      <SocialLoginButton />
    </div>
  );
}

export default CreateAccount;
