import "./Home.scss"
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import Galery from "../../components/galery/galery";

import background from "../../assets/background.png"
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
        <Banner text="Chez vous, partout et ailleurs" background={background}/>
        <Galery />
        <Footer />
      </div>  
    );
}

export default Index