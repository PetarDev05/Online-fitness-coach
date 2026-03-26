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
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: "8px",
            fontSize: "14px",
          },
          success: {
            style: {
              background: "#16a34a",
              color: "#ffffff",
            },
          },
          error: {
            style: {
              background: "#dc2626",
              color: "#ffffff",
            },
          },
        }}
      />
    </div>
  );
};

export default App;
