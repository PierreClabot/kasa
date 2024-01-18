function Host(props){

    return(
        <>
            <div className="name">{props.hostName}</div>
            <img src={props.hostPicture} alt="host"/>
        </>
    )
}

export default Host