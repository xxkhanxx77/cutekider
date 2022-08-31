import { Card, CardMedia, Grid, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

import landingSquareImage1 from "/src/image/landing-page/landing-square-1.jpg";
import landingSquareImage2 from "/src/image/landing-page/landing-square-2.jpg";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
import { display } from "@mui/system";

import dualProductFirst1 from "/src/image/product/1/IMG_8173.jpg";
import dualProductFirst2 from "/src/image/product/1/IMG_8174.jpg";
import dualProductFirst3 from "/src/image/product/1/IMG_8175.jpg";
import dualProductFirst4 from "/src/image/product/1/IMG_8176.jpg";
import dualProductFirst5 from "/src/image/product/1/IMG_8177.jpg";
import dualProductFirst6 from "/src/image/product/1/IMG_8178.jpg";

import productSeond1 from "/src/image/product/2/IMG_8179.jpg";
import productSeond2 from "/src/image/product/2/IMG_8101.jpg";
import productSeond3 from "/src/image/product/2/IMG_8102.jpg";
import productSeond4 from "/src/image/product/2/IMG_8104.jpg";
import productSeond5 from "/src/image/product/2/IMG_8180.jpg";
import productSeond6 from "/src/image/product/2/IMG_8184.jpg";

const LetOneSelfOn = () => {
  interface Props {
    image: any;
    key: number;
  }
  const items = [
    {
      id: "1",
      name: "OVERSIZED T-SHIRT NOTHING IS PERMANENT IN COTTON JERSEY",
      price: 790,
      images: [
        dualProductFirst1,
        dualProductFirst2,
        dualProductFirst3,
        dualProductFirst4,
        dualProductFirst5,
        dualProductFirst6,
      ],
    },
    {
      id: "2",
      name: "OVERSIZED T-SHIRT IM JUST ON MY ENERGY SAFE MODE IN COTTON JERSEY",
      price: 790,
      images: [
        productSeond1,
        productSeond2,
        productSeond3,
        productSeond4,
        productSeond5,
        productSeond6,
      ],
    },
  ];

  const Item = (props: Props) => {
    return (
      <img src={props.image} className="absolute object-cover w-full h-full" />
    );
  };

  return (
    <div className="OfficialStore">
      <Grid
        container
        rowSpacing={1}
        xs={12}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="px-4 pt-4"
      >
        {items.map((item) => {
          return (
            <Grid item xs={12} lg={6}>
              <div className="" key={item.id} id={item.id}>
                {RenderProductImage(item.id, item.price, item.name)}
              </div>
            </Grid>
          );

          function RenderProductImage(
            itemId: string,
            itemPrice: number,
            itemName: string
          ) {
            return (
              <div>
                <Card>
                  <Carousel
                    NextIcon={<KeyboardArrowRightIcon />}
                    PrevIcon={<KeyboardArrowLeftIcon />}
                    navButtonsAlwaysVisible={true}
                    cycleNavigation={false}
                    autoPlay={false}
                  >
                    {item.images.map((item, i) => (
                      <div className="relative h-96 ">
                        <img
                          src={item}
                          className="absolute object-cover w-full h-full"
                        />
                        {/* <Item image={item} key={i} /> */}
                      </div>
                    ))}
                  </Carousel>
                  <div className="flex flex-col m-4">
                    <div className="flex m-2 text-start">{itemName}</div>

                    <div className="flex m-2"> ฿ {itemPrice}</div>
                  </div>
                </Card>
              </div>
            );
          }
        })}
        {/* <Grid item xs={6}>
          <div className="">
            <Carousel
              NextIcon={<KeyboardArrowRightIcon />}
              PrevIcon={<KeyboardArrowLeftIcon />}
              navButtonsAlwaysVisible={true}
              cycleNavigation={false}
              autoPlay={false}
            >
              {items.map((item, i) => (
                <Item product={item} key={i} />
              ))}
            </Carousel>
          </div>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default LetOneSelfOn;
