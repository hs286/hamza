import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { deleteCartService } from "../../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const Cart = ({ cartProducts }) => {
  const dispatch = useDispatch();
  var total = 0;
  const deleteServiceInCart = (id) => {
    dispatch(deleteCartService(id));
  };
  cartProducts.map(
    (el) => (total = total + el.quantity * el.service.price.$numberDecimal)
  );

  return (
    <>
      <div className="container-fluid pt-5">
        <div className="pt-5">
          <p className="mb-0">
            <Link to={"/services"} className="text-body">
              <i className="fas fa-long-arrow-alt-left me-2"></i>Back to shop
            </Link>
          </p>
        </div>
        <div className="row px-xl-5">
          <div className="col-lg-8">
            <div className="p-5">
              <div className="d-flex justify-content-between align-items-center mb-5">
                <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
              </div>
              <hr className="my-4" />
              <>
                {cartProducts.map((el) => {
                  return (
                    <div
                      key={el.service._id}
                      className="row mb-4 d-flex justify-content-between align-items-center cart-border cart-border-sides-2"
                    >
                      <div className="col-md-2 col-lg-2 col-xl-2">
                        <Image
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                          src={`${process.env.REACT_APP_API}/images/${el.service.image}`}
                          alt={el.service.name}
                        />
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="text-muted">Name</p>
                        <p className="text-black mb-0">{el.service.name}</p>
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-2">
                        <p className="text-muted">Quantity</p>
                        <p className="text-black mb-0">{el.quantity}</p>
                      </div>
                      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <p className="text-muted">Price</p>

                        <p className="mb-0">
                          ${el.quantity * el.service.price.$numberDecimal}
                        </p>
                      </div>
                      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <i
                          className="fas fa-times"
                          onClick={() => deleteServiceInCart(el.service._id)}
                        ></i>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          </div>
          <div className="col-lg-4 col-12" style={{ placeSelf: "end" }}>
            <div className="card border-secondary">
              <div
                className="card-header  border-0"
                style={{ backgroundColor: "#d19c97" }}
              >
                <h4 className="font-weight-semi-bold  mt-5">Cart Summary</h4>
              </div>

              <div className="card-footer border-secondary bg-transparent">
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="font-weight-bold">Total</h5>
                  <h5 className="font-weight-bold">{total}</h5>
                </div>
                {total !== 0 ? (
                  <Link to={"/login"}>
                    <button className="btn btn-block btn-primary w-100 my-3 py-3">
                      Proceed To Checkout
                    </button>
                  </Link>
                ) : (
                  <p>Nothing added to cart</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
