import React, { useEffect } from "react";
import Cart from "../components/billing/cart";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useDispatch, useSelector } from "react-redux";
import { getCartServices } from "../redux/actions/cartActions";
import { TabTitle } from "../helpers/TabTitle";

const Index = () => {
  TabTitle("CART - Zoom Flooring");
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state?.service?.cartProducts);

  useEffect(() => {
    dispatch(getCartServices());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      {cartProducts && <Cart cartProducts={cartProducts} />}
      <Footer />
    </>
  );
};

export default Index;
