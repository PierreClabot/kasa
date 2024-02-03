import Card from "../card/card.jsx"
import  Api  from "./../../api/api.js"

import { useEffect, useState } from "react"

function Galery(){

    const [ data , setData ] = useState()
    const [ load , setLoad ] = useState(false)
    const dataNotLoad = ["1","2","3","4","5","6"]

    useEffect(()=>{

        const fetchData = async()=>{
            const api = new Api();
            api.getLocations().then(
                res=>{
                    
                    setData(res);
                    setLoad(true)
                }
                
            )
        }
        setTimeout(()=>{
            fetchData()
        },1000)
        
    },[])

    if(load){

        return(<div className="galery">
                    {   data.map((item) => 
                            (<Card key={item.id} id={item.id} title={item.title} img={item.pictures[0]} isLoading={load}/>)
                                ) }
                </div>)
    }
    else{

        return (<div className="galery">
                    {
                        dataNotLoad.map((elem,index)=>(<Card key={index} isLoading={load}/>))
                    }
                </div>);
        
    }

}

export default Galery