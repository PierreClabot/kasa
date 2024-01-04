import { NavLink } from "react-router-dom";

function Menu() {
    return (
      <>
        <div id="sidebar" className="menu">
          <nav>
            <ul>
              <li>
                <NavLink to="/index/">Accueil</NavLink>
              </li>
              <li>
                <NavLink to="/about/">À propos</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        
      </>
    );
}
// 
export default Menu