"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const WobbleCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  /* This code snippet is a React functional component named `WobbleCard` that creates an interactive
  card effect. Let's break down the relevant parts: */
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const /* `handleMouseMove` is a function that is triggered when the mouse moves over the interactive
  card component. It calculates the position of the mouse relative to the center of the card
  and updates the `mousePosition` state accordingly. This allows the card to respond to the
  mouse movement by adjusting its position based on the mouse's coordinates, creating a
  wobbling effect. */
    handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
      const { clientX, clientY } = event;
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (clientX - (rect.left + rect.width / 2)) / 20;
      const y = (clientY - (rect.top + rect.height / 2)) / 20;
      setMousePosition({ x, y });
    };
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1.05, 1.05, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.1s ease-out",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
