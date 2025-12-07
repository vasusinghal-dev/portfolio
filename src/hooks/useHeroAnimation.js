import { useEffect } from "react";
import gsap from "gsap";

const useHeroAnimation = (ref) => {
  useEffect(() => {
    const ctx = gsap.context((self) => {
      const tl = gsap.timeline();
      const select = self.selector;

      tl.fromTo(
        select(".hero-badge"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
        .fromTo(
          select(".hero-title"),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          select(".hero-subtitle"),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        )

        .fromTo(
          select(".hero-cta > *"),
          { opacity: 0 },
          { opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" },
          "-=0.2"
        )
        .fromTo(
          select(".hero-stats > *"),
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" },
          "<"
        )

        .fromTo(
          select(".hero-social > *"),
          { opacity: 0, scale: 0.7 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            stagger: 0.1,
            ease: "power2.out",
          }
        );
    }, ref);

    return () => ctx.revert();
  }, [ref]);
};

export default useHeroAnimation;
