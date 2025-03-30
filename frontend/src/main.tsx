import { StrictMode } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.tsx'
import Homepage from './pages/Homepage.tsx'
import ProductPage from './pages/ProductPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StoreProvider } from 'Store.tsx'

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Homepage />} />
      <Route path="/products/:slug" element={<ProductPage />} />
    </Route>
  )
)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </StoreProvider>
  </StrictMode>
)
