import React from "react";
import { Button, Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeComoponet = ({ homeData }) => {
  var des = [];
  console.log()
  homeData.map((slide) => (des = slide.description.split("\n")));
  return (
    <>
      <div className="container">
        {homeData &&
          homeData.map((slide) => {
            return (
              <div className="row " key={slide._id}>
                <h1 className="text-center  bg-secondary text-dark ">
                  {slide.category}
                </h1>
                <div className="col-lg-6 col-12" data-aos="flip-right">
                  <Carousel>
                    {slide.image.map((e) => (
                      <Carousel.Item style={{ height: "32rem" }} key={e}>
                        <Image
                          style={{ width: "100%", height: "100%" }}
                          src={`${process.env.REACT_APP_API}/images/${e}`}
                          alt={e}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
                <div className=" col-lg-6 col-12" data-aos="fade-up">
                  <>
                  <p>{slide.description}</p>
                  <p className="text-info fs-4">
                            <b>Get A Quote</b>
                          </p>
                   
                    <Link to={"/contact"}>
                      <Button variant="secondary" className="fs-5">
                        Contact Us
                      </Button>
                    </Link>
                  </>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default HomeComoponet;
