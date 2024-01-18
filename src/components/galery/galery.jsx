import Card from "../card/card.jsx"
import  Api  from "./../../api/api.js"

import { useEffect, useState } from "react"

function Galery(){

    const [ data , setData ] = useState()

    useEffect(()=>{

        const fetchData = async()=>{
            const api = new Api();
            api.getLocations().then(
                res=>{
                    setData(res);
                }
                
            )
        }
        fetchData()
    },[])


    const cards = data ? (
        data.map((item) => 
            (<Card key={item.id} id={item.id} title={item.title} img={item.pictures[0]} />)
        )
      ) : null;

    return(<>
        <div className="galery">
            {cards}
        </div>
        
    </>)

}

export default Galery