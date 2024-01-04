import logo from "../../assets/logo_footer.png"

function Footer(){
    return(
        <footer className="footer">
            <img src={logo} alt="Logo Kasa" />
            <div className="text" >© 2020 Kasa. All rights reserved</div>
        </footer>
    )
}

export default Footer