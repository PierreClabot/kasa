import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import Carousel from "../../components/carousel/carousel"
import Info from "../../components/info/info"
import ErrorPage from "../errorPage/errorPage"
import { useParams } from "react-router-dom"
import Api from "../../api/api"
import { useEffect, useState } from "react"
// import { Navigate } from "react-router-dom"

function Location(){

    const { id } = useParams();
    let [data,setData] = useState("")
    let [error,setError] = useState("")
    let [load,setLoad] = useState(false)

    useEffect(()=>{
        function getData(){
            
            const api = new Api()
            api.getLocation(id)
            .then(res=>{              
                setData(res)
                setLoad(true)
            }).catch(err=>{
                setError("erreur")
            }
            )


        }
        setTimeout(()=>{
            getData();
        },1000)
        

    },[id])

    if(error === "erreur"){
        return <ErrorPage />
    }
    console.log("data.equipments",data.equipments)

    if(load){
        return(
            <>
                <Header />
                <Carousel pictures={data.pictures} isLoad={true}/>
                <Info title={data.title} localisation={data.location} description={data.description} tags={data.tags} equipments={data.equipments} rate={data.rating} hostName={data.host.name} hostPicture={data.host.picture} isLoad={true} />
                <Footer />
            </>
        )
    }else{
        return(
            <>
                <Header />
                <Carousel isLoad={false} />
                <Info isLoad={false} />
                <Footer />
            </>
        )
    }

}

export default Location