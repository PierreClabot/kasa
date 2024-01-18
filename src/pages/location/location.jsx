import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import Carousel from "../../components/carousel/carousel"
import Info from "../../components/info/info"
import { useParams } from "react-router-dom"
import Api from "../../api/api"
import { useEffect, useState } from "react"

function Location(){

    const { id } = useParams();
    let [data,setData] = useState("")

    useEffect(()=>{
        function getData(){
            
            const api = new Api()
            api.getLocation(id)
            .then(res=>{
                setData(res)
            })
            
            
        }
        getData();
    },[id])

    
    const equipments = [
        "Équipements de base",
        "Micro-Ondes",
        "Douche italienne",
        "Frigo",
        "WIFI"
    ]
    if(!data) return
    
    return(
        <>
            <Header />
            <Carousel pictures={data.pictures} />
            <Info title={data.title} localisation={data.location} description={data.description} tags={data.tags} equipments={equipments} rate={data.rating} hostName={data.host.name} hostPicture={data.host.picture} />
            <Footer />
        </>
    )
}

export default Location