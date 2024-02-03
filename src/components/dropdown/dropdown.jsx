import imgVector from "./../../assets/vector_dropdown.png"

function Dropdown(props){ // Revoir le contenu array ou string

    if(!props.content) return

    const handleClick = (event)=>{
        let target = event.target;
        let classTarget = target.classList.value;
        
        while(classTarget.search("dropdown")<0){
            target = target.parentNode
            classTarget = target.classList.value
        }

        if(classTarget.search("active")>0){
            target.classList.remove("active");
            return;
        }

        target.classList.add("active");
    }
    // @TODO Bug Dropdown list
    return( <div className="dropdown">
                <div className="btn" onClick={handleClick}>
                    <div className="title">{props.title}</div>
                    <img className="vector" src={imgVector} alt="vector dropdown" />
                </div>

                <div className="content" >
                {
                    
                        props.isList?(
                            props.content.forEach(elem=>(
                                <div className="item">{elem}</div>
                            )))
                            :(<div>{props.content}</div>)

                }
                </div>   
            </div>)
}

// dangerouslySetInnerHTML={{ __html: content }}
export default Dropdown