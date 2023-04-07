import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Services from "../components/products";
import { useSelector, useDispatch } from "react-redux";
import { getServices } from "../redux/actions/serviceActions";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import { TabTitle } from "../helpers/TabTitle";

const ServicesProduct = () => {
  const dispatch = useDispatch();
  let { category } = useParams();
  TabTitle(`${category.toUpperCase()} - Zoom Flooring`);

  const campaigns = useSelector((state) => state?.service?.services);
  useEffect(() => {
      dispatch(getServices(category));
  }, [category,dispatch]);
  return (
    <>
      <Navbar />
      <Services products={campaigns} />
      <Footer />
    </>
  );
};

export default ServicesProduct;
