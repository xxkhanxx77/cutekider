import { Grid } from "@mui/material";
import GreenShirt from "/src/image/product/product1.jpeg";
import WhiteShirt from "/src/image/product/product2.jpeg";
const Product = () => {
  return (
    <div className="Product">
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <img src={GreenShirt} width={400}></img>
        </Grid>
        <Grid item xs={8}>
          <img src={WhiteShirt} width={400}></img>
        </Grid>
        <Grid item xs={8}>
          x
        </Grid>
        <Grid item xs={8}>
          x
        </Grid>
        <Grid item xs={8}>
          x
        </Grid>
        <Grid item xs={8}>
          x
        </Grid>
      </Grid>
    </div>
  );
};

export default Product;
