import { type IResGetMe } from './IResGetMe.ts';

export interface IResSignIn {
  access_token: string;
  user_data: IResGetMe;
}
