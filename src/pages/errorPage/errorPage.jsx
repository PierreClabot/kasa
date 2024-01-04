import { useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <div id="error-page">
        <div className="error">404</div>
        <div className="info_error">Oups ! La page que vous demandez n'existe pas.</div>
        <NavLink className="link_error" to="/index/">Retourner sur la page accueil</NavLink>
      </div>
      <Footer />
    </>
  );
}