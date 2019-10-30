import React, { useState, useEffect } from  "react";
import * as contentful from 'contentful';
//import tohmp4 from '../images/toh.mp4';
//import tohwebm from './images/toh.webm';
const client = contentful.createClient({
    space: '62m479wlvf41',
    accessToken: '6d81a6032aa5c4efc5d0c169996a11ea895ca9e95c966b8e7af40d30903ae81b' })

//<source src={tohwebm} type="video/webm" />
export const Visuals= () =>  {
     const initialValue = [];
     const [images, setImages] = useState(initialValue);
     const [mainImg, setMainImg] = useState(null);
     const renderImages = imgs => {
        return imgs.map(x=>{
            return (<li className="thumb" onClick={()=>{setMainImg(x.fields.file.url)}}><img style={{width:30, height:30}} src={x.fields.file.url} alt=""/></li>)
        })
    };

     useEffect( () => {
          const getImages = () => {
              client.getEntries().then(entries => {
      let passImages = entries.items.filter(x=>{
          return typeof x.fields.galleryTitle !== 'undefined'
      });
console.log('what images:',passImages)
                  setImages(passImages)
              })
          };
  
          getImages();
      }, [images]);
     /**
      * 
      * 
      * <p className="leadTitle mediumText">Video:</p>
    <video class="vidBkg" controls>
          
          <source src={tohmp4} type="video/mp4" />
          I'm sorry; your browser doesn't support HTML5 video in WebM with VP8/VP9 or MP4 with H.264.
          
     </video>
     
      * <video className="vidBkg" controls>
     <source src="/app/src/images/toh.webm" type="video/webm" />
     <source src="/app/src/images/toh.mp4" type="video/mp4" >
     I'm sorry; your browser doesn't support HTML5 video in WebM with VP8/VP9 or MP4 with H.264.
     </source>
</video>

<li className="col-lg-2 col-md-2 col-sm-3 col-xs-4 bspHasModal"><img alt="" src="src/images/photos/pic004.JPG" className="img-responsive"/></li>
      */
if(typeof images[0] === 'undefined')return ''
return(<div className="textBlock">
<p className="leadTitle largeText">BUCKS COUNTY TOUR OF HONOR</p>



<p className="leadTitle mediumText">Photos:</p>
<div className="row">
     <ul className="tohPhotos ulThumb">
     {renderImages(images[0].fields.img)}
          
     </ul>
     <img src={mainImg} alt='' className='clickedImg' />
</div>

</div>


);
}
export default Visuals;