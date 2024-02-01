"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import '../css/HeroSection.css';

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    skilluse: "HTML CSS JAVA",
    detailedDescription: "A project description is a high-level overview ",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    skilluse: "HTML D3 JAVA",
    detailedDescription: "Detailed description for Photography Portfolio Website...",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Data Visualization Website",
    skilluse: "HTML CSS JavaScript D3.js",
    detailedDescription: "This elegantly designed website offers comprehensive statistics on overseas migration to Australia over the past decade. With its captivating blend of interactive geo-maps, dynamic bar charts, and informative line graphs, it provides an immersive and visually appealing way to explore the data.",
    image: "/images/projects/3.png",
    tag: ["All", "Web", "Data"],
    gitUrl: "https://github.com/KhoaPhamzzz/Data-visualization-D3" ,
    previewUrl: "https://data-visualization-d3-psi.vercel.app/",
  },
  {
    id: 4,
    title: "Next Portfolio Website",
    skilluse: "Next.js Tailwind JavaScript",
    detailedDescription: "Welcome to my portfolio website, a concise yet comprehensive platform where I highlight my skills, technologies, and a curated selection of past and present projects.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KhoaPhamzzz/New-Portfolio",
    previewUrl: "https://khoaphams.com",
  },
  {
    id: 5,
    title: "React Firebase Template",
    skilluse: "HTML CSS JAVA",
    detailedDescription: "Detailed description for E-commerce Application...",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    skilluse: "HTML CSS JAVA",
    detailedDescription: "Detailed description for E-commerce Application...",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Full-stack Roadmap",
    skilluse: "HTML CSS JAVA",
    detailedDescription: "Detailed description for E-commerce Application...",
    image: "/images/projects/6.png",
    tag: ["All", "Data"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="font-abc text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data"
          isSelected={tag === "Data"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              detailedDescription={project.detailedDescription}
              skilluse={project.skilluse}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;