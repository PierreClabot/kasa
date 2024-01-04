
// props.background
function Banner(props){
    return(
        <div className="banner">
            <img className="background" src={props.background} alt="Paysage" />
            <span className="text">{props.text}</span>
        </div>
    )
}

export default Banner