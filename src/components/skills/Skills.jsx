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
    },
  },
};

const fTags = [
  { name: "JavaScript", percentage: 90 },
  { name: "React", percentage: 90 },
  { name: "Redux", percentage: 80 },
  { name: "Next.js", percentage: 80 },
  { name: "Angular", percentage: 70 },
  { name: "CSS", percentage: 80 },
  { name: "Tailwind CSS", percentage: 90 },
  { name: "SCSS", percentage: 80 },
  { name: "HTML", percentage: 90 },
  { name: "TypeScript", percentage: 80 },
  { name: "React Native", percentage: 70 },
];

const bTags = [
  { name: "CSharp", percentage: 80 },
  { name: "Java", percentage: 70 },
  { name: "Python", percentage: 70 },
  { name: "Node.js/Express.js", percentage: 90 },
  { name: "Express.js", percentage: 80 },
  { name: "Spring Boot", percentage: 70 },
  { name: "ASP.NET", percentage: 80 },
  { name: "Django", percentage: 70 },
  { name: "MySQL", percentage: 80 },
  { name: "MongoDB", percentage: 80 },
  { name: "PostgreSQL", percentage: 70 },
  { name: "MSSQL", percentage: 80 },
  { name: "Firebase", percentage: 70 },
];

const tTags = [
  { name: "Docker", percentage: 90 },
  { name: "Vercel", percentage: 60 },
  { name: "Vite", percentage: 60 },
  { name: "Git", percentage: 90 },
  { name: "AWS S3", percentage: 80 },
  { name: "Google Cloud", percentage: 80 },
  { name: "Postman", percentage: 70 },
  { name: "CI/CD", percentage: 80 },
  { name: "Figma", percentage: 90 },
  { name: "JIRA/Confluce", percentage: 90 },
  { name: "Linux", percentage: 80 },
  { name: "Cypress", percentage: 60 },
  { name: "Jest", percentage: 60 },
  { name: "Cucumber", percentage: 60 },
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
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Organization
          </h1>
          {/* <button>What I Do?</button> */}
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box">
          <h2>Front-end</h2>
          <ul>
            <li>
              <p>
                Proficient JavaScript MERN programming with experience in
                multiple full-stack applications.
              </p>
            </li>
            <li>
              <p>
                Fluent in React, Redux, Next.js and related tools for web
                development, familiar with UI frameworks such as Ant Design,
                Element UI, etc. and and various CSS tools such as Tailwind CSS,
                to implement aesthetic and responsive websites.
              </p>
            </li>
            <li>
              <p>
                Familiar with using React Native to build Android applications.
              </p>
            </li>
          </ul>

          <div className="tag-container">
            {fTags.map((tag, index) => (
              <div className="tag" key={index}>
                <div
                  className="progress-bar"
                  style={{ width: `${tag.percentage}%` }}
                >
                  <span className="percentage">{tag.percentage}%</span>
                </div>
                <span className="tag-name">{tag.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div className="box">
          <h2>Back-end</h2>
          <ul>
            <li>
              <p>
                Fluent in building server-side applications, including RESTful
                API design, user authentication and authorization, security, and
                third-party integrations.
              </p>
            </li>
            <li>
              <p>
                Fluent in NoSQL and relational databases with schema design,
                optimization and data management.
              </p>
            </li>
          </ul>
          <div className="tag-container">
            {bTags.map((tag, index) => (
              <div className="tag" key={index}>
                <div
                  className="progress-bar"
                  style={{ width: `${tag.percentage}%` }}
                >
                  <span className="percentage">{tag.percentage}%</span>
                </div>
                <span className="tag-name">{tag.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div className="box">
          <h2>Builds/Tools</h2>
          <ul>
            <li>
              <p>
                Fluent in Docker for containerization, and cloud platforms for
                infrastructure and file storage.
              </p>
            </li>
            <li>
              <p>
                Familiar with automated testing tools, with test case design and
                coverage.
              </p>
            </li>
            <li>
              <p>
                Fluent in Agile (scrum) development methodology and process,
                with managing sprints in JIRA.
              </p>
            </li>
            <li>
              <p>
                Fluent in Figma and other design tools to create project
                prototypes.
              </p>
            </li>
          </ul>
          <div className="tag-container">
            {tTags.map((tag, index) => (
              <div className="tag" key={index}>
                <div
                  className="progress-bar"
                  style={{ width: `${tag.percentage}%` }}
                >
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
};

export default Skills;
