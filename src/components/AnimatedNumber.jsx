import React, { useEffect, useRef, useState } from "react";

export default function AnimatedNumber({ value, duration = 2000 }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const started = useRef(false);

  // Extract numeric part and suffix
  const match = value.toString().match(/^([^0-9]*)([0-9,.]*)([^0-9]*)$/);
  const prefix = match?.[1] || "";
  const numStr = match?.[2]?.replace(/,/g, "") || "";
  const suffix = match?.[3] || "";
  const num = parseFloat(numStr) || 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const progress = Math.min((Date.now() - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * num);
            const formatted = current.toLocaleString();
            setDisplay(formatted);
            if (progress < 1) requestAnimationFrame(tick);
            else setDisplay(num.toLocaleString());
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [num, duration]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}
