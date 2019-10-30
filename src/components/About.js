import React from "react";
import { Slide } from 'react-slideshow-image';
import rotate01 from '../images/rotate/img01.JPG';
import rotate02 from '../images/rotate/img02.JPG';
import rotate03 from '../images/rotate/img03.JPG';
import rotate04 from '../images/rotate/img06.JPG';
import rotate05 from '../images/rotate/img05.jpg';
import rotate06 from '../images/rotate/img07.JPG';
import rotate07 from '../images/rotate/img08.JPG';
import rotate08 from '../images/rotate/img09.JPG';
import Events from '../components/Events';
 

import * as contentful from 'contentful';
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
//<p style={{textAlign:'left'}}>Applications now being accepted for our trip scheduled for Monday, October 2, 2017.</p>
export const About= () =>  {
  var client = contentful.createClient({
    space: '62m479wlvf41',
    accessToken: '6d81a6032aa5c4efc5d0c169996a11ea895ca9e95c966b8e7af40d30903ae81b' })
    client.getEntries().then(entries => {
    entries.items.forEach(entry => {
      //console.log(entry.fields)
          if(entry.fields.eventType) {
            //console.log("Event here: ",entry.fields)
          }
    })
  })
    return(<div id="content">
    <div style={{width:'300px', float:'right'}}><Events></Events></div>
        <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${rotate01})`}} />
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${rotate02})`}} />
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${rotate03})`}} />
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${rotate04})`}} />
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${rotate05})`}} />
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${rotate06})`}} />
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${rotate07})`}} />
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${rotate08})`}} />
          </div>
        </Slide>
      </div>
      
                
        <div className="textBlock">
                <p style={{textAlign:'left'}}>The mission and sole purpose of Bucks County Tour of Honor is to transport United States Military Veterans from the Bucks County area to Washington DC to visit memorials, buildings and other places that promote and represent the ideals of the United States of America.</p>
                <p style={{textAlign:'left'}}>At present our major focus is WWII veterans and terminally ill veterans, who are given top priority. We are also accepting applications for Korean War veterans at this time. </p>
                <p style={{textAlign:'left'}}>The Bucks County Tour of Honor experience leaves from Parx East and includes stops at Arlington National Cemetery at the Tomb of the Unknown Soldier for the Changing of the Guard and Wreath Laying Ceremony, Air Force Memorial, Korean War Memorial and World War II Memorial. The trip to Washington DC is followed by a “Welcome Home” celebration, dinner and entertainment hosted by Parx Casino.</p>
                <p style={{textAlign:'left'}}>The Bucks County Tour of Honor is an all expenses paid trip for the veteran and is destined to be an experience you will forever treasure.</p>
                <p style={{textAlign:'left'}}>Space is limited, so to avoid disappointment please complete and return your application to us as soon as possible to secure your spot.</p>
                
                <p style={{textAlign:'left'}}>Applications can be downloaded from this site or you can contact us at <a href="mailto:buckscountytourofhonor@gmail.com">buckscountytourofhonor@gmail.com</a> or by calling 215-614-0720 and we can send an application to you via mail.</p>

                <p style={{textAlign:'left'}}>Completed applications should be returned to:</p>

                <p style={{textAlign:'left'}}>Bucks County Tour of Honor<br />
                    55 E. Court Street <br />
                    Doylestown, PA. 18901
                </p>
            </div>
        </div>
    );
}
export default About;