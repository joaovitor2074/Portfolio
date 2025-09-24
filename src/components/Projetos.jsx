import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import styles from './styles/projetos.module.css'

//img
import Alessandramacedo from "../img/Alessandramacedo.png"
import jvproject from "../img/Filmesjv.dev.png"
import curriculo from "../img/curriculo.png"
import costs from "../img/costs.png"

//components
import Footer from "../Layouts/Footer"

//UI
import ProjectButton from "../UI/ProjectButton"

const projects = [
  {
    id: 1,
    img: Alessandramacedo,
    title: "Alessandra Macedo",
    desc: "Um site feito para uma psicóloga atender seus clientes online. Criado em Wordpress com diversos plugins.",
    link: "https://alessandramacedo.com"
  },
  {
    id: 2,
    img: jvproject,
    title: "Jv Filmes",
    desc: "Projeto criado para estudo, onde utilizei a API do TMDB para buscar filmes e séries, com sistema de login e favoritos.",
    link: "https://joaovitor2074.github.io/jvMovies/"
  },
  {
    id: 3,
    img: curriculo,
    title: "Currículo em React",
    desc: "Currículo criado em React, com animações e responsivo. Um passo a mais na minha carreira.",
    link: "https://joaovitor2074.github.io/curriculo/"
  },
  {
    id: 4,
    img: costs,
    title: "Costs",
    desc: "Projeto criado para estudo, onde aperfeiçoei o CRUD em React, com sistema de adicionar e remover projetos e custos.",
    link: "https://joaovitor2074.github.io/newproject"
  },
]

const Projetos = () => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const particlesOptions = useMemo(() => ({
    background: { color: { value: "#0f172a" } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "attract" } },
    },
    particles: {
      color: { value: ["#f43f5e", "#38bdf8", "#a855f7"] },
      links: { enable: false },
      move: { enable: true, speed: 1.5, outModes: { default: "bounce" } },
      number: { value: 60 },
      opacity: { value: 0.5 },
      size: { value: { min: 2, max: 4 } },
    },
  }), []);

  return (
    <>
      <section className={styles.projects}>
        <Particles id="tsparticles-projetos" options={particlesOptions} />

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meus Projetos
        </motion.h2>

        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <img src={project.img} alt={project.title} className={styles.image} />
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className={styles.buttons}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ProjectButton text="Acessar Projeto" type="button" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer animado */}
      
    </>
  )
}

export default Projetos;
