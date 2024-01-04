import  Api  from "./../../api/api.js"

import { useEffect } from "react"

function Galery(){

    // const api = new Api();
    useEffect(()=>{
        const fetchData = async()=>{
            const api = new Api();
            api.getLocations()
        }
        fetchData()
    })
    
    // fetch data
    // itinerate
    // generate card
    // return(
    //     <>a</>
    // )
}

export default Galery