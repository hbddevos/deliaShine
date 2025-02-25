import Creator from "./components/Creator";
import Faq from "./components/Faq";
import Galerie from "./components/Galerie";
import Hero from "./components/Hero";
import HowToUse from "./components/HowToUse";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Why from "./components/Why";
import Links from "./components/Links";
import RippleCursor from "./section/RippleCursor.jsx";
import FollowCursor from "./section/FollowCursor.jsx";

function App() {
  return (
    <>
      {/*<RippleCursor />*/}
      <FollowCursor />
      <Navbar />
      <Hero />

      <Why />

      <Creator />
      <Products />
      <HowToUse />
      <Galerie />
      <Faq />
      <Links />
    </>
  );
}

export default App;
