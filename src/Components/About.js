import React, { Component } from 'react';

class About extends Component {
  render() {
    if(this.props.data){
      var name = this.props.data.name;
      var image = 'images/'+ this.props.data.image;
      var bio= this.props.data.bio;
      var email= this.props.data.email;
      var phone = this.props.data.phone;
      var state = this.props.data.address.state;
      var city = this.props.data.address.city;
      var street = this.props.data.address.street;
      var zipCode = this.props.data.address.zip;
      var resumeDownload = this.props.data.resumedownload;
      }
    return (
      <section id="about">

        <div class="row">

           <div class="three columns">

              <img class="profile-pic"  src={image} alt="" />

           </div>

           <div className="nine columns main-col">

              <h2>About Me</h2>

              <p>{bio}</p>

              <div className="row">

                 <div className="columns contact-details">

                    <h2>Contact Details</h2>
                    <p className="address">
  						   <span>{name}</span><br/>
  						   <span>{street}<br/>
  						         {city}, {state} {zipCode} US
                       </span><br/>
  						   <span>{phone}</span><br/>
                       <span>{email}</span>
  					   </p>

                 </div>

                 <div className="columns download">
                    <p>
                       <a href={resumeDownload} class="button" target="_blank"><i class="fa fa-download"></i>Download Resume</a>
                    </p>
                 </div>

              </div>

           </div>

        </div>

     </section>
    );
  }
}

export default About;
