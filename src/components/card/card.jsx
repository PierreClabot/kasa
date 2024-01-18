import { Link } from "react-router-dom"

function Card(props){ // props.id, props.img, props.title
    return(
        <Link to={"../location/"+props.id} className="link" relative="path">
            <div className="card">
                <img className="background" src={props.img} alt={props.title} />
                <div className="title">{props.title}</div>
            </div>
        </Link>
    )
}

export default Card