import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

import { PATHS } from './PathConstants';

const { HOME, CONTACT, PRICING } = PATHS;

const Home = lazy(() => import('pages/Home'));
const Pricing = lazy(() => import('pages/Pricing'));
const Contact = lazy(() => import('pages/Contact'));

const mainRoutes: RouteObject[] = [
  { path: HOME, index: true, element: <Home /> },
  { path: CONTACT, element: <Contact /> },
  { path: PRICING, element: <Pricing /> },
];

export default mainRoutes;
