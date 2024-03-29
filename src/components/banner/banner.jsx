
// props.background
function Banner(props){
    return(
        <div className="banner">
            <img className="background" src={props.background} alt="Paysage" />
            {
                props.text?(<span className="text" dangerouslySetInnerHTML={{ __html: props.text }}></span>):""
            }
            
        </div>
    )
}

export default Banner