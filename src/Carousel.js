import React, { Component } from 'react';

import './Carousel.css';

var index=0;

var data= [

{
  imgUrl:'https://images.unsplash.com/photo-1554196511-667424461ade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1344&q=80',
  title:'First Slider',
  subtitle:'subtitle of First Slider',
  desc:'desc of First Slider'
},
{
  imgUrl:'https://images.unsplash.com/photo-1554050641-8068aa831276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
   title:'Second Slider',
  subtitle:'subtitle of Second Slider',
  desc:'desc of Second Slider'
},
{
  imgUrl:'https://images.unsplash.com/photo-1554047942-20509ababe57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
   title:'Third Slider',
  subtitle:'subtitle of Third Slider',
  desc:'desc of Third Slider'
},
{
  imgUrl:'https://images.unsplash.com/photo-1553964124-2c513584947b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
   title:'Fourth Slider',
  subtitle:'subtitle of fourth Slider',
  desc:'desc of fourth Slider'
}
];

class ImageSection extends Component {
  render() {
    return(
      <div className="ImageSection">
        <img className="imgp" id="imgp" src={data[this.props.index].imgUrl}/>
        <h1 className="title">{data[this.props.index].title}</h1>
        <h3 className="subtitle">{data[this.props.index].subtitle}</h3>
        <p className="desc">{data[this.props.index].desc}</p>
      </div>  
      
      );
  }
}

class Carousel extends Component {

  constructor(props) {
    super(props);
    this.state ={
      imgn:0
    };
    this.nextSlide=this.nextSlide.bind(this);
    this.prevSlide=this.prevSlide.bind(this);
  }
 prevSlide() {

  if(index==0)
      index=3;
    else 
      index=index-1;
       this.setState({imgn:index});
 }

  nextSlide() {
   
    if(index>=data.length-1)
      index=0;
    else 
      index=index+1;
       this.setState({imgn:index});
  }
  componentDidMount() {
   // this.interval=setInterval(()=>this.nextSlide(),6000);
   {
    alert("Hello");

    document.getElementById("imgp").classList.toggle("active");


   }
 
   const jqueryscript= document.createElement("script");
   jqueryscript.src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
  jqueryscript.async = true;
 document.body.appendChild(jqueryscript);
  }
  componentWillUnmount() {
   // clearInterval(this.interval);
  }

  render() {
    return (
      <div className="Carousel">
        <button className="prev" onClick={this.prevSlide}>prev</button>
        
          <ImageSection index={this.state.imgn}/>
       
        <button className="next" onClick={this.nextSlide}>next</button>
      </div>

    );
  }
}

export default Carousel;
