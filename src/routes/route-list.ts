import { type JSX } from 'react';
import type { PageType } from '@/enums/page-type-enum.ts';
import HomePage from '@/pages/HomePage.tsx';
import { ROUTES } from '@/routes/routes.ts';
import SignInPage from '@/pages/auth/sign-in/SignInPage.tsx';
import DashboardPage from '@/pages/dashboard/DashboardPage.tsx';
import OverlayPage from '@/pages/dashboard/overlay/OverlayPage.tsx';
import TransactionPage from '@/pages/dashboard/transaction/TransactionPage.tsx';
import FormOverlayPage from '@/pages/dashboard/overlay/FormOverlayPage.tsx';
import PublicOverlayPage from '@/pages/public-overlay/PublicOverlayPage';
import PublicDonationPage from '@/pages/public-overlay/PublicDonationPage';

export interface IRouteList {
  element: () => JSX.Element;
  path: string;
  type: PageType;
}

export const PUBLIC_ROUTE: IRouteList[] = [
  {
    path: '/p/:id',
    type: 'FULL_PAGE',
    element: PublicOverlayPage,
  },
  {
    element: HomePage,
    type: 'FULL_PAGE',
    path: ROUTES.HOME(),
  },
  {
    path: ROUTES.SIGN_IN(),
    type: 'FULL_PAGE',
    element: SignInPage,
  },
  {
    path: ROUTES.PUBLIC_DONATION(':username'),
    type: 'FULL_PAGE',
    element: PublicDonationPage,
  },
];

export const PRIVATE_ROUTE: IRouteList[] = [
  {
    path: ROUTES.DASHBOARD(),
    type: 'DASHBOARD',
    element: DashboardPage,
  },
  {
    path: ROUTES.OVERLAY(),
    type: 'DASHBOARD',
    element: OverlayPage,
  },
  {
    path: ROUTES.TRANSACTION(),
    type: 'DASHBOARD',
    element: TransactionPage,
  },
  {
    path: ROUTES.EDIT_OVERLAY(':id'),
    type: 'DASHBOARD',
    element: FormOverlayPage,
  },
];
