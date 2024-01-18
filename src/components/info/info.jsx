import Dropdown from "../dropdown/dropdown";
import Tag from "../tag/tag";
import Rate from "../rate/rate";
import Host from "../host/host";

function Info(props){
    let indexTag = 0;
    const tags = props.tags ? (
        props.tags.map((item) => {
            indexTag++
            return (<Tag  key={indexTag} tag={item} />) // @TODO ajouter une key
        
        }
            
        )
      ) : null;
    let textEquipments = "";


    props.equipments.map((item) => 
        textEquipments += item +"<br>"  
    )
    
    return(
        <div className="info">
            <div className="header_info">
                <div className="title">
                    <div className="location">{props.title}</div>
                    <div className="localisation">{props.localisation}</div>
                </div>
                <div className="host">
                    <Host hostPicture={props.hostPicture} hostName={props.hostName} />
                </div>
            </div>
            <div className="details">
                <div className="tags">
                    {tags}
                </div>
                <div className="rate">
                    <Rate rate={props.rate} />
                </div>
            </div>



            <div className="dropdowns">
                <Dropdown title="Description" content={props.description}/>
                <Dropdown title="Équipements" content={textEquipments}/>
            </div>
            
        </div>
    )
}

export default Info