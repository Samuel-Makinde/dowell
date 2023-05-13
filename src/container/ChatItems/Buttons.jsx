
import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import ProductContext from "../ContextProvider/DataContext";
import "./button.css";
// import $ from "jquery";
const Buttons = () => {
  // $(document).ready(function () {
  //   if (!$.browser.webkit) {
  //     $(".wrapper").html("<p>Sorry! Non webkit users. :(</p>");
  //   }
  // });

  // const [productList, setProductList] = useState([])
  const [productList] = useContext(ProductContext)    

    

  return (
    <div className="d-flex flex-nowrap">
      
      <div className="d-flex flex-nowrap gap-2 scroll text-nowrap py-3">
        
          {productList && productList.map(product => <button key={product} type="button" className="btn btn-sm btn-success">{product}</button>)}
      </div>
      </div>
  )
}
 

export default Buttons;
