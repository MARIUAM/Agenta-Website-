// Typewriter.tsx
"use client";

import { useState, useEffect } from "react";

type TypewriterProps = {
  text: string;
  speed?: number;
  className?: string;
};

export default function Typewriter({ text, speed = 100, className = "" }: TypewriterProps) {
  // initial state کو خالی string سے شروع کریں
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      // اگر text[index] موجود ہے تو append کریں
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <span className={className}>{displayedText}</span>;
}
