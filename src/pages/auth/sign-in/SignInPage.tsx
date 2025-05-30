import { useSignInPage } from '@/pages/auth/sign-in/useSIgnInPage.ts';
import { FormikProvider } from 'formik';
import InputText from '@/components/InputText.tsx';
import { MdEmail, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Button } from '@/components/ui/button.tsx';
import { ENV } from '@/constants/env.ts';
import BrandLogo from '@/components/BrandLogo.tsx';
import { ASSETS } from '@/constants/assets.ts';

export default function SignInPage() {
  const page = useSignInPage();
  return (
    <div className={'flex w-full'}>
      <div
        className={'min-h-screen bg-neutral-200 dark:bg-sidebar  w-1/3 bg-cover'}
        style={{
          backgroundImage: `url(${ASSETS.IMG_LOGIN})`,
        }}
      ></div>
      <div className={'flex-1 flex items-center justify-center'}>
        <div>
          <BrandLogo />
          <h3>Hallo, selamat datang</h3>
          <p>Silahkan masuk terlebih dahulu untuk mengakses dashboard</p>
          <FormikProvider value={page.formik}>
            <div className={'grid gap-4 my-8'}>
              <InputText
                onEnter={() => page.formik.handleSubmit()}
                endIcon={<MdEmail />}
                name={'email'}
                id={'email'}
                required={true}
                placeholder={'Masukan email'}
                label={'Email'}
              />
              <InputText
                onEnter={() => page.formik.handleSubmit()}
                endIcon={
                  <span
                    onClick={() => page.setShowPassword((e) => !e)}
                    className={'cursor-pointer hover:text-gray-800'}
                  >
                    {page.showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                  </span>
                }
                type={page.showPassword ? 'text' : 'password'}
                name={'password'}
                id={'password'}
                required={true}
                placeholder={'Masukan Kata sandi'}
                label={'Kata sandi'}
              />
              <Button loading={page.loading} className={'uppercase'} onClick={() => page.formik.handleSubmit()}>
                Masuk
              </Button>
            </div>
          </FormikProvider>
          <div className={'text-xs text-primary/60'}>V {ENV.VERSION}</div>
        </div>
      </div>
    </div>
  );
}
