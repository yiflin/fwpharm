import React from 'react';
import HomeScreen from '../Images/store1.jpeg';

const HomePage = () => {
    return(
        <div className = "Page-length"> 
            <img className = "Home-img" src={HomeScreen} alt="homescreen"/>
        </div>
    );
};

export default HomePage;