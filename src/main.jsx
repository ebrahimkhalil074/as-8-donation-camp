import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";

import Home from './COMPONENTNS/Home/Home';
import MainLayout from './COMPONENTNS/MainLayout/MainLayout';
import DonationDetails from './COMPONENTNS/DonationDetails/DonationDetails';
import Donation from './Pageis/Donation';
import Statistics from './Pageis/Statices/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
{
path:"/",
element:<Home></Home>
},
{
path:"/DonationDetails/:id",
element:<DonationDetails></DonationDetails>,
loader:()=>fetch("/data.json")
},
{
path:"/Donation",
element:<Donation></Donation>
},
{
path:"/Statistics",
element:<Statistics></Statistics>,
loader:()=>fetch("data.json")
}

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
