import { useFormik } from 'formik';
import type { IReqSignIn } from '@/types/request/IReqSignIn.ts';
import * as yup from 'yup';
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth.ts';

export function useSignInPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const auth = useAuth();

  const initState: IReqSignIn = {
    email: '',
    password: '',
  };
  const validationSchema = yup.object().shape({
    email: yup.string().required('Email is required').email(),
    password: yup.string().required(),
  });
  const formik = useFormik({
    initialValues: initState,
    validationSchema: validationSchema,
    onSubmit: (e) => auth.loginAction(e, setLoading),
  });
  return { formik, showPassword, setShowPassword, loading };
}
