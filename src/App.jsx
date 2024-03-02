import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import UserRoot from './UserRoot';
import Home from './pages/home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserRoot/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        
      ],
    },
  ]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
