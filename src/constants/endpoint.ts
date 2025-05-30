export const ENDPOINT = {
  SIGN_IN: () => `/auth/v1/sign-in`,
  USER_OVERLAY: () => `/overlay/v1/user/list`,
  DETAIL_USER_OVERLAY: (id: string) => `/overlay/v1/detail/${id}`,
};
