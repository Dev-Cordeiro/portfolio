import React from "react";
import { 
  DiNodejsSmall, 
  DiDotnet, 
  DiReact
} from 'react-icons/di';
import { 
  SiCsharp, 
  SiNestjs, 
  SiBootstrap 
} from 'react-icons/si';
import Reveal from "./Reveal";

const skills = [
  {
    category: "Back-end",
    technologies: [
      { name: "C#", icon: <SiCsharp className="text-purple-600" /> },
      { name: "ASP NET Core", icon: <DiDotnet className="text-blue-600" /> },
      { name: "Node", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "Nest", icon: <SiNestjs className="text-red-500" /> },
    ],
  },
  {
    category: "Front-end",
    technologies: [
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-600" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Habilidades</h2>
        <p className="text-center mb-8">
          Eu trabalhei em diversos projetos back-end. Cheque algum deles{" "}
          <a href="#" className="underline">
            aqui
          </a>
          .
        </p>

        <div
          className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        "
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
                                w-full md:w-1/2"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
