import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { HttpService } from '@/services/http.service.ts';
import ErrorService from '@/services/error.service.ts';
import { ENDPOINT } from '@/constants/endpoint.ts';
import type { BaseResponse } from '@/types/response/IResModel.ts';
import type { IResDetailOverlay } from '@/types/response/IResDetailOverlay.ts';
import type { IReqSettingOverlay } from '@/types/request/IReqSettingOverlay';
import { useFormik } from 'formik';

export function useFormOverlay() {
  const { id } = useParams();

  const httpService = new HttpService();
  const errorService = new ErrorService();

  const initValue: IReqSettingOverlay = {
    backround_color: '#929191',
    hightligh_color: '#a61398',
    text_color: '#000',
  };

  const formik = useFormik({
    initialValues: initValue,
    onSubmit: (e) => alert(JSON.stringify(e)),
  });

  const queryData = useQuery({
    queryKey: ['detail_user_overlay', id],
    enabled: !!id,
    queryFn: () => {
      return httpService
        .GET(ENDPOINT.DETAIL_USER_OVERLAY(id || ''))
        .then((res: BaseResponse<IResDetailOverlay>) => {
          return res.data.response_data;
        })
        .catch((e) => {
          errorService.fetchApiError(e);
        });
    },
  });

  return { queryData, formik };
}
