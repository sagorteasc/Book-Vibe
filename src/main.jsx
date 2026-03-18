import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import PagesToRead from './components/PagesToRead/PagesToRead';
import Banner from './components/Banner/Banner';
import Books from './components/Books/Books';
import Book from './components/Book/Book';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/banner",
        element: <Banner></Banner>
      },
      {
        path: "/books",
        element: <Books></Books>
      },
      {
        path: "/book",
        element: <Book></Book>
      },
      {
        path: "/dashboard",
        element: <PagesToRead></PagesToRead>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
