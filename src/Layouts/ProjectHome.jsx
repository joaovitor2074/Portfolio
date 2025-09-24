import ProjectButton from "../UI/ProjectButton"
import styles from "./ProjectHome.module.css"

import Alessandramacedo from "../img/Alessandramacedo.png"
import jvproject from "../img/Filmesjv.dev.png"
import { link } from "framer-motion/client"
import { Link } from "react-router-dom"

const projects = [
    {
        id: 1,
        img: Alessandramacedo,
        title: "Alessandra macedo",
        desc: "Site desenvolvido para uma psicóloga atender seus clientes online, criado em WordPress com diversos plugins para funcionalidade completa.",
        link: "https://alessandramacedo.com"
    },
    {
        id: 2,
        img: jvproject,
        title: "Jv Filmes",
        desc: "Projeto de estudo utilizando a API do TMDB para buscar filmes e séries, com sistema de login, favoritos e exibição dos filmes melhor avaliados.",
        link: "https://joaovitor2074.github.io/jvMovies/"
    },
]

const ProjectHome = () => {
    return (
        <section className={styles.projects}>
            <h2 className={styles.title}>Meus Projetos</h2>
            <div className={styles.projectList}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.projectCard}>
                        <img src={project.img} alt={project.title} className={styles.image} />
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>
                        <div className={styles.buttons}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <ProjectButton text="Acessar Projeto" type="button" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/projetos" className={styles.seeMoreLink}>
                <ProjectButton
                    text="Veja mais Projetos como esses!"
                    className={styles.btn}
                />
            </Link>
        </section>
    )
}

export default ProjectHome
