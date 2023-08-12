import React from "react";

//@ts-ignore
import MiniCart from "cart/MiniCart";
//@ts-ignore
import Login from "cart/Login";

export default function Header() {

    return (
    <div className="p-5 bg-blue-500 text-white text-3xl">
      <div className="flex">
        <div className="flex-grow">
          Fidget Spinner
        </div>
        <div>
          <MiniCart />
          <Login />
        </div>
      </div>
    </div>
    )

}