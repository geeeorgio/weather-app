import React from 'react';
import shortid from 'shortid';
import { urlStart, urlEnd, day, weekday, convertKelvinToCelsius } from '../api';
import { Table, CardImgOverlay, Card, CardImg, CardText, CardTitle, } from 'reactstrap';

const WeatherTable = (props) => {

    if(props.wea) {
        const x = props.wea.city;
        const y = props.wea.list;  
       
        return(
                <div className="x">
                <Table id="weather-table" className="table table-lg table-md table-sm table-responsive-md table-striped table-light table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Day</th>
                            <th>Weather Info</th>
                            <th>Exact time</th>
                            <th>Right now</th>
                            <th>Icon</th>
                            <th>Temperaure</th>
                            <th>Humidity</th>
                            <th>Wind speed</th>
                        </tr>
                    </thead>
                    <tbody>
                    {y.map(item =>                         
                        <tr key={shortid.generate()}>
                            <th scope="row">{day(item.dt_txt)}</th>
                            <td>{item.weather[0].main}</td>
                            <td>{item.dt_txt.slice(10,16)}</td>
                            <td>{item.weather[0].description}</td>
                            <td><img src={urlStart+item.weather[0].icon+urlEnd} alt="icon"/></td>
                            <td>{Math.round(convertKelvinToCelsius(item.main.temp))}&#8451;</td>
                            <td>{item.main.humidity}&#37;</td>   
                            <td>{item.wind.speed} m/s</td>
                        </tr>
                    )}  
                    </tbody>
                </Table>
                </div>
             
        )}
        
        return(  
            null
       )
}

const D = (props) => {

    if(props.w) {
        const x = props.w.city;
        const y = props.w.list;
        
        return(
                
            <div className="x">
                
                {weekday(y).map(d => 
                
                <div key={shortid.generate()} className="card-deck">

                    {d.map(item =>      

                        <div key={shortid.generate()} className="card text-center">
                        <img className="card-img-top" src={urlStart+item.weather[0].icon+urlEnd} alt="icon"/>
                            <div className="card-body">
                                <h5 className="card-title">{day(item.dt_txt)}</h5>
                                <p className="card-text">{item.dt_txt}</p>
                                <p className="card-text">{item.weather[0].main}</p>
                                <p className="card-text">{item.dt_txt.slice(10,16)}</p>
                                <p className="card-text">{item.weather[0].description}</p>
                                <p className="card-text">{Math.round(convertKelvinToCelsius(item.main.temp))}&#8451;</p>
                            </div>  
                            <div className="card-footer">
                                <p><small className="text-muted">Humidity: {item.main.humidity}&#37;</small></p>   
                                <p><small className="text-muted">Wind: {item.wind.speed} m/s</small></p>
                            </div>                   
                        </div>
                        
                    )}

                </div>

                )}  

            </div>    
             
        )}              
        
        return(  
            null
        )
}

const City = (props) => {
    
    if(props.vin) {
        const vn = props.vin.city.name;
        const current = props.vin.list[0];
        const tomorrow = props.vin.list[8];
        const temperature = Math.round(convertKelvinToCelsius(current.main.temp)); 
        const temp = Math.round(convertKelvinToCelsius(tomorrow.main.temp));
    
    return(

            <div className="x">
                <div className="row">
                    <div className="col-lg-3 col-md-2"></div>
                    <div className="col-sm-12 col-md-8 col-lg-6">
                        <div className="card text-white"> 
                            <img className="card-img" src={process.env.PUBLIC_URL + '/image/back.png'} alt="Card image cap" />               
                            <div className="card-img-overlay">
                                <h5 className="card-title">{vn}</h5>                    
                                <p className="card-text">{temperature}&#8451;</p>
                                <p className="card-text">{current.weather[0].main}</p>
                                <img src={urlStart+current.weather[0].icon+urlEnd} alt="icon"/> 
                                <p className="card-text text-muted">Wind speed: {current.wind.speed} m/s</p>
                                <p className="card-text text-muted">{current.dt_txt}</p>
                            </div>                                                
                        </div>  
                    </div>
                    <div className="col-lg-3 col-md-2"></div>
                </div> 
            </div>  
    )
    } 

    return ( 
        null 
    )

}

export {
    WeatherTable,
    City,
    D,
};    

/*
   <div className="col-lg-1">
        *<div className="vertical-divider"></div>*
    </div> 
*/