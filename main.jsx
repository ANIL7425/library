import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/About.jsx'
import Error from './components/Error.jsx'
import Contact from './components/Contact';
import BookDetails from './components/BookDetails.jsx'
import Demo from './components/Demo.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Booklist from './components/Booklist.jsx'
import libraryData from './utilities/mockData.js'
const approuter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Booklist />, // Nested under the main '/' route
      },
    ],
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/book/:id',
    element: <BookDetails />,
  },
  {
    path:'/Demo',
    element:<Demo />
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={approuter}/>
  </StrictMode>,
)
