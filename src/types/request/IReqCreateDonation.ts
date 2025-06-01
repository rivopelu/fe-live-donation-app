export interface IReqCreateDonation {
  from: string;
  message: string;
  email: string;
  amount: number;
  username: string;
  payment_type: string;
  type: string;
}
