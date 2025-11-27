"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Klampis Depo Cashier App",
    description: "reactjs, golang",
    image: "/images/projects/golangProject.png",
    tag: ["All", "JavaScript"],
    gitUrl: "https://github.com/kd-api/",
    previewUrl: "https://klampisdepo.vercel.app/",
  },
  {
    id: 2,
    title: "Bank-system Python",
    description: "University project (CLI)",
    image: "/images/projects/bankSystem.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/ngezLin/BankSystem-Python",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Network Analyzer tools python",
    description: "University project(tkinter, API)",
    image: "/images/projects/packetCapturer.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/ngezLin/Network-Traffic-tools-Python",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Todo-List Laravel",
    description: "Auth, Middleware, Basic CRUD",
    image: "/images/projects/todolist.png",
    tag: ["All", "Laravel"],
    gitUrl: "https://github.com/ngezLin/todolist-laravel",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Cashier-app Laravel",
    description: "Auth, Middleware, CRUD",
    image: "/images/projects/Cashier.png",
    tag: ["All", "Laravel"],
    gitUrl: "https://github.com/ngezLin/cashier-laravel",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "King Kong Splash Landing Page",
    description: "Made a landing page for King Kong Splash waterpark",
    image: "/images/projects/kingkongsplash.png",
    tag: ["All", "JavaScript"],
    gitUrl: "https://github.com/ngezLin/kingkong-splash",
    previewUrl: "https://kolamrenangkingkong.com",
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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
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
          name="Laravel"
          isSelected={tag === "Laravel"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="JavaScript"
          isSelected={tag === "JavaScript"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
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
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
