import { ENDPOINT } from '@/constants/endpoint';
import ErrorService from '@/services/error.service';
import { HttpService } from '@/services/http.service';
import type { IResDetailOverlay } from '@/types/response/IResDetailOverlay';
import type { BaseResponse } from '@/types/response/IResModel';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export function usePublicOverlayPage() {
  const { id } = useParams();

  const httpService = new HttpService();
  const errorService = new ErrorService();
  const queryData = useQuery({
    queryKey: ['detail_user_overlay_public', id],
    enabled: !!id,
    queryFn: () => {
      return httpService
        .GET(ENDPOINT.DETAIL_PUBLIC_OVERLAY(id || ''))
        .then((res: BaseResponse<IResDetailOverlay>) => {
          return res.data.response_data;
        })
        .catch((e) => {
          errorService.fetchApiError(e);
        });
    },
  });

  const data = queryData.data;
  return { data };
}
