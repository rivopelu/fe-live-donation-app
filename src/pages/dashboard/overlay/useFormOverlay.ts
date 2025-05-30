import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { HttpService } from '@/services/http.service.ts';
import ErrorService from '@/services/error.service.ts';
import { ENDPOINT } from '@/constants/endpoint.ts';
import type { BaseResponse } from '@/types/response/IResModel.ts';
import type { IResDetailOverlay } from '@/types/response/IResDetailOverlay.ts';
import type { IReqSettingOverlay } from '@/types/request/IReqSettingOverlay';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';

export function useFormOverlay() {
  const { id } = useParams();

  const httpService = new HttpService();
  const errorService = new ErrorService();

  const defaultColor = {
    backround: '#929191',
    highlight: '#a61398',
    text_color: '#000',
  };

  const initValue: IReqSettingOverlay = {
    background_color: '#929191',
    highlight_color: '#a61398',
    text: '',
    type: '',
    text_color: '#000',
  };

  const mutationEdit = useMutation({
    mutationFn: (e: IReqSettingOverlay) => {
      return httpService
        .PUT(ENDPOINT.EDIT_OVERLAY(id || ''), e)
        .then(() => {
          toast.success('Overlay berhasil di update');
        })
        .catch((e) => {
          errorService.fetchApiError(e);
        });
    },
  });

  const formik = useFormik({
    initialValues: initValue,
    onSubmit: (e) => mutationEdit.mutate(e),
  });

  const queryData = useQuery({
    queryKey: ['detail_user_overlay', id],
    enabled: !!id,
    queryFn: () => {
      return httpService
        .GET(ENDPOINT.DETAIL_USER_OVERLAY(id || ''))
        .then((res: BaseResponse<IResDetailOverlay>) => {
          const data = res.data.response_data;
          formik.setValues({
            background_color: data?.background_color || defaultColor.backround,
            highlight_color: data?.highlight_color || defaultColor.highlight,
            text: data?.text || '',
            type: data?.type || '',
            text_color: data.text_color || defaultColor.text_color,
          });
          return res.data.response_data;
        })
        .catch((e) => {
          errorService.fetchApiError(e);
        });
    },
  });

  return { queryData, formik, mutationEdit };
}
