import { StrictMode } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.tsx'
import Homepage from './pages/Homepage.tsx'
import ProductPage from './pages/Productpage.tsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Homepage  />} />
      <Route path="product/:slug" element={<ProductPage/>} />
    </Route>
  )
);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
