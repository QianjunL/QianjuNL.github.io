

import React, { useRef } from 'react';
import "./experience.scss";
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const items = [
    {
      id: 1,
      title: "Product Manager",
      company_name: "QIMA",
      logo: "/qimalogo.jpeg",
      iconBg: "#383E56",
      date: "September 2021 - April 2023",
      points: [
        "Led and managed the order management system client website for the business line with $70M annual revenue, ensuring effective support to over 98 % of all business scenarios",
        "Led and delivered 40+ cross-functional software projects, achieving 100% on-time delivery",
        "Lead and worked in a scrum team of 6 members and hosted scrum planning and grooming meetings",
        "Prepared requirement documents, release plans and technical documents for over 10 IT projects, ensuring 100% goal achievement rate",
        "Managed customer expectations and improved customer satisfaction to 98% by ensuring high-priority troubleshooting solved within 1 day"
      ],
    },
    {
        id: 2,
      title: "Product Manager",
      company_name: "Smartmore",
      logo: "/smartmore-logo.jpeg",
      iconBg: "#E6DEDD",
      date: "Feburary 2020 - June 2021",
      points: [
        "Lead the delivery and iteration of the super-algorithm product and more than 10 AI projects",
        "Defined and led the development of product benchmarks 5 times faster than the original to 0.2s/frame through technical analysis, making #1 algorithm in the industry",
        "Identified and solved over 5 major bugs before the release of the super-algorithm product",
        "Completed the delivery of the company’s 1st AI project in one month by self-directedly learning computer vision AI technologies",
        "Conducted analysis reports including product flowcharts and business scenarios on major competitors to define product benchmarks"
        
      ],
    },
  ];

  export const variants = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,  
        },
      },
    };
  };

  const ExperienceCard = ({ item }) => {
    return (
      <div className='container'>
        <VerticalTimelineElement
          contentStyle={{
            background: "transparent",
            padding: "10px",
            boxShadow: "none",
          }}
          contentArrowStyle={{
            borderRight: "12px solid orange",
          }}
          date={item.date}
          iconStyle={{
            background: item.iconBg,
            overflow: "hidden",
          }}
          icon={<img src={item.logo} alt="" />}
        >
            
          <motion.div 
          className="textContainer" 
          variants={variants}
          >
            <h3>{item.title}</h3>
            <p>{item.company_name}</p>
          </motion.div>
          <motion.div 
          className="desc"
          >
            <ul>
              {item.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </motion.div>
        </VerticalTimelineElement>
      </div>
    );
  };
  
  const Experience = () => {
    return (
      <div className="experience">
        <VerticalTimeline>
          {items.map((item, index) => (
            <ExperienceCard item={item} key={index} />
          ))}
        </VerticalTimeline>
      </div>
    );
  };
  
  export default Experience;