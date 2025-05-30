export const ROUTES = {
  SIGN_IN: () => `/auth/sign-in`,
  HOME: () => `/`,
  DASHBOARD: () => `/dashboard`,
  OVERLAY: () => `/dashboard/overlay`,
  TRANSACTION: () => `/dashboard/transaction`,
  EDIT_OVERLAY: (id: string) => `/dashboard/overlay/edit/${id}`,
  OVERLAY_PUBLIC: (id: string) => `${window.location.origin}/p/${id}`,
};
