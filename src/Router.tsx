/* eslint-disable react-refresh/only-export-components */
// import { Route, Routes, Outlet } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';
import NavigatePage from './pages/NavigatePage';

const FPage = lazy(() => import('./pages/FPage'));

const Login = lazy(() => import('./pages/LoginPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

export const routes = [
   { path: '', element: <NavigatePage /> },
   {
      path: '/:lang',
      element: (
         <Suspense fallback={<div>Loading...</div>}>
            <FPage />
         </Suspense>
      ),
   },
   {
      path: '*',
      element: <NotFound />,
   },
   {
      path: 'qwertyuiop',
      element: (
         <Suspense fallback={<div>Loading...</div>}>
            <Login />
         </Suspense>
      ),
   },
];
