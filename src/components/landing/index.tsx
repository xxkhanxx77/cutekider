import { Card, CardMedia, Grid } from "@mui/material";
import landingImage from "/src/image/landing-page/landing.jpeg";
import landingVideo from "/src/image/landing-page/landing.mp4";
import landingSquareImage1 from "/src/image/landing-page/landing-square-1.jpg";
import landingSquareImage2 from "/src/image/landing-page/landing-square-2.jpg";
import landingSquareImage3 from "/src/image/landing-page/landing-square-3.jpg";
import landingSquareImage4 from "/src/image/landing-page/landing-square-4.jpg";

const Landing = () => {
  return (
    <div className="Landing">
      <div className="video-section">
        <video
          autoPlay
          muted
          loop
          src={landingVideo}
          className={"video-landing"}
        />
      </div>
      <div className="rectangle-section">
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <img src={landingSquareImage3} className="responsive"></img>
          </Grid>
          <Grid item xs={8}>
            <img src={landingSquareImage4} className="responsive"></img>
          </Grid>
        </Grid>
      </div>
      <div className="squred-section">
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <img src={landingSquareImage1} className="responsive"></img>
          </Grid>
          <Grid item xs={8}>
            <img src={landingSquareImage2} className="responsive"></img>
          </Grid>
        </Grid>
      </div>
      <div className="footer-section">
        <img src={landingImage} className="responsive"></img>
      </div>
    </div>
  );
};

export default Landing;
