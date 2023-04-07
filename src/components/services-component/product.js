import React, { useState } from "react";
import { updateCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TabTitle } from "../../helpers/TabTitle";

const Product = ({ service }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { image, name, description, price, area, unit } = service;
  TabTitle(`${name.toUpperCase()} - Zoom Flooring`);
  const des = description.split("\n");
  const [quantity, setQuantity] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCart(service, quantity));
    navigate("/cart");
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-5 col-12 pb-5">
            <div>
              <div
                className="card h-100"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <Image
                  style={{ width: "100%", height: "500px" }}
                  src={`${process.env.REACT_APP_API}/images/${image}` || {}}
                />
              </div>
            </div>
          </div>

          <div
            className="col-lg-7 col-12 "
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <h3 className="font-weight-semi-bold">{name}</h3>
            <h4 className=" text-primary mb-4">
              ${price.$numberDecimal}{" "}
              <small className="text-dark">per {unit}</small>
            </h4>
            <>
              {des.map((e, index) => {
                if (e.length < 40) {
                  return (
                    <p key={index} className="text-primary">
                      {e}
                    </p>
                  );
                } else {
                  return <p key={index}>{e}</p>;
                }
              })}
            </>
            <form onSubmit={handleSubmit}>
              <div className=" mb-4 pt-2">
                <div className="form-outline mb-4">
                  <label className="form-label text-primary" htmlFor="Age">
                    <b>Quantity:</b>
                  </label>
                  <input
                    id="Age"
                    className="form-control fs-4"
                    type="number"
                    name="age"
                    placeholder={area.$numberDecimal}
                    value={quantity}
                    required
                    min={area.$numberDecimal}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary rounded  p-1 fs-4"
                >
                  <i className="fa fa-shopping-cart text-muted  mr-1"></i> Add
                  To Cart
                </button>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <label className="form-label text-primary" htmlFor="Age">
                  Total:
                  <small className="text-dark">
                    ${price.$numberDecimal * quantity}
                  </small>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
