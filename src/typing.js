import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const TypingEffect = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    // Clear previous typing effect
    setDisplayText("");

    // Start typing new text
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div>
      <p>{displayText}</p>
    </div>
  );
};

TypingEffect.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

export default TypingEffect;
