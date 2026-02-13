"use client";

import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaMobileAlt,
  FaChartLine,
  FaCogs,
} from "react-icons/fa";

const servicesData = [
  {
    title: "Web Development",
    description:
      "Custom, high-performance websites tailored to your business needs using the latest technologies.",
    icon: <FaCode size={35} />,
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive and visually stunning user interfaces that provide seamless experiences for your customers.",
    icon: <FaPaintBrush size={35} />,
  },

  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications designed for performance and user engagement.",
    icon: <FaMobileAlt size={35} />,
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your search engine rankings and visibility to attract more organic traffic.",
    icon: <FaChartLine size={35} />,
  },
  {
    title: "Technical Support",
    description:
      "Ongoing maintenance and support to ensure your digital assets run smoothly and securely.",
    icon: <FaCogs size={35} />,
  },
];

const style = {
  section: {
    padding: { xs: "60px 20px", md: "100px 100px" },
    backgroundColor: "#001e3c", // Dark blue background for better contrast
    textAlign: "center",
    width: "100%",
    overflow: "hidden", // Prevents horizontal scroll on small screens
  },
  header: {
    marginBottom: "60px",
  },
  title: {
    fontWeight: "800",
    fontSize: { xs: "28px", md: "42px" },
    color: "#ffffff", // White text for dark background
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#b0bec5", // Light grey for readability
    maxWidth: "700px",
    margin: "0 auto",
  },
  card: {
    border: "solid  3px",
    padding: "40px 30px",
    height: "100%",
    display: "flex",
    // flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "16px",
    backgroundColor: "#ffffff",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)", // Slightly stronger shadow
    transition: "all 0.3s ease-in-out",
    cursor: "default",
    border: "1px solid transparent",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: "0px 15px 30px rgba(100, 181, 246, 0.2)", // Light blue glow on hover
      borderColor: "#64b5f6",
      "& .icon-box": {
        backgroundColor: "#0048BB",
        color: "white",
      },
    },
    // width: "80%",
  },
  iconBox: {
    backgroundColor: "#F4F7FC",
    padding: "20px",
    borderRadius: "50%",
    marginBottom: "25px",
    color: "#0048BB",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: "20px",
    marginBottom: "15px",
    color: "#0d0d0d",
  },
  cardDesc: {
    color: "#555",
    lineHeight: 1.6,
    fontSize: "15px",
  },
};

function Services() {
  return (
    <Box sx={style.section} id="services">
      <Box sx={style.header}>
        <Typography sx={style.title}>
          Our <span style={{ color: "#64b5f6" }}>Services</span>
        </Typography>
        <Typography sx={style.subtitle}>
          We offer a wide range of digital solutions to help your business grow
          and succeed in the modern era.
        </Typography>
      </Box>

      <Grid
        container
        spacing={4}
        sx={{
          //   border: "solid red 2px",
          width: {
            xs: "100%",
            xl: "100%",
          },
          "@media (min-width:2560px)": {
            width: "90%",
          },
          margin: "0 auto",
        }}
      >
        {servicesData.map((service, index) => (
          <Grid
            item
            key={index}
            sx={{
              //   border: "solid green 2px",
              display: "flex",
              flexWrap: "wrap",
              //   flexDirection: "column",
              width: {
                xs: "100%",
                sm: "70%",
                md: "70%",
                lg: "30%",
                xl: "25%",
              },
              // maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <Paper elevation={0} sx={style.card} style={{ width: "100%" }}>
              <Box className="icon-box" sx={style.iconBox}>
                {service.icon}
              </Box>
              <Typography sx={style.cardTitle}>{service.title}</Typography>
              <Typography sx={style.cardDesc}>{service.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Services;
