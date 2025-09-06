import React from "react";

export default function ParallaxSection({ image, title, subtitle, speed, overlay, children }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        position: "relative",
        minHeight: "500px",
      }}
      className={overlay ? "parallax-overlay" : ""}
    >
      <div className="parallax-content" style={{ position: "relative", zIndex: 2 }}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        {children}
      </div>
    </div>
  );
}