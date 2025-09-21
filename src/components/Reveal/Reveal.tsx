"use client";

import React, {useEffect, useRef, useState} from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
};

export const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.15,
  once = true,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const element = containerRef.current;
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && element) observer.unobserve(element);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { root: null, rootMargin, threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return (
    <div
      ref={containerRef}
      className={`reveal${isVisible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
};


