import Navbar from "./components/Navbar";
import Landingpage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
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
      <AboutUs />
      <Services />
      <WhyUs />
      <OurWork />
      <Contact />
      <Footer />
    </>
  );
}
