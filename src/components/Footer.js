import React, { Component } from 'react';

class Footer extends Component {

	render() {
		return(

            <footer id="site-footer" className="bd-footer text-muted">
                <div className="container-fluid p-3 p-md-5">
                    <ul className="bd-footer-links">
                        <li className="github">
                            <a href="#" className="fab">&#xf09b;</a>
                        </li>                                                    
                        <li className="facebook">
                            <a href="#" className="fab">&#xf39e;</a>
                        </li>
                        <li className="instagram">
                            <a href="#" className="fab">&#xf16d;</a>
                        </li>
                        <li className="twitter">
                            <a href="#" className="fab">&#xf099;</a>
                        </li>                           
                    </ul>
                    <p>Designed and built by <a href="#">@GKyryliuk</a></p>
                    <p>Copyright &copy; 2018</p>
                </div>
            </footer>        

	    )
	}
}

export default Footer;