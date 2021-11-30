import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { RenderSectionHeading } from "../common/commonComponent";
import { useStyles } from "./BodyStyles";

import image1 from "../../images/5-2.jpg";
import image2 from "../../images/5-3.jpg";
import image3 from "../../images/5-4.jpg";
import image4 from "../../images/5-6.jpg";
import image5 from "../../images/5-8.jpg";
import image6 from "../../images/5-9.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export default function Portfolio() {
  const classes = useStyles();

  const portfolioData = [
    { url: image1, title: " Online Course Site", link: "https://kind-kilby-2ca320.netlify.app/" },
    { url: image2, title: "Parcel Delivery Application", link: "https://travel-project-22c96.web.app/" },
    { url: image3, title: "Car Shop Application", link: "https://car-shop-7283d.web.app/" },
    { url: image4, title: "# Portfolio ", link: "" },
    { url: image5, title: "# Portfolio ", link: "" },
    { url: image6, title: "# Portfolio ", link: "" },
  ];

  const handleLink=(item) =>{

    // console.log('clicked');
    // portfolioData.map(item=> console.log(item.link));
    // portfolioData.map(item=> window.open(item.link, '_blank'));
    window.open(item.link,'_blank');
    
  }
  return (
    <Box className={classes.sectionDark} id='Portfolio'>
      <ScrollAnimation animateIn='fadeIn'>
        <Grid
          container
          style={{
            displa: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}>
          <Grid item xs={12} sm={8}>
            {RenderSectionHeading({
              smallText: "Portfolio",
              heading: "Let's See My Work",
              alignCenter: true,
            })}
          </Grid>
        </Grid>
        {/* imge section  */}

        <Container maxWidth='xl'>
          <Grid container spacing={2}>
            {portfolioData.map((item, i) => (
              <Grid item xs={6} sm={6} lg={4} key={i}>
                <Box className={classes.imageContainer}>
                  <img
                  style={ {width:"100%",
                  minHeight:"40vh",
                maxHeight: "40vh"}}
                    src={item.url}
                    alt={item.title}
                    className={classes.responsiveImg}
                  />
                  <Box className={classes.imageOverlay}>
                    <Typography className={classes.overlayTitle}>
                      {item.title}
                    </Typography>

                    <Button onClick={()=>{handleLink(item)}} variant='contained'>Visit</Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
