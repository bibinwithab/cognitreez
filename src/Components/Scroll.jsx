import { motion, useScroll } from "motion/react";

const Scroll = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      id="scroll"
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 10,
        originX: 0,
        backgroundColor: "#0077B5",
        zIndex: 1000,
      }}

    ></motion.div>
  );
};

export default Scroll;
