import Hero from "./Components/Hero";
import Companies from "./Components/Companies";
import Services from "./Components/Services";
import Achievement from "./Components/Achievement";
import Categories from "./Components/Categories";
import Feedback from "./Components/Feedback";
import CTA from "./Components/CTA";
import './landing.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Landing() {
  return (
    <div className="container_class_landing">
      <Navbar />
      <Hero />
      <Companies />
      <Services />
      <Achievement />
      <Categories />
      <Feedback />
      <CTA />
      <Footer />
    </div>
  );
}

export default Landing;
