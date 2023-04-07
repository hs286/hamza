import React from "react";
import Product from "./product";

const ShopDetailComponent = ({ service }) => {
  return <>{service && <Product service={service} />}</>;
};

export default ShopDetailComponent;
