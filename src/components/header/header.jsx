import Menu from "../menu/menu";
import logo from "../../assets/logo.png"

function Header(){
    return(
        <div className="header">
            <img className="logo" src={logo} alt="Logo" />
            <Menu />
        </div>
    )
}

export default Header