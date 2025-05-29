import { useAuth } from '@/hooks/useAuth.ts';
import axios from 'axios';
import toast from 'react-hot-toast';

export function fetchApiError(error: any) {
  const auth = useAuth();
  if (error?.response?.status === 401) {
    auth.logOut();
  } else {
    let message;
    if (axios.isAxiosError(error) && error.response) {
      message = error?.response?.data?.message ? error?.response?.data?.message : 'Terjadi Kesalahan Pada Sistem';
    } else message = String(error);
    return toast.error(message);
  }
}
