export default class Api{
    // constructor(){
    //     // this.url = "./../../data/data.json"
    // }

    async getLocations(){

        await fetch("./data.json")
        .then((response)=>{
            console.log(response)
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            response.json()
        })
        .then(data=>console.log(data))
        .catch(error => console.error('Erreur de conversion JSON :', error));

    }

    async getLocation(idLocation){
        await fetch(this.url)
            .then((res)=>{
                return res.json()
            })
            .then((locations)=>{
                for(const location of locations){
                    if(location.id === idLocation){
                        return location
                    }
                }
            })
    }
}
