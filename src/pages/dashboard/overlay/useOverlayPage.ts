import { HttpService } from '@/services/http.service.ts';
import ErrorService from '@/services/error.service.ts';
import { useQuery } from '@tanstack/react-query';
import { ENDPOINT } from '@/constants/endpoint.ts';
import type { BaseResponse } from '@/types/response/IResModel.ts';
import type { IResListOverlay } from '@/types/response/IResListOverlay.ts';

export function useOverlayPage() {
  const httpService = new HttpService();
  const errorService = new ErrorService();

  const queryOverlay = useQuery({
    queryKey: ['list_user_overlay_data'],
    queryFn: () =>
      httpService
        .GET(ENDPOINT.USER_OVERLAY())
        .then((res: BaseResponse<IResListOverlay[]>) => {
          return res.data.response_data;
        })
        .catch((e) => {
          errorService.fetchApiError(e);
          return [];
        }),
  });
  return { queryOverlay };
}
