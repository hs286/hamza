import React, { useEffect, useState } from "react";
import SelectUSState from "react-select-us-states";
import PhoneInput from "react-phone-input-2";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addOrderDetails } from "../../../redux/actions/cartActions";

const Checkout = ({ cartProducts, token }) => {
  let total = 0;

  const dispatch = useDispatch();
  const [error] = useState({});
  const { name, email, phone, _id } = token;
  const [billingUser, setBillingUser] = useState(name);
  const [billingUserEmail, setBillingUserEmail] = useState(email);
  const [billingUserPhone, setBillingUserPhone] = useState(phone);
  const [billingUserAddressLine1, setBillingUserAddressLine1] = useState("");
  const [billingUserAddressLine2, setBillingUserAddressLine2] = useState("");
  const [billingUserCity, setBillingUserCity] = useState("");
  const [billingUserState, setBillingUserState] = useState();
  const [billingUserZipCode, setBillingUserZipCode] = useState("");

  useEffect(() => {
    if (billingUserState === undefined) {
      error.state = "Required";
    }
  }, [billingUserState, error]);
  cartProducts.map(
    (el) => (total = total + el.quantity * el.service.price.$numberDecimal)
  );
  const handleSubmit = (e) => {
    e.preventDefault();

    var addressDetails = {
      name: billingUser,
      email: billingUserEmail,
      phone: billingUserPhone,
      addressLine1: billingUserAddressLine1,
      addressLine2: billingUserAddressLine2,
      city: billingUserCity,
      state: billingUserState,
      zipCode: billingUserZipCode,
    };
    dispatch(addOrderDetails(addressDetails, _id));
  };
  const handlePhone = (phone) => {
    setBillingUserPhone(phone);
    if (phone?.length === 0) {
      error.phone = "Required";
    } else if (phone?.length < 10) {
      error.phone = "Incomplete number";
    } else {
      error.phone = "";
    }
  };
  const handleState = (state) => {
    setBillingUserState(state);
    error.state = "";
  };

  return (
    <>
      <div className="container-fluid bg-dark mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "300px" }}
        >
          <h1 className="font-weight-semi-bold text-uppercase text-light mb-3">
            Checkout
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link to={"/"}>Home</Link>
            </p>
            <p className="px-2">-</p>
            <p>Checkout</p>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <form onSubmit={handleSubmit}>
          <div className="row px-xl-5">
            <div className="col-lg-8">
              <div className="mb-4">
                <h4 className="font-weight-semi-bold mb-4">Billing Address</h4>

                <div className="row">
                  <div className="col-md-6 form-group">
                    <label>Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="John"
                      value={billingUser}
                      onChange={(e) => setBillingUser(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-md-6 form-group">
                    <label>E-mail</label>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="example@email.com"
                      value={billingUserEmail}
                      onChange={(e) => setBillingUserEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Mobile No</label>
                    <PhoneInput
                      placeholder="Enter phone number"
                      inputClass="w-100 border-secondary"
                      onlyCountries={["us"]}
                      disableCountryCode={true}
                      country={"us"}
                      value={billingUserPhone}
                      onChange={handlePhone}
                    />
                    {error.phone && (
                      <h4 style={{ color: "red" }}>{error.phone}</h4>
                    )}
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Address Line 1</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="123 Street"
                      value={billingUserAddressLine1}
                      onChange={(e) =>
                        setBillingUserAddressLine1(e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Address Line 2</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="123 Street"
                      value={billingUserAddressLine2}
                      onChange={(e) =>
                        setBillingUserAddressLine2(e.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="col-md-6 form-group">
                    <label>City</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="New York"
                      value={billingUserCity}
                      required
                      onChange={(e) => setBillingUserCity(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label>State</label>
                    <SelectUSState
                      className="form-control"
                      onChange={handleState}
                    />
                    {error && <h4 style={{ color: "red" }}>{error.state}</h4>}
                  </div>
                  <div className="col-md-6 form-group">
                    <label>ZIP Code</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="123"
                      value={billingUserZipCode}
                      onChange={(e) => setBillingUserZipCode(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-secondary mb-5">
                <div className="card-header bg-secondary border-0">
                  <h4 className="font-weight-semi-bold m-0">Order Total</h4>
                </div>
                <div className="card-body">
                  <div className="row d-flex justify-content-between ">
                    <div className="col-lg-7 col-4 ">
                      <h4>
                        <b className="text-primary">Product</b>
                      </h4>
                    </div>
                    <div className="col-lg-3 col-5 ">
                      <h4>
                        <b className="text-primary">Quantity</b>
                      </h4>
                    </div>
                    <div className="col-lg-2 col-3">
                      <h4>
                        <b className="text-primary">Price</b>
                      </h4>
                    </div>
                  </div>
                </div>

                {cartProducts.map((product, index) => {
                  return (
                    <div className="card-body">
                      <div className="row d-flex justify-content-between">
                        <div className="col-lg-7 col-4">
                          <h4>
                            <b>{product.service.name}</b>
                          </h4>
                        </div>
                        <div className="col-lg-3 col-5 t">
                          <span>
                            <span>{product.service.price.$numberDecimal}</span>
                            <span> * </span>
                            <span>{product.quantity}</span>
                          </span>
                        </div>
                        <div className="col-lg-2 col-3">
                          <span>
                            {product.quantity *
                              product.service.price.$numberDecimal}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="card-footer bg-transparent">
                  <div className="d-flex justify-content-between mt-2">
                    <h4 className="font-weight-bold text-primary">Total</h4>
                    <h4 className="font-weight-bold text-info">$ {total}</h4>
                  </div>
                </div>
              </div>
              <div className="card border-secondary mb-5">
                <div className="card-header bg-secondary border-0">
                  <h4 className="font-weight-semi-bold m-0">Payment</h4>
                </div>
                <div className="card-body">
                  <div className="">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="payment"
                        id="banktransfer"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="banktransfer"
                      >
                        Bank Transfer
                      </label>
                    </div>
                  </div>
                </div>
                <div className="card-footer  bg-transparent">
                  <button
                    type="submit"
                    className="btn btn-lg btn-block btn-primary font-weight-bold my-3 "
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
