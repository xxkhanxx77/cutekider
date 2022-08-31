import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Card, Grid } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { IProduct } from "../../interface/product";
import landingSquareImage1 from "/src/image/landing-page/landing-square-1.jpg";
import landingSquareImage2 from "/src/image/landing-page/landing-square-2.jpg";

const Product = () => {
  interface Props {
    product: any;
    key: number;
  }
  const items = [
    {
      name: "Random Name #1",
      price: 210,
      images: landingSquareImage1,
    },
    {
      name: "Random Name #1",
      price: 210,
      images: landingSquareImage2,
    },
    {
      name: "Random Name #1",
      price: 210,
      images: landingSquareImage2,
    },
    {
      name: "Random Name #1",
      price: 210,
      images: landingSquareImage2,
    },
    {
      name: "Random Name #1",
      price: 210,
      images: landingSquareImage2,
    },
  ];

  const Item = (props: Props) => {
    return (
      <Card key={props.key}>
        <img src={props.product.images} className="responsive"></img>
      </Card>
    );
  };

  return (
    <div className="OfficialStore">
      <h1>helloworld</h1>
    </div>
  );
};

export default Product;
