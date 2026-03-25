import Contact from "./pages/Contact.pages.jsx";
import Hero from "./pages/Hero.pages.jsx";
import { Toaster } from "react-hot-toast";
import Programs from "./pages/Programs.pages.jsx";
import Navbar from "./components/Navbar.components.jsx";

const App = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      {/* <Hero /> */}
      <Programs />
      <Contact />
      <Toaster />
    </div>
  );
};

export default App;
