import { Branding } from "./components/Branding";
import { BulletPoints } from "./components/BulletPoints";
import { CallToAction } from "./components/CallToAction";
import { Features } from "./components/Features";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Branding />
      <Features />
      <CallToAction />
      <BulletPoints />
      <CallToAction minify />
    </>
  );
}

export default App;
