export default class Api{
    constructor(){
        this.url = "/data/data.json"
    }

    async getLocations(){

        let data = await fetch(this.url)
        .then((response)=>{

            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            return response.json()
        })
        
        return data;

    }

    getLocation(idLocation){
        return fetch(this.url)
            .then((res)=>{
                return res.json()
            })
            .then((locations)=>{

                for(const element of locations){
                    
                    if(element.id === idLocation){
                        return element
                    }
                }

                return ""
            })
    }
}
