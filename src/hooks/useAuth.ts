import { useContext } from 'react';
import { AuthContext } from '@/context/auth.context.ts';

export const useAuth = () => {
  return useContext(AuthContext);
};
