import React, { useState, useEffect } from "react";

function AnimatedText({ text = "", speed = 100 }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (typeof text !== "string" || !text.length) {
      console.error("Invalid text prop received:", text); // Log errors
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => (text[index] ? prev + text[index] : prev));
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayText}</span>;
}

export default AnimatedText;
