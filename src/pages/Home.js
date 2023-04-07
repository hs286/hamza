import React, { useEffect } from "react";
import HomeComoponet from "../components/home-comoponet";
import Navbar from "../components/navbar";
import { useSelector, useDispatch } from "react-redux";
import { getHomeData } from "../redux/actions/serviceActions";
import Footer from "../components/footer";
import { TabTitle } from "../helpers/TabTitle";
import Loader from "../helpers/Loader";

function Home() {
  TabTitle("Zoom Flooring");
  const dispatch = useDispatch();
  const homedata = useSelector((state) => state?.service?.homeData);

  useEffect(() => {
    if (homedata.length === 0) {
      dispatch(getHomeData());
    }
  }, [homedata, dispatch]);

  return (
    <>
      <Navbar />
      {homedata.length === 0 && <Loader />}
      {homedata && <HomeComoponet homeData={homedata} />}
      <Footer />
    </>
  );
}

export default Home;
