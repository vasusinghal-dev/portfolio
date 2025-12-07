import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useAboutAnimation = (ref) => {
  useEffect(() => {
    const ctx = gsap.context((self) => {
      const select = self.selector;

      gsap.fromTo(
        select(".about-qualities > *"),
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: select(".about-content"),
            start: "top center",
          },
        }
      );

      gsap.utils.toArray(".about-progress").forEach((bar) => {
        const targetWidth = bar.dataset.width;

        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: targetWidth,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar.closest(".card"),
              start: "top-=100 center+=100",
            },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, [ref]);
};

export default useAboutAnimation;
