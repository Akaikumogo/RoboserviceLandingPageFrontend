import { createRoot } from 'react-dom/client';

import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './Router';
export const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnWindowFocus: false,
      },
   },
});

createRoot(document.getElementById('root')!).render(
   <div className="">
      <QueryClientProvider client={queryClient}>
         <RouterProvider router={createBrowserRouter(routes)} />
      </QueryClientProvider>
   </div>,
);
