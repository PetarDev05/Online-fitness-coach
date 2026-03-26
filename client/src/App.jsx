import Navbar from "./components/Navbar.components.jsx";
import Hero from "./pages/Hero.pages.jsx";
import Testimonials from "./pages/Testimonials.pages.jsx";
import AboutMe from "./pages/AboutMe.pages.jsx";
import Programs from "./pages/Programs.pages.jsx";
import Contact from "./pages/Contact.pages.jsx";
import Footer from "./components/Footer.components.jsx";
import { Toaster } from "react-hot-toast";
import Menu from "./components/Menu.components.jsx";

const App = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Menu />
      <Hero />
      <Testimonials />
      <AboutMe />
      <Programs />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
