import { type ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOCAL_STORAGE_KEY } from '@/constants/local-storage-key.ts';
import { HttpService } from '@/services/http.service.ts';
import type { IResGetMe } from '@/types/response/IResGetMe.ts';
import { ENDPOINT } from '@/constants/endpoint.ts';
import type { BaseResponse } from '@/types/response/IResModel.ts';
import type { IResSignIn } from '@/types/response/IResSignIn.ts';
import type { IReqSignIn } from '@/types/request/IReqSignIn.ts';
import { ROUTES } from '@/routes/routes.ts';
import { fetchApiError } from '@/services/error.service.ts';
import { AuthContext } from '@/context/auth.context.ts';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const rawUser = localStorage.getItem(LOCAL_STORAGE_KEY.USER);
  const getToken = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
  const getUser = rawUser ? JSON.parse(rawUser) : undefined;
  const [token, setToken] = useState<string | undefined>(getToken || undefined);
  const [user, setUser] = useState<IResGetMe | undefined>(getUser || undefined);
  const navigate = useNavigate();
  const httpService = new HttpService();

  function loginAction(data: IReqSignIn, setLoading: (loading: boolean) => void) {
    setLoading(true);
    httpService
      .POST(ENDPOINT.SIGN_IN(), data)
      .then((res: BaseResponse<IResSignIn>) => {
        setLoading(false);
        const resToken = res.data.response_data.access_token;
        const userData = res.data.response_data.user_data;
        setToken(resToken);
        setUser(userData);
        localStorage.setItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN, resToken);
        localStorage.setItem(LOCAL_STORAGE_KEY.USER, JSON.stringify(userData));
        navigate(ROUTES.DASHBOARD());
      })
      .catch((e) => {
        setLoading(false);
        fetchApiError(e);
      });
  }

  const logOut = () => {
    setToken(undefined);
    setUser(undefined);
    localStorage.clear();
    navigate(ROUTES.SIGN_IN());
  };

  return <AuthContext value={{ token, loginAction, logOut, user }}>{children}</AuthContext>;
};

export default AuthProvider;

export interface IAuthProviderProps {
  user?: IResGetMe;
  token?: string;
  loginAction: (data: IReqSignIn, setLoading: (data: boolean) => void) => void;
  logOut: () => void;
}
