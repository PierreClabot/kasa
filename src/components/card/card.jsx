import { Link } from "react-router-dom"

function Card(props){ // props.id, props.img, props.title
    return(
        <Link to={"location/"+props.id}>
            <div className="card">
                <img src={props.img} alt="Image de la location" />
                <div className="title">{props.title}</div>
            </div>
        </Link>
    )
}

export default Card