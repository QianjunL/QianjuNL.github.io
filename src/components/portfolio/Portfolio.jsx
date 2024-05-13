import "./portfolio.scss";
import React from 'react';
import heroImage from "/stars.png";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title: "Full-stack Ecommerce System",
        video: "https://youtu.be/Zi6eDqfxZwU",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illo sint necessitatibus cum asperiores quisquam saepe voluptatem in vitae similique, incidunt consectetur maxime enim neque suscipit eaque expedita? Voluptate, nemo.",
        url:"https://github.com/QianjunL/ecommerce-front",
        
    },
    {
        id: 2,
        title: "MERN Doctor Appointment Website",
        img: heroImage,
        desc: "Key Accomplishments: A full-stack website including registration and login modules, user information management, 2 sets of separate access controls, and a booking and payment system.",
        tech: "Technology stack: React, Express.js, MongoDB, Node.js, Tailwind CSS, Cloudinary, Stripe",
        url: "https://github.com/Cheryl-LL",
    },
    {
        id: 3,
        title: "Blog app",
        img: heroImage,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illo sint necessitatibus cum asperiores quisquam saepe voluptatem in vitae similique, incidunt consectetur maxime enim neque suscipit eaque expedita? Voluptate, nemo.",
        tech: "Angular.js, Firebase, ",
        url: "https://github.com/Cheryl-LL",
    },
    {
        id: 4,
        title: "Full-Stack Library Management System",
        img: heroImage,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illo sint necessitatibus cum asperiores quisquam saepe voluptatem in vitae similique, incidunt consectetur maxime enim neque suscipit eaque expedita? Voluptate, nemo.",
        tech: "react.js, node.js, MongoDB, ",
        url: "https://github.com/Cheryl-LL",
    },
    {
        id: 5,
        title: "Full stack library management system",
        img: heroImage,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illo sint necessitatibus cum asperiores quisquam saepe voluptatem in vitae similique, incidunt consectetur maxime enim neque suscipit eaque expedita? Voluptate, nemo.",
        url: "https://github.com/Cheryl-LL",
    },
    {
        id: 6,
        title: "Full stack library management system",
        img: heroImage,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illo sint necessitatibus cum asperiores quisquam saepe voluptatem in vitae similique, incidunt consectetur maxime enim neque suscipit eaque expedita? Voluptate, nemo.",
        url: "https://github.com/Cheryl-LL",
    },
];

const Single = ({item}) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer"  ref={ref} >
                <video src={item.video} autoPlay muted loop/>
                </div>
                <motion.div 
                className="textContainer"
                style= {{ y }} 
                >
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <p>{item.tech}</p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
              <button>Github Code</button>
            </a>

                </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar">
            </motion.div>
        </div>
        {items.map(item =>(
            <Single item={item} key ={item.id}/>
        ))}
    </div>
  )
};

export default Portfolio;

