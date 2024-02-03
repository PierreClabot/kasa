import Dropdown from "../dropdown/dropdown";
import Tag from "../tag/tag";
import Rate from "../rate/rate";
import Host from "../host/host";

function Info(props){
    let indexTag = 0;
    const tags = props.tags ? (
        props.tags.map((item) => {
            indexTag++
            return (<Tag  key={indexTag} tag={item} />)
        
        }
            
        )
      ) : null;
    // let textEquipments = "";


    // props.equipments.map((item) => 
    //     textEquipments += item +"<br>"  
    // )
    if(props.isLoad){
        return(
            <div className="info">
                <div className="header_info">
                    <div className="title">
                        <div className="location">{props.title}</div>
                        <div className="localisation">{props.localisation}</div>
                        <div className="tags">
                            {tags}
                        </div>
                    </div>
                    <div className="details">
                        <div className="host">
                            <Host hostPicture={props.hostPicture} hostName={props.hostName} />
                        </div>
                        <div className="rate">
                            <Rate rate={props.rate} />
                        </div>
                    </div>
                </div>
                <div className="dropdowns">
                    <Dropdown title="Description" content={props.description} isList={false} />
                    <Dropdown title="Équipements" content={props.equipments} isList={true} />
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="info">
                <div className="header_info">
                    <div className="title">
                        <div className="location skeleton">{props.title}</div>
                        <div className="localisation skeleton">{props.localisation}</div>
                        <div className="tags skeleton">
                            {tags}
                        </div>
                    </div>
                    <div className="details">
                        <div className="host skeleton">
                            
                        </div>
                        <div className="rate skeleton">
                            
                        </div>
                    </div>
                </div>
                <div className="dropdowns">
                    <Dropdown title="Description" content={props.description} isList={false} />
                    <Dropdown title="Équipements" content={props.equipments} isList={true} />
                </div>
            </div>
        )
    }
    // return(
    //     <div className="info">
    //         <div className="header_info">
    //             <div className="title">
    //                 <div className="location">{props.title}</div>
    //                 <div className="localisation">{props.localisation}</div>
    //                 <div className="tags">
    //                     {tags}
    //                 </div>
    //             </div>
    //             <div className="details">
    //                 <div className="host">
    //                     <Host hostPicture={props.hostPicture} hostName={props.hostName} />
    //                 </div>
    //                 <div className="rate">
    //                     <Rate rate={props.rate} />
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="dropdowns">
    //             <Dropdown title="Description" content={props.description} isList={false} />
    //             <Dropdown title="Équipements" content={props.equipments} isList={true} />
    //         </div>
    //     </div>
    // )
}

export default Info