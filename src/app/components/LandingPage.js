"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { GiGoose } from "react-icons/gi"; // Reusing your icon for the visual

const style = {
  hero_box: {
    display: "flex",
    flexDirection: { xs: "column-reverse", md: "column-reverse", lg: "row" }, // Stack on mobile, side-by-side on desktop
    justifyContent: {
      xs: "center",
      sm: "center",
      md: "space-evenly",
      lg: "space-between",
      xl: "space-evenly",
    },
    alignItems: "center",
    padding: { xs: "40px 20px", md: "0 100px", lg: "0 100px" },
    minHeight: { xs: "90vh", sm: "90vh" },
    backgroundColor: "#F4F7FC", // Very light blue/grey tint
    border: {
      //   xs: "none",
      //   sm: "solid blue 10px",
      //   md: "solid red 10px",
      //   lg: "solid green 10px",
      //   xl: "solid red 10px",
    },
    "@media (min-width:2560px)": {
      border: "solid green 10px",
    },
  },
  content_box: {
    width: { xs: "100%", sm: "80%", md: "80%", lg: "50%", xl: "40%" },
    textAlign: { xs: "center", lg: "left" },
    marginBottom: { xs: "40px", md: "0" },
    // border: "solid red 2px",
  },
  image_box: {
    width: { xs: "100%", sm: "80%", md: "90%", lg: "45%", xl: "45%" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // border: "solid blue 2px",
    marginBottom: { xs: "40px", md: "0" },
    height: {
      xs: "200px",
      sm: "400px",
      md: "400px",
      lg: "350px",
      xl: "500px",
    },
  },
  headline: {
    fontWeight: "800",
    fontSize: { xs: "36px", md: "56px", lg: "50px", xl: "50px" },
    lineHeight: 1.2,
    color: "#0d0d0d",
    marginBottom: "20px",
  },
  subtext: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "30px",
    lineHeight: 1.6,
    fontWeight: "bold",
  },
  cta_button: {
    backgroundColor: "#0048BB",
    color: "white",
    fontWeight: "bold",
    padding: "12px 36px",
    fontSize: "16px",
    textTransform: "none",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#003388",
    },
  },
  placeholder_visual: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 72, 187, 0.1)", // Transparent version of your blue
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px dashed #0048BB",
  },
};

function Landingpage() {
  return (
    <Box sx={style.hero_box}>
      {/* Left Side: Text Content */}
      <Box sx={style.content_box}>
        <Typography sx={style.headline}>
          Elevate Your Business with{" "}
          <span style={{ color: "#0048BB" }}>Blue Goose</span>
        </Typography>
        <Typography sx={style.subtext}>
          We build premium digital solutions designed to help your brand fly
          higher. Experience modern design, robust performance, and tailored
          strategies.
        </Typography>
        <Button sx={style.cta_button} variant="contained" disableElevation>
          Get Started
        </Button>
      </Box>

      {/* Right Side: Visual/Image Placeholder */}
      <Box sx={style.image_box}>
        <Box sx={style.placeholder_visual}>
          {/* Using the Goose icon as a placeholder graphic */}
          <GiGoose size={150} color="#0048BB" />
        </Box>
      </Box>
    </Box>
  );
}

export default Landingpage;
