import { ENDPOINT } from '@/constants/endpoint';
import ErrorService from '@/services/error.service';
import { HttpService } from '@/services/http.service';
import type { IReqCreateDonation } from '@/types/request/IReqCreateDonation';
import type { IResCreateDonation } from '@/types/response/IResCreateDonation';
import type { IResDetailUserDonation } from '@/types/response/IResDertailUserDonation';
import type { BaseResponse } from '@/types/response/IResModel';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';

export function usePublicDonationPage() {
  const httpService = new HttpService();
  const errorService = new ErrorService();
  const { username } = useParams();

  const listAmount = [5000, 10000, 15000, 20000, 50000, 100000];

  const initValue: IReqCreateDonation = {
    amount: 0,
    from: '',
    type: '',
    username: '',
    email: '',
    payment_type: '',
    message: '',
  };

  const validationSchema = yup.object().shape({
    amount: yup.number().min(1000).required(),
    email: yup.string().required(),
    from: yup.string().required(),
    message: yup.string().required().max(255),
    payment_type: yup.string().required(),
  });

  const mutationCreate = useMutation({
    mutationFn: (data: IReqCreateDonation) =>
      httpService
        .POST(ENDPOINT.CREATE_DONATION(), data)
        .then((res: BaseResponse<IResCreateDonation>) => {
          toast.success('Success Created');
          return res.data.response_data;
        })
        .catch((e) => {
          errorService.fetchApiError(e);
        }),
  });

  const formik = useFormik({
    initialValues: initValue,
    validationSchema: validationSchema,
    onSubmit: (e) => mutationCreate.mutate(e),
  });

  const queryUser = useQuery({
    queryKey: ['detail_user_public_donation_'],
    queryFn: () =>
      httpService
        .GET(ENDPOINT.DETAIL_USER_FOR_DONATION(username || ''))
        .then((res: BaseResponse<IResDetailUserDonation>) => {
          formik.setFieldValue('username', res.data.response_data.username);
          formik.setFieldValue('type', 'TEXT');
          return res.data.response_data;
        })
        .catch((e) => {
          errorService.fetchApiError(e);
        }),
  });

  const queryPaymentTypeList = useQuery({
    queryKey: ['list-payment-type-donation-public'],
    queryFn: () =>
      httpService
        .GET(ENDPOINT.PAYMENT_TYPE_LIST())
        .then((res: BaseResponse<string[]>) => {
          return res.data.response_data;
        })
        .catch((e) => {
          errorService.fetchApiError(e);
        }),
  });

  const dataListPayment = queryPaymentTypeList.data || [];
  return { queryUser, formik, listAmount, queryPaymentTypeList, dataListPayment, mutationCreate };
}
