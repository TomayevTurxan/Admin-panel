import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import { ROUTES } from './routes';
const router = createBrowserRouter(ROUTES);

function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
