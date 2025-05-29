import { ROUTES } from '@/routes/routes.ts';
import { MdOutlineFormatOverline, MdSpaceDashboard, MdWallet } from 'react-icons/md';

export const SIDEBAR_DATA = [
  {
    label: 'Dashboard',
    path: ROUTES.DASHBOARD(),
    icon: MdSpaceDashboard,
  },
  {
    label: 'Overlay',
    path: ROUTES.OVERLAY(),
    icon: MdOutlineFormatOverline,
  },
  {
    label: 'Transaksi',
    path: ROUTES.TRANSACTION(),
    icon: MdWallet,
  },
];
