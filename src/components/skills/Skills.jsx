import { useRef } from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
};

const Skills = () => {
    const ref = useRef();
    const isInView = useInView(ref, {margin: "-100px" });

  return (
    <motion.div 
    className="skills" 
    variants={variants} 
    initial="initial" 
    // animate="animate"
    // whileInView="animate"
    ref={ref}
    animate={isInView && "animate"}
    // animate={"animate"}
    >
        <motion.div className="textContainer" variants={variants}>
            <p>
                I am a full stack developer
                <br /> and a product manager

            </p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    Power<motion.b whileHover={{ color: "orange" }}> Skills</motion.b>
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>Business
                </h1>
                <button>What We Do?</button>
            </div>
            </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Front-end</h2>
                <div class="tag-container">
                    <span className="tag">JavaScript</span>
                    <span className="tag">TypeScipt</span>
                    <span className="tag">React.js</span>
                    <span className="tag">Next.js</span>
                    <span className="tag">Angular.js</span>
                    <span className="tag">Tailwinc CSS/SASS/CSS/Bootstrap</span>
                    <span className="tag">Ant Design</span>
                    <span className="tag">HTML</span>
                </div>
                </motion.div>
                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Back-end</h2>
                <div class="tag-container">
                    <span className="tag">Node.js</span>
                    <span className="tag">Express.js</span>
                    <span className="tag">MySQL</span>
                    <span className="tag">MongoDB</span>
                    <span className="tag">Firebase</span>
                    <span className="tag">Java</span>
                    <span className="tag">Spring/Springboot</span>
                    <span className="tag">Python</span>
                </div>
                </motion.div>
                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Builds/Tools</h2>
                <div class="tag-container">
                <span className="tag">Vercel</span>
                <span className="tag">Vite</span>
                    <span className="tag">Git</span>
                    <span className="tag">AWS3</span>
                    <span className="tag">Google Cloud</span>
                    <span className="tag">Postman</span>
                    <span className="tag">Figma</span>

                    <span className="tag">JIRA/Confluence</span>
                </div>
                </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Skills;