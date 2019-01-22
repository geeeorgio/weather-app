import React, { Component } from 'react';
//import { UncontrolledCarousel } from 'reactstrap';
import { data, items } from '../data.js';
import shortid from 'shortid';
//import { apiCall } from '../api';
import { WeatherTable, City, D } from './Weather';

//const Carousel = (props) => <div className="x"><UncontrolledCarousel items={props.car} /></div>;


const MainContent = (props) => {

    return(
            <div className="x"> 
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Fluid jumbotron</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>
            </div> 
        
    )
}

const WeatherDesk = (props) => {

    const desk = props.list;

    return(
            <div className="x">
                <div className="row">

                {desk.map(item =>  
                    <div key={shortid.generate()} className="col-sm-6 col-md-4 col-lg-2">        
                        <div className="card text-center">
                            <img className="card-img-top" src={item.img} alt="weather" />
                            <div className="card-body">
                                <h5 className="card-title">{item.day}</h5>
                                <p className="card-text">{item.temp}&#8451;</p>
                                <p className="card-text">{item.icon}</p>
                            </div>
                        <div className="card-footer">
                            <small className="text-muted">{item.state}</small>
                        </div>   
                        </div> 
                    </div>
                )}  

                </div>                  
            </div>
    )
}

class Main extends Component {
    constructor(props) {
    super(props);
        this.state = {
        	weather: [],
        	pics: [],       	
        }	    
    }

    getWeather() {
    	this.setState({ weather: data, pics: items })
    }

    componentWillMount() {
    	this.getWeather();    	
    }

	render() {

		return (

            <div className="row">
                <div className="col" role="main">
                               
                    <City vin={this.props.data} />  
                    <D w={this.props.data} />             
                    <WeatherTable wea={this.props.data} />

                    <MainContent /> 
                    <WeatherDesk list={this.state.weather} />
                    {/*<Carousel car={this.state.pics} />*/}
                </div>    
            </div>              
          
	    )
	}
}

export default Main;

