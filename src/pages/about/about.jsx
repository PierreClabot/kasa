import "./about.scss"
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import Dropdown from "../../components/dropdown/dropdown";
import Footer from "../../components/footer/footer";

import background from "../../assets/banner_about.png"

function About(){

    const textReliability = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    const textRespect     = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const textService     = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const textSecurity    = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
    
    
    
    return(
      <>
          <Header />
          <div className="container">
            <Banner text="" background={background}/>
            <div className="container-dropdown">
              <Dropdown title="Fiabilité" content={textReliability} />
              <Dropdown title="Respect"   content={textRespect} />
              <Dropdown title="Service"   content={textService} />
              <Dropdown title="Sécurité"  content={textSecurity} />
            </div>
          </div>
          <Footer />
      </>

    );
}

export default About