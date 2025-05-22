import { ChevronRight } from "lucide-react";
import React from "react";
import projects from "../assets/data/projects.json";
import Section from "../components/Section";
import { getIcon } from "../helpers/get-icon";

const Projects = () => {
  return (
    <Section title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            className="bg-dark/50 flex flex-col gap-y-2 p-6 rounded-lg border-2 border-gray-800 transition-colors duration-200"
            key={project.title}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <div className="flex items-center justify-center gap-x-2">
                {project.links.map((link) => {
                  const LinkIcon = getIcon(link.name);
                  return (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-800 hover:border-primary hover:bg-primary/15 rounded-full p-2"
                    >
                      <LinkIcon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
            <p className="text-gray-500">{project.content}</p>
            <div className="flex items-end justify-between">
              <div className="flex flex-wrap gap-1 mt-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="bg-primary/10 px-3 py-1 rounded-full text-xs text-primary"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-center bg-primary/10 text-primary cursor-pointer rounded-full p-2">
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
