import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar, Main, Footer, CityCard, NotFound } from './components/index';
import { apiCall } from './api';

class App extends Component {
	constructor(props) {
	super(props);
	    this.state = {
	    	city: false,
	    	forecast: false,
	    }
    this.handleCityId = this.handleCityId.bind(this);
	}

	handleCityId(id) {
        this.setState({ city: id }, () => this.getForecast());
    }
        
    getForecast() {
    	let x = this.state.city;
    	let y = x[0].id;
    	apiCall(y,(res) => res ? this.setState({ forecast: res.body }) : null)    
    }
    
    render() {
        return (
        
        <Router>
            <div id="app" className="site-container">
                <NavBar findId={this.handleCityId}/>
                <div id="content" className="container-fluid"> 
                    <Switch>
                        <Route exact path="/" render={ () => <Main data={this.state.forecast} />} />                        
                        <Route component={NotFound} />
                    </Switch>       
                </div>
                <Footer />                                            
            </div>     
        </Router>
        )
    }  
}

export default App;
