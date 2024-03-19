import Hero from "./Components/Hero";
import Companies from "./Components/Companies";
import Services from "./Components/Services";
import Achievement from "./Components/Achievement";
import Categories from "./Components/Categories";
import Feedback from "./Components/Feedback";
import CTA from "./Components/CTA";
import './landing.css';

function Landing() {
  return (
    <div className="container_class_landing">
      <Hero />
      <Companies />
      <Services />
      <Achievement />
      <Categories />
      <Feedback />
      <CTA />
    </div>
  );
}

export default Landing;
