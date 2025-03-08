"use client"
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  delay?: number;
}

export const TextGenerateEffect = ({
  words,
  className,
  delay=0
}: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    // Verzögere die Animation um 1 Sekunde
    setTimeout(() => {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(0.2),
        }
      );
    }, delay); // Verzögerung um 1 Sekunde
  }, [scope.current]);

  const renderWords = () => {
    return (
        <motion.div ref={scope}>
            {wordsArray.map((word, idx) => (
                <motion.span
                    key={`${word}-${idx}`}
                    className="dark:text-white text-black opacity-0"
                >
                    {word}{" "}
                </motion.span>
            ))}
        </motion.div>
    );
  };

  return (
    <div className={cn("font-bold text-3xl", className)}>
      <div className="mt-0">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
