import { Link } from "react-router-dom"

function Card(props){ // props.id, props.img, props.title



    return(
        <Link to={"../location/"+props.id} className="link" relative="path">
            {
                props.isLoading?(
                    <div className="card">
                    <img className="background" src={props.img} alt={props.title} />
                    <div className="title">{props.title}</div>
                    </div>
                ):
                (
                    <div className="card skeleton">

                    </div>
                )
            }

        </Link>
    )
}

export default Card