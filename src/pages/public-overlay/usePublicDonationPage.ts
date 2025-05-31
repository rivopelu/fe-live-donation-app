import { ENDPOINT } from '@/constants/endpoint';
import ErrorService from '@/services/error.service';
import { HttpService } from '@/services/http.service';
import type { IReqCreateDonation } from '@/types/request/IReqCreateDonation';
import type { IResDetailUserDonation } from '@/types/response/IResDertailUserDonation';
import type { BaseResponse } from '@/types/response/IResModel';
import { useQuery } from '@tanstack/react-query';
import { useFormik } from 'formik';
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
    email: '',
    message: '',
  };

  const validationSchema = yup.object().shape({
    amount: yup.number().min(1000).required(),
    email: yup.string().required(),
    from: yup.string().required(),
    message: yup.string().required().max(255),
  });

  const formik = useFormik({
    initialValues: initValue,
    validationSchema: validationSchema,
    onSubmit: (e) => alert(JSON.stringify(e)),
  });

  const queryUser = useQuery({
    queryKey: ['detail_user_public_donation_'],
    queryFn: () =>
      httpService
        .GET(ENDPOINT.DETAIL_USER_FOR_DONATION(username || ''))
        .then((res: BaseResponse<IResDetailUserDonation>) => {
          return res.data.response_data;
        })
        .catch((e) => {
          errorService.fetchApiError(e);
        }),
  });

  return { queryUser, formik, listAmount };
}
