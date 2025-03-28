import React from "react";
import project1 from "../assets/Eventos.png";
import project2 from "../assets/Chamillo.png";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importante para estilizar o Carousel

const projects = [
  {
    title: "Sistema de Eventos em ASP.NET Core",
    description:
      "Desenvolvido do zero para gerenciamento de eventos, incluindo inscrições, emissão de certificados e dashboards de acompanhamento. Criado com ASP.NET Core e Entity Framework, integrando features como geração de relatórios e autenticação segura.",
    images: [project1, project4],
    links: {
      site: "#",
    },
  },
  {
    images: [project2],
    title: "Chamilo LMS – Customizações em PHP",
    description:
      "Manutenção e desenvolvimento de novas funcionalidades no Chamilo LMS, uma plataforma de e-learning open source escrita em PHP.",
    links: {
      site: "https://tograduado.unitins.br/index.php",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>

      <Carousel
        axis="horizontal"
        autoPlay={true}
        infiniteLoop={true}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        swipeable={true}
      >
        {projects.map((project, index) => (
          <div key={index}>
            <Reveal>
              <div
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } mb-12`}
              >
                <div className="w-full md:w-1/2 p-4">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex space-x-4 justify-center">
                    {project.links.site && (
                      <a
                        href={project.links.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                      >
                        View Site
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                      >
                        <AiOutlineGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Portfolio;
