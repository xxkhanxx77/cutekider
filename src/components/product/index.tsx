import { Card, CardMedia, Grid, makeStyles } from "@mui/material";
import { useState } from "react";
import EX1 from "/src/image/product/ex1.jpg";
import EX2 from "/src/image/product/ex2.png";
import Preview1 from "/src/image/product/preview1.jpeg";
import Preview2 from "/src/image/product/preview2.jpeg";

const Product = () => {
  return (
    <div className="Product">
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <img src={EX1} />
        </Grid>
        <Grid item xs={8}>
          <img src={EX2} />{" "}
        </Grid>
        <Grid item xs={8}>
          <Card>
            <CardMedia component="img" image={EX1} />
          </Card>{" "}
        </Grid>
        <Grid item xs={8}>
          <Card>
            <CardMedia component="img" image={EX2} />
          </Card>{" "}
        </Grid>
      </Grid>
    </div>
  );
};

export default Product;
