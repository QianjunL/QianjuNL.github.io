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

const fTags = [
    { name: "JavaScript", percentage: 90 },
    { name: "React", percentage: 80 },
    { name: "Next.js", percentage: 80 },
    { name: "Angular", percentage: 80 },
    { name: "Tailwind CSS/SASS/CSS/Bootstrap", percentage: 80 },
    { name: "HTML", percentage: 80 },
    { name: "TypeScript", percentage: 70 },
    { name: "React Native", percentage: 70 },
];

const bTags = [
    { name: "Node.js", percentage: 90 },
    { name: "Express.js", percentage: 80 },
    { name: "MySQL", percentage: 80 },
    { name: "MongoDB", percentage: 80 },
    { name: "Firebase", percentage: 80 },
    { name: "Java", percentage: 70 },
    { name: "Spring/Springboot", percentage: 70 },
    { name: "Python", percentage: 50 },
];

const tTags = [
    { name: "Vercel", percentage: 60 },
    { name: "Vite", percentage: 60 },
    { name: "Git", percentage: 80 },
    { name: "AWS3", percentage: 70 },
    { name: "Google Cloud", percentage: 70 },
    { name: "Postman", percentage: 70 },
    { name: "Figma", percentage: 90 },
    { name: "JIRA/Confluce", percentage: 90 },
    { name: "Linux", percentage: 60 },
];

const Skills = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div 
            className="skills" 
            variants={variants} 
            initial="initial" 
            ref={ref}
            animate={isInView && "animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>
                    I am a full stack developer
                    <br /> and a product manager
                </p>
                <hr />
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
                        <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business
                    </h1>
                    {/* <button>What I Do?</button> */}
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Front-end</h2>
                    <ul>
                        <li>
                            <p>Complete exposure to JavaScript MERN programming and experience in multiple full-stack web applications.</p>
                        </li>
                        <li>
                            <p>Fluent in React, Next.js and related tools for web development, familiar with Angular.js, UI frameworks such as Ant Design, Element UI, etc. and the use of various CSS preprocessors and post-processors.</p>
                        </li>
                        <li>
                            <p>Familiar with using React Native to build Android applications.</p>
                        </li>
                    </ul>

                    <div className="tag-container">
                        {fTags.map((tag, index) => (
                            <div className="tag" key={index}>
                                <div className="progress-bar" style={{ width: `${tag.percentage}%` }}>
                                    <span className="percentage">{tag.percentage}%</span>
                                </div>
                                <span className="tag-name">{tag.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Back-end</h2>
                    <ul>
                        <li>
                            <p>Fluent in using Node.js and Express.js for building server-side applications, with RESTful API development, HTTP request, etc.</p>
                        </li>
                        <li>
                            <p>Familiar with databases like MySQL, MongoDB and Firebase for data management such as CRUD operations, schema design, etc.</p>
                        </li>
                        <li>
                            <p>Experienced with using Java Spring/Spring Boot to create efficient applications, including data structures, RESTful APIs, etc.</p>
                        </li>
                    </ul>
                    <div className="tag-container">
                        {bTags.map((tag, index) => (
                            <div className="tag" key={index}>
                                <div className="progress-bar" style={{ width: `${tag.percentage}%` }}>
                                    <span className="percentage">{tag.percentage}%</span>
                                </div>
                                <span className="tag-name">{tag.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Builds/Tools</h2>
                    <ul>
                        <li>
                            <p>Familiar with packaging and front-end application optimization with common build tools such as Vite.</p>
                        </li>
                        <li>
                            <p>Fluent in Agile (scrum) development methodology and process, with the ability to move from prototyping to front-end and back-end development. </p>
                        </li>
                        <li>
                            <p>Fluent in Figma and other design tools to create project prototypes, write product documentation, buried documents to actual development and on-line development.</p>
                        </li>
                    </ul>
                    <div className="tag-container">
                        {tTags.map((tag, index) => (
                            <div className="tag" key={index}>
                                <div className="progress-bar" style={{ width: `${tag.percentage}%` }}>
                                    <span className="percentage">{tag.percentage}%</span>
                                </div>
                                <span className="tag-name">{tag.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Skills;
