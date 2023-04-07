import React, { useEffect } from "react";
import Service from "../components/services-component";
import Navbar from "../components/navbar";
import { useSelector, useDispatch } from "react-redux";
import { getServiceById } from "../redux/actions/serviceActions";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";

function ServicesProductDetails() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const service = useSelector((state) => state?.service?.service?.data);

  useEffect(() => {
    
      dispatch(getServiceById(id));
     
  }, [dispatch, id]);

  return (
    <>
      <Navbar />
      {service && <Service service={service} />}
      <Footer />
    </>
  );
}

export default ServicesProductDetails;
