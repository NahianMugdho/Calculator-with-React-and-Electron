import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './components/router/router.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'


// import {
 
//   RouterProvider,
// } from "react-router-dom";
// import router from './components/Router/router.jsx';


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//   <RouterProvider router={router} /> 
//   </StrictMode>,
// )
