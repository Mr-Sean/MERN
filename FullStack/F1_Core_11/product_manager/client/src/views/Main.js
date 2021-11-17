import React, { useState, useEffect } from "react";
import axios from "axios";
import { Router, navigate } from "@reach/router";
import ProductForm from "../components/ProductForm";
import DisplayAll from "../components/DisplayAll";

const Main = (props) => {
  const [productList, setProductList] = useState([]);
  // const [submissionDummy, setSubmissionDummy] = useState(false);
  
    return (
        <div>
          <ProductForm 
            productList={productList} 
            setProductList={setProductList} />
            {/* submissionDummy={submissionDummy} 
            setSubmissionDummy={setSubmissionDummy} /> */}
            <hr />
          <DisplayAll 
            productList={productList} 
            setProductList={setProductList} />  
            {/* submissionDummy={submissionDummy} 
            setSubmissionDummy={setSubmissionDummy} />   */}
        </div>
    );
};
    
export default Main;