import { Fragment, useEffect, useState } from "react";
import { Carousel } from "antd";
import carouselData from "./carouselData.json"
import Card from "./Card";
export default function CarouselCard() {
  const carouselStyle = {
    height: "300px",
    width:"1000px",
    color: "#f1f1f1",
    lineHeight: "160px",
    textAlign: "center",
  };
  return (
    <Fragment>
      <Carousel autoplay style={carouselStyle}>
        {carouselData.map((data, index)=>(
          <Card data={data} key ={index} id={index} />
        )) }
      </Carousel>
    </Fragment>
  );
}