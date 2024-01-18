import "./Home.scss"
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import Galery from "../../components/galery/galery";

import background from "../../assets/banner_home.png"
// import ErrorPage from "../errorPage/errorPage.jsx";
// import Root from "../../components/routes/root";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// import About from "../about/about.jsx";

function Index(){
    return(
      <div>
        <Header />
        <div className="container">
          <Banner text="Chez vous,<br> partout et ailleurs" background={background}/>
          <Galery />
        </div>
        <Footer />
      </div>  
    );
}

export default Index