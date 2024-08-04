import Link from 'next/link';
import React from 'react';

function SocialLoginButton() {
  return (
    <>
      <div>
        <Link href="/kakao/login">카카오 로그인?</Link>
      </div>
    </>
  );
}

export default SocialLoginButton;
