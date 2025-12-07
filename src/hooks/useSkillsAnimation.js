import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const useSkillsAnimation = (ref) => {
  useEffect(() => {
    const ctx = gsap.context((self) => {
      const select = self.selector;
      gsap.fromTo(
        select(".skill-grid > *"),
        {
          opacity: 0,
          rotateY: 90,
          rotateZ: -10,
          y: 60,
          scale: 0.8,
        },
        {
          opacity: 1,
          rotateY: 0,
          rotateZ: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "expo.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: select(".skill-grid"),
            start: "top 70%",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [ref]);
};
export default useSkillsAnimation;
