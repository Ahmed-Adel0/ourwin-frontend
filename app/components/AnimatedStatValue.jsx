"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export default function AnimatedStatValue({ value, duration = 2000 }) {
  const [displayValue, setDisplayValue] = useState("0");
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  const animateValue = useCallback(() => {
    // Extract number and suffix from value (e.g., "200+", "420K", "100%")
    const match = value.match(/^(\d+)([+%KMB]?)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const numValue = parseInt(match[1]);
    const suffix = match[2] || "";

    const increment = numValue / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numValue) {
        setDisplayValue(numValue + suffix);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current) + suffix);
      }
    }, 16);
  }, [value, duration]);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            animateValue();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasStarted, animateValue]);

  return <span ref={ref}>{displayValue}</span>;
}
