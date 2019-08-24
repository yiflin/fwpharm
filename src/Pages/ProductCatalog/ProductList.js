import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//view of the products being displayed
const ProductItem = (props) => {
  const url= "/Product/" + props.product.name;
  return(
    <div className="ProductList-container">
      <Link className="ProductList-card" to={url}>
        <div className="ProductList-description"> 
          {props.product.description.map((description,index)=>
          <div key={index}>{description} </div>
          )}
          </div>
        <img className="ProductList-image" src={props.product.image} alt="product"/>
        <p className="ProductList-price"> ${props.product.price} </p>
        <p className="ProductList-text"> {props.product.name} </p>
      </Link>
    </div>
  )
}

class ProductListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
        brandFilter: "",
        formFilter: "",
        categoryFilter: "",
        query: "",
        products: []
    };
  }

  //when component loads, gets products data from database and stores it in the array products, default sorted alphabetically
  componentDidMount() {
    axios.get('http://localhost:5000/api/product')
      .then(response => {
        this.setState({ products: response.data.sort((a,b)=> a.name.localeCompare(b.name)) })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  //populates the ProductItem after filetering with mapping
  productList() {
    return (
        <div>
            {this.state.products
            .filter((products) =>
            (this.state.brandFilter === "" || products.brand.includes(this.state.brandFilter)) &&
            (this.state.formFilter === "" || products.form.includes(this.state.formFilter)) &&
            (this.state.categoryFilter === "" || products.category.includes(this.state.categoryFilter)) &&
            (this.state.query === "" || products.name.toLowerCase().includes(this.state.query.toLowerCase()))
            )
            .map((products)=> 
                <ProductItem product={products} key={products._id}/>
            )}
        </div>
    )
  }

  //handles filter requests by updating state
  brandFiltering = event => this.setState({brandFilter: event.target.value})
  formFiltering = (event) => this.setState({formFilter: event.target.value})
  categoryFiltering = (event) => this.setState({categoryFilter: event.target.value})
  searchFiltering = (event) => this.setState({query: event.target.value})

  //handles sorting requests
  sort(event){
    if (event.target.value==="abc")
      {this.setState({products: this.state.products.sort((a,b)=> a.name.localeCompare(b.name))})}
    else if (event.target.value==="lowest first")
      {this.setState({products: this.state.products.sort((a,b)=> a.price-b.price)})}
    else if (event.target.value==="highest first")
      {this.setState({products: this.state.products.sort((a,b)=> b.price-a.price)})}
  }


  render() {

    //options to filter the products being displayed
    const brandSelect=(
      <select className="ProductList-filteroption" onChange={(e)=>this.brandFiltering(e)}
      defaultValue="">
        <option value="" disabled> Brands </option>
        <option value=""> All </option>
        <option value="Pure Encapsulations"> Pure Encapsulations</option>
      </select>
    )
    const formSelect=(
      <select className="ProductList-filteroption" onChange={(e)=>this.formFiltering(e)}
      defaultValue="">
        <option value="" disabled> Form </option>
        <option value=""> All</option>
        <option value="Capsule"> Capsule</option>
        <option value="Softgel"> Softgel</option>
        <option value="Liquid"> Liquid</option>
      </select>
    )
    const categorySelect=(
      <select className="ProductList-filteroption" size="1" onChange={(e)=>this.categoryFiltering(e)}
      defaultValue="">
        <option value="" disabled> Category </option>
        <option value=""> All</option>
        <option value="Antioxidant"> Antioxidant </option>
      </select>
    )

    //options to sort the products displayed
    const sort=(
        <select className="ProductList-filteroption" onChange={(e)=>(this.sort(e))}>
          <option value="abc"> Sort by Name </option>
          <option value="lowest first"> Lowest price first </option>
          <option value="highest first"> Highest price first </option>
        </select>
    )

    return (
      <div className="Page-length">

        <div className="ProductList-head">
          <h1 className="ProductList-title"> Products</h1>
        </div>
        <br/>

        <div className="ProductList-filter">
          {brandSelect}
          {formSelect}
          {categorySelect}
          {sort}
          {/* allows user to filter product name based on input*/}
          <input className="ProductList-filterinput" onChange={(e)=>this.searchFiltering(e)}
          placeholder="Search for products"/>
        </div>

        <br/>

        <div className="ProductList-all">
          {this.productList()}
        </div>
        <br/><br/><br/>
      </div>
    )
  }
}

export default ProductListing;