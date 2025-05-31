export const ENDPOINT = {
  SIGN_IN: () => `/auth/v1/sign-in`,
  USER_OVERLAY: () => `/overlay/v1/user/list`,
  DETAIL_USER_OVERLAY: (id: string) => `/overlay/v1/detail/${id}`,
  EDIT_OVERLAY: (id: string) => `/overlay/v1/edit/${id}`,
  DETAIL_PUBLIC_OVERLAY: (id: string) => `/overlay/v1/public-overlay/${id}`,
  DETAIL_USER_FOR_DONATION: (username: string) => `/account/v1/user/${username}`,
};
