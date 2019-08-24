import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './Images/logo.png';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import AdminPage from './Pages/AdminPage';
import AboutPage from './Pages/AboutPage';
import ProductDetails from "./Pages/ProductCatalog/ProductDetails"

const Header = () => {
    return(
        <div> 
            <Router>
                <div className = "Header-bar">
                    <Link to="/" className = "Header-logolink"> <img src= {logo} alt="logo" className = "Header-logo"/> </Link>
                    <Link to="/Product" className = "Header-option"> Product </Link>
                    <Link to="/About" className = "Header-option"> About </Link>
                </div>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/Product/" component={ProductPage}/>
                <Route exact path="/Admin/" component={AdminPage}/>
                <Route exact path="/About/" component={AboutPage}/>
                <Route exact path="/Product/:name" component={ProductDetails}/>
            </Router>
        </div>
    );
};
export default Header;