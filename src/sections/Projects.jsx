import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Filter, X } from "lucide-react";
import React, { useMemo, useState } from "react";
import projects from "../assets/data/projects.json";
import Section from "../components/Section";
import { getIcon } from "../helpers/get-icon";

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);

  // Get all unique technologies
  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects based on selected technology
  const filteredProjects = useMemo(() => {
    if (!selectedTech) return projects;
    return projects.filter((project) =>
      project.technologies.includes(selectedTech)
    );
  }, [selectedTech]);

  return (
    <Section className="mt-16" title="Projects">
      {/* Technology Filter */}
      <div className="mb-8">
        <div className="flex items-center flex-wrap gap-2 border rounded-full border-gray-800">
          <div
            className={`flex items-center justify-center rounded-full h-10 px-4 gap-x-2 border ${
              selectedTech
                ? "bg-primary/10 border-primary"
                : "bg-transparent border-none"
            }`}
          >
            <Filter
              className={`w-4 h-4 ${
                selectedTech ? "text-primary" : "text-gray-400"
              }`}
            />
            <p
              className={`text-sm ${
                selectedTech ? "text-primary" : "text-gray-400"
              }`}
            >
              Filter
            </p>
          </div>
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() =>
                setSelectedTech(selectedTech === tech ? null : tech)
              }
              className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                selectedTech === tech
                  ? "bg-primary text-white"
                  : "bg-primary/10 text-primary hover:bg-primary/20"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-dark/50 flex flex-col gap-y-4 p-6 rounded-xl border-2 border-gray-800 hover:border-primary/50 transition-all duration-300"
              key={project.title}
            >
              {/* Project Thumbnail */}
              <div className="relative w-full h-48 rounded-lg overflow-hidden mb-2">
                <div className="absolute inset-0" />
                <img
                  src={"/project-placeholder.png"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <div className="flex items-center justify-center gap-x-2">
                  {project.links.map((link) => {
                    const LinkIcon = getIcon(link.name);
                    return (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-800 hover:border-primary hover:bg-primary/15 rounded-full p-2 transition-all duration-200"
                        key={link.name}
                      >
                        <LinkIcon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <p className="text-gray-400 line-clamp-2">{project.content}</p>

              <div className="flex items-end justify-between mt-auto">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="bg-primary/10 px-3 py-1 rounded-full text-xs text-primary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() =>
                    setExpandedProject(
                      expandedProject === project.title ? null : project.title
                    )
                  }
                  className="flex items-center justify-center bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer rounded-full p-2 transition-all duration-200"
                >
                  {expandedProject === project.title ? (
                    <X className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Expanded Details */}
              <AnimatePresence>
                {expandedProject === project.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-4 border-t border-gray-800">
                      <h4 className="text-lg font-semibold mb-2">
                        Project Details
                      </h4>
                      <p className="text-gray-400">{project.content}</p>
                      {project.features && (
                        <ul className="mt-4 space-y-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-primary">•</span>
                              <span className="text-gray-400">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default Projects;
