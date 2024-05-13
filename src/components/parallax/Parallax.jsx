import { useRef } from "react";
import "./parallax.scss";
import { color, motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({type}) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "400%"])

  return (
    <div 
    className="parallax" 
    ref={ref}
    style={{ 
        background: type === "skills"
          ? "linear-gradient(180deg, #111132, #505064)"
          : type === "experience"
          ? "linear-gradient(180deg, #111132, #0c0c1d)"
          : "linear-gradient(180deg, #111132, #505064)"
      }}
    >

    <motion.h1 style={{ y: yBg }}>  
    {type === "skills"
      ? "Skills"
      : type === "portfolio"
      ? "Portfolio"
      : "Experience"}
    </motion.h1>
    <motion.div className="mountains"></motion.div>
    <motion.div 
    className="planets" 
    style={{
      y: yBg,
      backgroundImage: 
      `url(${type === "skills" ? "/sun.png" : type === "experience" ? "/planets.png" : "/sun.png"})`
      
    }}></motion.div>
    <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  )
}

export default Parallax;