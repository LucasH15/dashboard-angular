import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Accueil',
    icon: 'home-outline',
    link: '/',
    pathMatch: 'full',
    home: true
  },
  {
    title: 'Trader',
    icon: 'pie-chart-outline',
    link: '/trader',
    pathMatch: 'full'
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
