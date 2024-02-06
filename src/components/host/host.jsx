function Host(props){

    return(
        <>
            <div className="name">
                <div className="firstName">{props.hostName.split(" ")[0]}</div>
                <div className="lastName">{props.hostName.split(" ")[1]}</div>
            </div>
            <img src={props.hostPicture} alt="host"/>
        </>
    )
}

export default Host