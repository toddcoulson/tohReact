import React, { useState, useEffect } from  "react";
import * as contentful from 'contentful';
import {Button} from 'reactstrap';
const client = contentful.createClient({
    space: '62m479wlvf41',
    accessToken: '6d81a6032aa5c4efc5d0c169996a11ea895ca9e95c966b8e7af40d30903ae81b' })
export const Testimonials= () =>  {
    const initialValue = [];
    const [testimonials, setTestimonials] = useState(initialValue);
    const [current, setCurrent] = useState(0);
    useEffect( () => {
        const getTestimonials = () => {
            client.getEntries().then(entries => {
    let passTestimonials = entries.items.filter(x=>{
        return typeof x.fields.testimonial !== 'undefined'
    });
                setTestimonials(passTestimonials)
            })
        };

        getTestimonials();
    }, [testimonials]);

return(<div style={{marginBottom:'50px'}}><div className="textBlock">
<p ng-init="randomTestimonial()" className="leadTitle largeText">BUCKS COUNTY TOUR OF HONOR</p>
<p className="leadTitle mediumText">Testimonials:</p>
<p>
{testimonials.map((test, i) => (
    <Button key={i} style={{marginRight:'5px'}}onClick={x=>{
        console.log(i);
        return setCurrent(i)
    }}>{i+1}</Button>
            
        ))}
        
</p>
<p dangerouslySetInnerHTML={testimonials.length!==0 ? { __html: testimonials[current].fields.testimonial }:{__html:''}} style={{textAlign:'left'}} />
<p>{testimonials.length!==0 ? testimonials[current].fields.from : ''}</p>
</div>
</div>
);
}
export default Testimonials;