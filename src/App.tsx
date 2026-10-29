import { useEffect } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Project from "./components/projects/Project";
import Skill from "./components/skills/Skill";
import "./index.css";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // const trigger = ScrollTrigger.create({
    //   snap: {
    //     snapTo: (progress) => {
    //       const sections = gsap.utils.toArray<HTMLElement>("section");

    //       const maxScroll =
    //         document.documentElement.scrollHeight - window.innerHeight;

    //       if (maxScroll <= 0) return progress;

    //       const snapPoints = sections.map(
    //         (section) => section.offsetTop / maxScroll,
    //       );

    //       return gsap.utils.snap(snapPoints, progress);
    //     },
    //     duration: {
    //       min: 0.3,
    //       max: 0.8,
    //     },
    //     ease: "power2.out",
    //     directional: true,
    //   },
    // });

    return () => {
      // gsap.ticker.remove(update);
      // trigger.kill();
      lenis.destroy();
    };
  }, []);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-w-screen"
      style={{ backgroundImage: "url('/sky.jpg')" }}
    >
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
