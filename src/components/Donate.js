import React from "react";
export const Donate= () =>  {
return(<div style={{marginBottom:'50px'}}><div className="textBlock">
<p className="leadTitle mediumText">
    BUCKS COUNTY TOUR OF HONOR
</p>
<p style={{textAlign:'left'}}>
    Bucks County Tour of Honor gratefully accepts donations to help continue our mission to ensure that every World War II and Korean War Veteran who is interested in participating is able to do so.
</p> 
<p style={{textAlign:'left'}}>
    There are certain expenses associated with the Bucks County Tour of Honor trip such as luxury motor coaches, breakfast, lunch and apparel given to the veterans as a memento of the trip. Donations to the Bucks County Tour of Honor would assist in offsetting these costs. No donation is too small.
</p>
<p style={{textAlign:'left'}}>
    All donations to our 501(c)3 nonprofit organization are tax deductible.
</p>
<p style={{textAlign:'left'}}>
    Donations can also be accepted by mail. Please mail your donation to:
    <span className="indent">
        Bucks County Tour of Honor<br/>
        P.O. Box 689<br/>
        Doylestown, PA. 18901
    </span>
</p>
<p style={{textAlign:'left'}}>
    Click here to make a donation by credit card
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="Z8HCKSG5DX6KC" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>

</p>
</div></div>
);
}
export default Donate;