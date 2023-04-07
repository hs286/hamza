import React from "react";
import { Link } from "react-router-dom";

function index({ products }) {
  return (
    <>
    <div className="heading">
          <h2 className="text-center fs-1">
           <b> {products[0]?.category}</b>
          </h2>
          <svg
            id="project-stroke"
            xmlns="http://www.w3.org/2000/svg"
            width="990.283"
            height="152.146"
            viewBox="0 0 655.283 262.146"
          >
            <path
              id="Path_1457"
              data-name="Path 1457"
              d="M18902.814,9541.726s-153.9-86.985-8.129-179.28,414.215-54.011,500.8-21.781,126.879,110.482-27.693,180.707-544.713-28.525-544.713-28.525"
              transform="translate(-18821.85 -9299.652)"
              fill="none"
              stroke="#d19c97"
              strokeLinecap="round"
              strokeWidth="12"
            ></path>
          </svg>
        </div>
      <div className="container">
        
        {products !== undefined && (
          <>
            <div>
              <div className="row ">
                {products.map((campaigns) => (
                  <React.Fragment key={campaigns._id}>
                    <div
                      className="col-md-4 col-12 mt-2 mb-4 "
                      data-aos="fade-up"
                    >
                      <Link
                        to={`/services/${campaigns.category}/${campaigns._id}`}
                      >
                        <div className="card services h-100 border-primary">
                          <div className="img-header">
                            <img
                              data-aos="zoom-in"
                              data-aos-duration="1000"
                              className="card-img-top"
                              src={`${process.env.REACT_APP_API}/images/${campaigns.image}`}
                              alt="Cardimagecap"
                            />
                          </div>
                          <div className="card-body">
                            <h3 className="card-title text-primary mt-3">
                              {campaigns.name}
                            </h3>
                            <p className="card-text"></p>
                            <p className="fw-bold">
                              <span className="fw-light "> Price: </span>$
                              {campaigns.price.$numberDecimal} for{" "}
                              {campaigns.unit}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default index;
