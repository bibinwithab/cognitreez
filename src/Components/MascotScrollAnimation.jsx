import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MascotScrollAnimation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div ref={ref} className="relative min-h-0 flex items-end">
      <motion.img
        src="mascot.png"
        alt="Mascot"
        className="absolute bottom-10 w-40 md:w-30"
        style={{ x }}
      />
    </div>
  );
};

export default MascotScrollAnimation;
