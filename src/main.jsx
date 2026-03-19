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
import BookDetail from './components/BookDetail/BookDetail';
import ListedBooks from './components/ListedBooks/ListedBooks';

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
        path: "/book/:bookId",
        loader: () => fetch("/booksData.json"),
        element: <BookDetail></BookDetail>
      },
      {
        path: "/ListedBooks",
        loader: () => fetch("/booksData.json"),
        element: <ListedBooks></ListedBooks>
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
