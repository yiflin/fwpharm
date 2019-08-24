import React, { Component } from 'react';
import SherriPic from '../Images/Sherri.JPG';
import ZawPic from '../Images/Zaw.JPG';
import BoPic from '../Images/Bo.JPG';
import GoogleMaps from './GoogleMaps/GoogleMaps';

const aboutPharmacy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet justo donec enim diam vulputate ut pharetra sit amet. Habitant morbi tristique senectus et netus et. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. At tellus at urna condimentum mattis pellentesque id nibh. Feugiat pretium nibh ipsum consequat nisl vel. Amet massa vitae tortor condimentum. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Malesuada fames ac turpis egestas maecenas pharetra. Leo in vitae turpis massa sed elementum tempus. Fringilla urna porttitor rhoncus dolor purus non enim. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien."
const sherriSynopsis = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet justo donec enim diam vulputate ut pharetra sit amet. Habitant morbi tristique senectus et netus et. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. At tellus at urna condimentum mattis pellentesque id nibh. Feugiat pretium nibh ipsum consequat nisl vel. Amet massa vitae tortor condimentum. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Malesuada fames ac turpis egestas maecenas pharetra. Leo in vitae turpis massa sed elementum tempus. Fringilla urna porttitor rhoncus dolor purus non enim. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien.";
const buSynopsis = "Vulputate eu scelerisque felis imperdiet proin. Ultrices dui sapien eget mi. Curabitur gravida arcu ac tortor. Nulla facilisi cras fermentum odio eu feugiat. Ultricies lacus sed turpis tincidunt id aliquet risus. In massa tempor nec feugiat nisl pretium fusce id velit. Condimentum mattis pellentesque id nibh tortor id aliquet. At tellus at urna condimentum mattis pellentesque. Aliquam sem fringilla ut morbi. At lectus urna duis convallis convallis tellus id. Diam donec adipiscing tristique risus nec feugiat in fermentum.";
const boSynopsis = "Eget aliquet nibh praesent tristique magna. Quis vel eros donec ac odio. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Quis varius quam quisque id. Cursus euismod quis viverra nibh. Sociis natoque penatibus et magnis dis parturient montes nascetur. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Vestibulum morbi blandit cursus risus at. Magna etiam tempor orci eu lobortis. Consequat ac felis donec et odio pellentesque. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Tortor condimentum lacinia quis vel eros. Ornare quam viverra orci sagittis eu. Eget arcu dictum varius duis at. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Morbi blandit cursus risus at ultrices. Ornare massa eget egestas purus viverra accumsan. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla.";
const synopsisArray = [sherriSynopsis, buSynopsis, boSynopsis];

var imageStyle1 = {
    filter: 'grayscale(0)'
};
var imageStyle2;
var imageStyle3;

class AboutPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            synopsisNum: 0,
        }
      }
    
    grayscaleFilter(num) {
        if (num ===0) {
            imageStyle1 = {
                filter: 'grayscale(0)'
            }
            imageStyle2={};
            imageStyle3={};
        }
        if (num ===1) {
            imageStyle2 = {
                filter: 'grayscale(0)'
            }
            imageStyle1={};
            imageStyle3={};
        }
        if (num ===2) {
            imageStyle3 = {
                filter: 'grayscale(0)'
            }
            imageStyle1={};
            imageStyle2={};
        }
    }

    updateSelection(num) {
        this.grayscaleFilter(num);
        this.setState ({
            synopsisNum: num
        })
    }

    render() {
        return(
            <div className = "Page-length">
                <div>
                    <div className="About-head">
                        <h1 className = "About-title"> Fresh Wellness Pharmacy </h1>
                        <p className = "About-storeparagraph"> {aboutPharmacy} </p>
                    </div>

                    <div className = "About-picturecontainer">
                        <h1 className="About-title">Meet our team</h1>
                        <button onClick={() => this.updateSelection(0)} style={imageStyle1} className="About-button">
                            <img className = "About-picture" src={SherriPic} alt="SherriPicture"/>
                        </button>
                        <button onClick={() => this.updateSelection(1)} style={imageStyle2} className="About-button">
                            <img className = "About-picture" src={ZawPic} alt="ZawPicture"/>
                        </button>
                        <button onClick={() => this.updateSelection(2)} style={imageStyle3} className="About-button">
                            <img className = "About-picture" src={BoPic} alt="BoPicture"/>
                        </button>
                        <p className="About-synopsis"> {synopsisArray[this.state.synopsisNum]} </p>
                    </div>

                    <div>
                        <h1 className="About-title">Location</h1>
                        <h3 style={{textAlign: "center", fontFamily:"Arial"}}>18417 Colima Rd</h3>
                        <h3 style={{textAlign: "center", fontFamily:"Arial", color:"gray"}}> Rowland Heights, CA </h3>
                    </div>
                    <GoogleMaps/>
                <br/><br/><br/>
                </div>
            </div>
        );
    };
};

export default AboutPage;