import React from "react";
export const Contact= () =>  {
    //
//codepen.io/jaycbrf/pen/iBszr
return(<div className="textBlock">
<p>
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="Z8HCKSG5DX6KC" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>

  Donations can also be accepted by mail. Please mail your donation to:
  <span className="indent">
    BUCKS COUNTY TOUR OF HONOR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
    P.O. Box 689<br />
    Doylestown, PA. 18901<br />
    267-614-0720<br />
    <a href="mailto:buckscountytourofhonor@gmail.com">buckscountytourofhonor@gmail.com</a>
  </span>
</p>
<p className="leadTitle mediumText">
  CONTACT US
</p>

<form className="well form-horizontal" ng-submit="sendEmail()" id="contact_form">
  <fieldset>

    <div className="form-group">
      <label className="col-md-4 control-label">Your name (required)</label>  
      <div className="col-md-4 inputGroupContainer">
        <div className="input-group">
          <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
          <input  name="name" placeholder="Name" className="form-control" ng-model="name" type="text" />
        </div>
      </div>
    </div>


    <div className="form-group">
      <label className="col-md-4 control-label">Your Email (required)</label>  
      <div className="col-md-4 inputGroupContainer">
        <div className="input-group">
          <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
          <input name="email" placeholder="E-Mail Address" className="form-control" ng-model="email" type="text" />
        </div>
      </div>
    </div>


    <div className="form-group">
      <label className="col-md-4 control-label">Subject</label>  
      <div className="col-md-4 inputGroupContainer">
        <div className="input-group">
          <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
          <input name="subject" placeholder="Subject" className="form-control" ng-model="subject" type="text" />
        </div>
      </div>
    </div>


    <div className="form-group">
      <label className="col-md-4 control-label">Your Message</label>
      <div className="col-md-4 inputGroupContainer">
        <div className="input-group">
          <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
          <textarea className="form-control" name="comment" ng-model="message" placeholder="Message"></textarea>
        </div>
      </div>
    </div>

    <div className="alert alert-success" role="alert" id="success_message">Success <i className="glyphicon glyphicon-thumbs-up"></i> Thanks for contacting us, we will get back to you shortly.</div>

    <div className="form-group">
      <label className="col-md-4 control-label"></label>
      <div className="col-md-4">
        <button type="submit" ng-click="sendMail()" className="btn btn-warning" >Send <span className="glyphicon glyphicon-send"></span></button>
        
      </div>
    </div>

  </fieldset>
</form>

Follow Us
<a href="https://www.facebook.com/pages/category/Community/Bucks-County-Tour-of-Honor-168668466861814/" rel="noopener noreferrer" target="_blank">Facebook</a>
</div>
);
}
export default Contact;