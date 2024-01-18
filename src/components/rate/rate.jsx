import Star from "../star/star"

function Rate(props){

    let rate = [];

    for(let i=1;i<=5;i++){
        if(i<=props.rate){
            rate.push(<Star key={i} complete="1"/>)
        }
        else{
            rate.push(<Star key={i} complete="0"/>)
        }
    }

    return(
        <>
            {rate}
        </>
    )
}

export default Rate