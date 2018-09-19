import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../App.css';

class Navbar extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top ">
            <div className="container-fluid">
            <Link to ='/' className="navbar-brand" >Nadia Canteen</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item" ><Link className="nav-link active" to="/">Home <span className="sr-only">(current)</span></Link></li>
                    <li className="nav-item" ><Link className="nav-link" to="/about">About Us</Link></li>
                    <li className="nav-item" ><Link className="nav-link" to="/">Pricing</Link></li>
                </ul>
            </div>
            </div>
          </nav>
      </div>
    );
  }
}

export default Navbar;
