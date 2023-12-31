import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

//@ts-ignore
import { getProducts, currency } from "./product";
//@ts-ignore
import { addToCart, useLoggedIn } from "cart/cart";

export default function HomeContent() {
  const loggedIn = useLoggedIn();
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map((product) => (
        <div key={product.id}>
          {/* <Link to={`/product/${product.id}`}> */}
            <img src={product.image} alt={product.name} />
          {/* </Link> */}
          <div className="flex">
            <div className="flex-grow font-bold">
              {/* <Link to={`/product/${product.id}`}> */}
                <a>{product.name}</a>
              {/* </Link> */}
            </div>
            <div className="flex-end">{currency.format(product.price)}</div>
          </div>
          <div className="text-sm mt-4">{product.description}</div>
          {loggedIn && (
            <div className="text-right mt-2">
              <button
                className="bg-green-900 text-white py-2 px-5 rounded-md text-sm mt-5"
                onClick={() => addToCart(product.id)}
                id={`addtocart_${product.id}`}
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}