import React, { useState, useEffect} from "react";
import * as contentful from 'contentful';
import Moment from 'react-moment';
const client = contentful.createClient({
    space: '62m479wlvf41',
    accessToken: '6d81a6032aa5c4efc5d0c169996a11ea895ca9e95c966b8e7af40d30903ae81b' })
const Events= () =>  {
    const initialValue = [];
    const [events, setEvents] = useState(initialValue);
    useEffect( () => {
        const getEvents = () => {
            client.getEntries().then(entries => {
    let passEvents = entries.items.filter(x=>{
        return typeof x.fields.eventType !== 'undefined'
    });
    console.log(passEvents)
                setEvents(passEvents)
            })
        };

        getEvents();
    }, [events]);
    
    
    
          

    return(<div className="textBlock">
        <p className="leadTitle largeText">BUCKS COUNTY TOUR OF HONOR</p>
        <p className="leadTitle mediumText">Events:</p>
        {events.map((event, index) => (
            <div>
                <h4>{event.fields.eventType}</h4>
                <p><Moment format="MM/DD/YYYY">{event.fields.date}</Moment></p>
            </div>
        ))}
    </div>
);
}
export default Events;