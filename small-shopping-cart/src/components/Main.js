import React from "react";
import Products from "./Products";

export default function Main(props) {
    const {products,onAdd}=props;
    return <main className="block col-2">
        <h2>Products</h2>
        <div className="row">
            {
                products.map((product)=>(
                    <Products key={product.id} product={product} onAdd={onAdd}></Products>
                ))
            }
        </div>

    </main>
}