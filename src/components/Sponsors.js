import React from "react";
import parx from '../images/parx.png';
import jeffhealth from '../images/jeffersonHealth.png';
import jeffhealth3d from '../images/jeffersonHealth3d.png';
import forTheTroops from '../images/forTheTroops.png';
import bucksCounty from '../images/BucksCounty.png';
import williamPenn from '../images/williamPenn.png';
import shekinah from '../images/SHEKINAH-FERNWOOD.png';
import rotary from '../images/rotary.png';
import americanHeritage from '../images/americanheritage.png';
import fop from '../images/fop.png';
import americanLegion from '../images/AmericanLegion.png';
export const Sponsors= () =>  {
return(<div style={{marginBottom:'50px'}}>
<div className="textBlock">
    <p class="leadTitle mediumText">Star Sponsor &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <img src={parx} alt="Parx Casino"/><br />
        <img src={jeffhealth} alt="Jefferson Health"/><br />
        <img src={jeffhealth3d} alt="Jefferson Health 3B Orhopaedics"/><br />
    <p className="leadTitle mediumText">Red Sponsor</p>
        <img src={forTheTroops} alt="For the Troops (FFT)"/><br />
    <p className="leadTitle mediumText">White Sponsor</p>
        <img src={bucksCounty} alt="Bucks County"/><br />
        <img src={williamPenn} alt="Bucks 'WW' William Penn Propriator and Governor"/><br />
        <img src={shekinah} alt="SHEKINAH-FERNWOOD LODGE #246"/> SHEKINAH-FERNWOOD LODGE #246<br />
        <img src={rotary} alt="Central Bucks Rotary"/> Central Bucks Rotary<br />
        <img src={americanHeritage} alt="American Heritage"/><br />
        <img src={fop} alt="Fraternal Order of Police Philadelphia Lodge #5"/><br />
    <p className="leadTitle mediumText">Blue Sponsor</p>
        <img src={americanLegion} alt="Edgar H. Denson American Legion Post 79"/> Edgar H. Denson American Legion Post 79<br />

    </div>
</div>
);
}
export default Sponsors;