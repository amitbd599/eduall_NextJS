"use client";
import { useEffect } from "react";
import counterUp from "counterup2";

const CounterUp = () => {
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting && !el.classList.contains("is-visible")) {
          counterUp(el, {
            duration: 2000,
            delay: 16,
          });
          el.classList.add("is-visible");
        }
      });
    };

    const observer = new IntersectionObserver(callback, { threshold: 1 });

    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => observer.observe(counter));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default CounterUp;
