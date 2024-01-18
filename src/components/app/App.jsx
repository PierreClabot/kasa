//import logo from '../../logo.svg';
import './App.css';
import Home from '../../pages/home/Home.jsx';
import About from '../../pages/about/about';
import ErrorPage from "../../pages/errorPage/errorPage.jsx";
import Location from '../../pages/location/location.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: "",
      errorElement: <ErrorPage />,
      children : [
        {
          path: '',
          element : <Home />
        },
        {
          path: 'index',
          element : <Home />
        },
        {
          path: 'about',
          element : <About />
        }
        ,
        {
          path: 'location/:id',
          element : <Location />
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
