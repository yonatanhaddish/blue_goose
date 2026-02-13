import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import Landingpage from "./components/LandingPage";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landingpage />
      <Services />
    </>
  );
}
