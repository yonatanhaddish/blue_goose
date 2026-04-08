import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import Landingpage from "./components/LandingPage";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import OurWork from "./components/OurWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landingpage />
      <Services />
      <WhyUs />
      <OurWork />
      <Contact />
      <Footer />
    </>
  );
}
