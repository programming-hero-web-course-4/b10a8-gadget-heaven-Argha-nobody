import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Dashboard from './Components/Dashboard.jsx'; 
import Statistics from './Components/Statistics.jsx';
import Home from './Components/Home.jsx';
import GadgetDeatils from './Components/GadgetDeatils.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,  
    errorElement: <ErrorPage />,  
    children: [
      {
        path: "/",
        element: <Home />, 
      },
      {
        path: "dashboard",
        element: <Dashboard />, 
      },
      {
        path: "gadgets/:product_id",
        element: <GadgetDeatils />,
        loader: () => fetch('./dataGadget.json')
      },
      {
        path: "statistics",
        element: <Statistics />, 
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
