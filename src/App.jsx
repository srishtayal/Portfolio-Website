import { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // fake loading progress
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-hidden">
      {!isReady && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white font-light transition-opacity duration-700">
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {progress}%
          </p>
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      <div
        className={`transition-opacity duration-1000 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />
        <Hero />
        <ServiceSummary />
        <About />
        <Works />
        <ContactSummary />
        <Contact />
      </div>
    </ReactLenis>
  );
};

export default App;
