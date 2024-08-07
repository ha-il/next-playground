'use server';
import { z } from 'zod';

const emailRegex = new RegExp(/@zod\.com$/);
const passwordRegex = new RegExp(/\d/);

const formSchema = z.object({
  username: z.string().min(5, '유저명은 5 글자 이상이어야 합니다.').trim(),
  email: z
    .string()
    .email('유효한 이메일 주소여야 합니다.')
    .regex(emailRegex, '이메일은 @zod.com 도메인만 허용됩니다.'),
  password: z
    .string()
    .min(10, '비밀번호는 10 글자 이상이어야 합니다.')
    .regex(
      passwordRegex,
      '비밀번호는 반드시 1개 이상의 숫자를 포함해야 합니다.'
    )
    .trim(),
});

export async function handleFormSubmit(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const data = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error.flatten());

    return result.error.flatten();
  } else return { success: result.success };
}
