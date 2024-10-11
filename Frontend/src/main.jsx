import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import HomePage from './Pages/Home.page.jsx'
import BookDeliveryPage from './Pages/BookDelivery.page.jsx'
import ServicesPage from './Pages/Services.page.jsx'
import PricingPage from './Pages/Pricing.page.jsx'
import TrackDeliveryPage from './Pages/TrackDelivery.page.jsx'
import DashboardPage from './Pages/Dashboard.page.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<HomePage/>}/>
      <Route path='book_delivery' element={<BookDeliveryPage/>}/>
      <Route path='services' element={<ServicesPage/>}/>
      <Route path='pricing' element={<PricingPage/>}/>
      <Route path='track_delivery' element={<TrackDeliveryPage/>}/>
      <Route path='dashboard' element={<DashboardPage/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
