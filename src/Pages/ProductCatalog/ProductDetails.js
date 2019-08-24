import React, { Component } from 'react';
import axios from 'axios';

class ProductDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentProduct: {},
            ingredientsIsOpen: false,
            warningsIsOpen: false,
        };
      }

    //on component load, grabs current product based on product name
    componentDidMount() {
        const target = this.props.location.pathname.split("/")[2];
        axios.get('http://localhost:5000/api/product/' + target)
        .then(response => {
            this.setState({currentProduct: response.data},()=>console.log(response.data));
        })
        .catch((error) => {
            console.log(error);
        })
    }

    //maps out array elements
    arrayParser = (arrayToParse) => {
        var items=(
            arrayToParse.map((array, index)=> 
            <div key={index}> {array} </div>
            )
        )
        return items
    }

    //maps out array with comma separator
    arrayParserSameLine = (arrayToParse) => {
        var items=(
            arrayToParse.map((array, index)=>
            <div className="ProductDetails-category" key={index}> {array}, </div>
            )
        )
        return items
    }

    //maps out array with bullet points
    listParse = (listArray) => {
        var lists = (
            listArray.map((list, index)=> 
            <li key={index}>{list}</li>
            )
        )
        return lists
    }

    //toggles whether ingredients and warnings should render
    toggleIngredients = () => this.setState({ingredientsIsOpen: !this.state.ingredientsIsOpen})
    toggleWarnings = () => this.setState({warningsIsOpen: !this.state.warningsIsOpen})

    render() {

        //ingredients/warnings list renders based on state
        var ingredientsList=(
            this.state.ingredientsIsOpen ?
            <div className="ProductDetails-ingredients">
                {this.listParse(this.state.currentProduct[0].ingredients)}
            </div>
            : ""
        )
        var warningsList=(
            this.state.warningsIsOpen ?
            <div className="ProductDetails-warnings">
                {this.state.currentProduct[0].warnings}
            </div>
            : ""
        )

        //+or- sign based on state
        var ingredientSymbol=(
            !this.state.ingredientsIsOpen ?
            <div className="ProductDetails-symbolopen"></div>
            :<div className="ProductDetails-symbolclose"></div>
        )
        var warningSymbol=(
            !this.state.warningsIsOpen ?
            <div className="ProductDetails-symbolopen"></div>
            :<div className="ProductDetails-symbolclose"></div>
        )

        //details will load when state is updated with current product
        var details = (
            this.state.currentProduct.length>0 ?
            <div>
                <hr/>
                <div className="ProductDetails-info">
                    <h1> {this.state.currentProduct[0].name} </h1>
                    <h4> {this.state.currentProduct[0].brand} </h4>
                    <div> {this.arrayParser(this.state.currentProduct[0].description)} </div>
                    <ul className="ProductDetails-bullet">
                        {this.listParse(this.state.currentProduct[0].descriptionBullets)}
                    </ul>
                    <div> 
                        <b>Directions: </b>
                        {this.state.currentProduct[0].direction} 
                    </div> <br/>
                    <div>
                        <b>Category: </b>
                        {this.arrayParserSameLine(this.state.currentProduct[0].category)}
                    </div>
                    <p className="ProductDetails-pricequantity">
                        <b>Price: </b>
                        ${this.state.currentProduct[0].price}
                        ({this.state.currentProduct[0].quantity})
                    </p>
                </div>

                <img className="ProductDetails-image" src={this.state.currentProduct[0].image} alt="product"/>
                <hr className="ProductDetails-under"/>

                <div className="ProductDetails-textexpand">
                    <button className="ProductDetails-buttonexpand" onClick={this.toggleIngredients}>
                        Ingredients
                        {ingredientSymbol}
                    </button>
                    {ingredientsList}
                </div>
                <hr className="ProductDetails-under"/>

                <div className="ProductDetails-textexpand">
                    <button className="ProductDetails-buttonexpand" onClick={this.toggleWarnings}> 
                        Warnings
                        {warningSymbol}
                    </button>
                    {warningsList}
                </div>
                <hr className="ProductDetails-under"/>
                
            </div>
            :""
        )

        return(
            <div className = "Page-length">
                {details}
                <br/><br/><br/>
            </div>
        );
    };
};

export default ProductDetails;