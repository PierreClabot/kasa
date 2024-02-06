import { useState } from "react" // useEffect

function Carousel(props){

    var [index,setIndex] = useState(0)
    const pictures = props.pictures
    
    // if (!pictures) return null;

    const handleClick = (event)=>{
        let target = event.target;

        while(target.classList.value.search("arrow")<0){
            target = target.parentNode;
        }

        if(target.classList.value.search("right")>=0){
            setIndex((index+1) % pictures.length) // pourquoi index++ fonctionne pas ??????

        }

        if(target.classList.value.search("left")>=0){
            setIndex((index-1 + pictures.length)%pictures.length)
        
        }

    }
    if(props.isLoad){
        return(
            <div className="carousel">
                <img className="background" src={pictures[index]} alt="" />
                <div className="arrow left" onClick={handleClick}>
                    {
                        pictures.length > 1 ? (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="black">
                                                <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                                            </svg>):""
                    }

                </div>
                <div className="arrow right" onClick={handleClick}>

                    {
                        pictures.length > 1 ? (                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
                        <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                    </svg>):""
                    }
                </div>
                <div className="index">
                    {
                        pictures.length > 1 ? ((index+1)+"/"+pictures.length):""
                    }
                    
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="carousel skeleton">
               
            </div>
        )
    }
    
}

export default Carousel