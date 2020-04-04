import { Home } from './home';
import { AboutUs } from './about_us';
import { Services } from './services';
import { Blogs } from './blogs';

export const pages = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/aboutus',
    component: AboutUs
  },
  {
    path: '/services',
    component: Services
  },
  {
    path: '/blogs',
    component: Blogs
  }
];
