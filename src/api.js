import config from './config';
import request from 'superagent';

//city":{"id":689558,"name":"Vinnytsya}
//api.openweathermap.org/data/2.5/weather?id=2172797

//example of endpoint = 'data/2.5/weather?id=2172797';

//my App id = '&APPID=1b6c9c252440c4144a14c3d7c1159169';

//language example = 'data/2.5/weather?id=2172797&lang={lang}'

/*
   How to get icon URL
   For code 501 - moderate rain icon = "10d"
   Url is: 
   http://openweathermap.org/img/w/10d.png

*/
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const day = (dt_txt) => {
	if (dt_txt !== undefined) {
	    let x = dt_txt.slice(0,10);
	    let xx = x.split('-');	
	    let d = new Date(xx[0],xx[1]-1,xx[2]);

	    return days[d.getDay()];
	}    
}

const weekday = (y) => {
    let week = [[],[],[],[],[],[],[]];

    y.map(d => {
        if ( day(d.dt_txt) === 'Sunday' ) {
            week[0].push(d); 
        } if ( day(d.dt_txt) === 'Monday' ) {
            week[1].push(d);
        } if ( day(d.dt_txt) === 'Tuesday' ) {
            week[2].push(d);
        } if ( day(d.dt_txt) === 'Wednesday' ) {
            week[3].push(d);
        } if ( day(d.dt_txt) === 'Thursday' ) {
            week[4].push(d);
        } if ( day(d.dt_txt) === 'Friday' ) {
            week[5].push(d);
        } if ( day(d.dt_txt) === 'Saturday' ) {
            week[6].push(d);
        }
    })

    return week;
}

const convertKelvinToCelsius = (kelvin) => {
	if (kelvin < (0)) {
		return 'below absolute zero (0 K)';
	} else {
		return (kelvin-273.15);
	}
}

const urlStart = 'http://openweathermap.org/img/w/';

const urlEnd = '.png';

const apiCall = (cityId,cb) => {
		
    request('GET', config.API_URL + cityId  + "&APPID=1b6c9c252440c4144a14c3d7c1159169")
        .end((err, res) => {
		    if(!err) {
		        cb(res);
		    }
	    })	 
}   

export { 
	apiCall,
	urlStart,
	urlEnd,
	day,
	weekday,
	convertKelvinToCelsius, 
};