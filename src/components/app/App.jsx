//import logo from '../../logo.svg';
import './App.css';
import Home from '../../pages/home/Home.jsx';
import About from '../../pages/about/about';
import ErrorPage from "../../pages/errorPage/errorPage.jsx";
import Location from '../../pages/location/location.jsx';
// import { useEffect , useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Api from '../../api/api.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  // const LocationComponent = ({ id }) => {
  //   const [locationData, setLocationData] = useState(null);
  //   const [redirectToError, setRedirectToError] = useState(false);
  //   const navigate = useNavigate();
  
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const api = new Api();
  //       try {
  //         const result = await api.getLocation(id);
  
  //         if (result) {
  //           setLocationData(result);
  //         } else {
  //           // Si la location n'est pas trouvée, déclenchez la redirection vers la page d'erreur
  //           setRedirectToError(true);
  //         }
  //       } catch (error) {
  //         console.error('Erreur lors de la récupération des données :', error);
  //         // Gestion de l'erreur, par exemple, déclenchez également la redirection vers la page d'erreur
  //         setRedirectToError(true);
  //       }
  //     };
  
  //     fetchData();
  //   }, [id]);
  
  //   // Si les données de location ne sont pas encore chargées, vous pouvez afficher un chargement
  //   if (locationData === null) {
  //     return <div>Loading...</div>;
  //   }
  
  //   // Si redirectToError est vrai, redirigez vers la page d'erreur
  //   if (redirectToError) {
  //     navigate('/error');
  //     return null; // Rien à afficher ici, car la redirection est déclenchée
  //   }
  
  //   // Sinon, affichez le composant Location avec les données chargées
  //   return <Location id={id} data={locationData} />;
  // };

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
          element: <Location /> 
          // element: ({id})=> <LocationComponent id={id}/> 
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
