import React, { Component } from 'react';
import axios from 'axios';

class NewProduct extends Component {
    constructor(props) {
		super(props);
		this.state = {
            name: "",
            brand: "",
            form: "",
            category: "",
            price: 0,
            description: "",
            descriptionBullets: "",
            direction: "",
            quantity: "",
            ingredients: "",
            warnings: "",
            image: "",
            popular: false,
        }
    }
    _createProduct = () => {
        var categoryArray = this.state.category.split('~');
        var descriptionArray = this.state.description.split('~');
        var descriptionBulletsArray = this.state.descriptionBullets.split('~');
        var ingredientsArray = this.state.ingredients.split('~');
        axios.post('http://localhost:5000/api/product/add', {
            name: this.state.name,
            brand: this.state.brand,
            form: this.state.form,
            category: categoryArray,
            price: this.state.price,
            description: descriptionArray,
            descriptionBullets: descriptionBulletsArray,
            direction: this.state.direction,
            quantity: this.state.quantity,
            ingredients: ingredientsArray,
            warnings: this.state.warnings,
            image: this.state.image,
            popular: this.state.popular,
        });
    }

    render() {
        return(
            <div className = "Page-length"> 
                <h3>Create New User</h3>
                <form onSubmit={()=> this._createProduct()}>
                <label htmlFor="name">name: </label>
                <input id="name" type="text" required onChange={(e) => this.setState({name:e.target.value})}/>
                <br/>
                <label htmlFor="brand">brand: </label>
                <input id="brand" type="text" onChange={(e) => this.setState({brand:e.target.value})}/>
                <br/>
                <label htmlFor="form">form: </label>
                <input id="form" type="text" onChange={(e) => this.setState({form:e.target.value})}/>
                <br/>
                <label htmlFor="category">category: </label>
                <input id="category" type="text" onChange={(e) => this.setState({category:e.target.value})}/>
                <br/>
                <label htmlFor="price">price: </label>
                <input id="price" type="text" onChange={(e) => this.setState({price:e.target.value})}/>
                <br/>
                <label htmlFor="description">description: </label>
                <input id="description" type="text" onChange={(e) => this.setState({description:e.target.value})}/>
                <br/>
                <label htmlFor="descriptionBullets">description bullets: </label>
                <input id="descriptionBullets" type="text" onChange={(e) => this.setState({descriptionBullets:e.target.value})}/>
                <br/>
                <label htmlFor="direction">direction: </label>
                <input id="direction" type="text" onChange={(e) => this.setState({direction:e.target.value})}/>
                <br/>
                <label htmlFor="quantity">quantity: </label>
                <input id="quantity" type="text" onChange={(e) => this.setState({quantity:e.target.value})}/>
                <br/>
                <label htmlFor="ingredients">ingredients: </label>
                <input id="ingredients" type="text" onChange={(e) => this.setState({ingredients:e.target.value})}/>
                <br/>
                <label htmlFor="warnings">warnings: </label>
                <input id="warnings" type="text" onChange={(e) => this.setState({warnings:e.target.value})}/>
                <br/>
                <label htmlFor="image">image: </label>
                <input id="image" required type="text" onChange={(e) => this.setState({image:e.target.value})}/>
                <br/>
                <label htmlFor="popular">popular: </label>
                <select name="popular" onChange={(e) => this.setState({popular: e.target.value})}>
                    <option value="" selected>Is the product popular</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <br/>
                <input type="submit" value="submit"/>
                </form>
            </div>
        );
    };
};

export default NewProduct;