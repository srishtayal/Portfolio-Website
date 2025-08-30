import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `A Pre-Final Year Student at NSUT, Delhi
  passionate about development, 
  full-stack apps & ai-ml`;
  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <AnimatedHeaderSection
        subTitle={"frequently fatigued flamingo"}
        title={"Srishti Tayal"}
        text={text}
        textColor={"text-black"}
      />
    </section>
  );
};

export default Hero;
