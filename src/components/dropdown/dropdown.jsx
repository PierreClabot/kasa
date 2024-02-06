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

    return( <div className="dropdown">
                <div className="btn" onClick={handleClick}>
                    <div className="title">{props.title}</div>
                    <img className="vector" src={imgVector} alt="vector dropdown" />
                </div>

                <div className="content" >
                {
                    
                        props.isList?(
                            props.content.map((elem,index)=>(
                                <div className="item" key={index}>{elem}</div>
                            )))
                            :(<p>{props.content}</p>)

                }
                </div>   
            </div>)
}


export default Dropdown