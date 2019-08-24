import React from 'react';
import NewProduct from "../ProductChangeForms/NewProduct";
//import DeleteProduct from "../ProductChangeForms/DeleteProduct";
//import UpdateProduct from "../ProductChangeForms/UpdateProduct";
import ProductList from "./ProductCatalog/ProductList";
const AdminPage = () => {
    
    return(
        <div className = "Page-length">
            <NewProduct/>
            <ProductList/>
        </div>
    );
};

export default AdminPage;