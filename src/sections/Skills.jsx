import React from "react";
import skills from "../assets/data/skills.json";
import Section from "../components/Section";
import { getIcon } from "../helpers/get-icon";

const Skills = () => {
  return (
    <Section title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => {
          const Icon = getIcon(skill.category);
          return (
            <div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark/50 p-6 rounded-lg border-2 border-gray-800 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center mb-4">
                <Icon className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item.name}
                    className="text-gray-400 flex items-center"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
