//import logo from '../../logo.svg';
import './App.css';
import Home from '../../pages/home/Home.jsx';
import About from '../../pages/about/about';
import ErrorPage from "../../pages/errorPage/errorPage.jsx";
// import Header from '../header/header.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      children : [
        {
          path: 'index',
          element : <Home />
        },
        {
          path: 'about',
          element : <About />
        }
      ]
    }
  ]);

    return(
      <>  
        <RouterProvider router={router}/>
      </>      
    );
}

export default App;
