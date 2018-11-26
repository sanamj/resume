import React, { Component } from 'react';
import $ from 'jquery';
import './App.js';
import Header from './Components/Header.js';
import About from './Components/About.js';
import Resume from './Components/Resume.js';
import Portfolio from './Components/Portfolio.js';
import Contact from './Components/Contact.js';
import Testimonials from './Components/Testimonials.js';
import Footer from './Components/Footer.js';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foo : 'bar',
      resumeData: {}
    }
  }
  getResumeData(){
    $.ajax({
      url:'http://localhost:3000/resumeData.json',
      dataType: 'json',
      cache: 'false',
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });

  }
  componentDidMount(){
    this.getResumeData();
  }
  render() {
    //console.log(this.state.resumeData);
    return (
      <div className="App">
      <Header data= {this.state.resumeData.main}/>
      <About data= {this.state.resumeData.main}/>
      <Resume data= {this.state.resumeData.resume}/>
      <Portfolio data= {this.state.resumeData.portfolio}/>
      <Testimonials data= {this.state.resumeData.testimonials}/>
      <Contact data= {this.state.resumeData.main}/>

      <Footer/>
      </div>
    );
  }
}

export default App;
