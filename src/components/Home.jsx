//frameworks
import { motion } from "framer-motion"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { useEffect, useMemo } from "react"
import { loadSlim } from "@tsparticles/slim"
import { Link } from "react-router-dom"

//img
import ImgHome from "../img/imghomeazul.png"

//components
import Projetos from "../components/Projetos"

//Layouts
import Contact from "../Layouts/ContatoHome"
import ProjectHome from "../Layouts/ProjectHome"

//UI
import ProjectButton from "../UI/ProjectButton"
import Technologies from "../UI/Technologies"

//styles
import styles from "./styles/home.module.css"

// Variantes para animações
const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: custom, ease: "easeOut" }
  })
}

const bounceUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 10, delay: 0.6 }
  }
}

const zoomIn = {
  hidden: { opacity: 0, scale: 0.7, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1, ease: "easeOut", delay: 0.5 }
  }
}

const fadeZoom = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: custom, ease: "easeOut" }
  })
}

const Home = () => {
  // inicializar particles
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    })
  }, [])

  const particlesOptions = useMemo(() => {
    return {
      background: { color: "transparent" },
      fpsLimit: 60,
      particles: {
        number: { value: 60, density: { enable: true, area: 800 } },
        color: { value: "#4fc3f7" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: { min: 1, max: 3 } },
        links: { enable: true, color: "#ffffff", opacity: 0.2 },
        move: {
          enable: true,
          speed: 1.2,
          direction: "none",
          random: false,
          straight: false,
          outModes: "out",
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" }
        },
        modes: {
          repulse: { distance: 100 },
          push: { quantity: 3 }
        }
      }
    }
  }, [])

  return (
    <div className={styles.home}>
      {/* Fundo de partículas */}
      <Particles options={particlesOptions} className={styles.particles} />

      {/* Conteúdo principal */}
      <section className={styles.hero}>
        {/* Texto */}
        <motion.div
          className={styles.heroText}
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.h1 variants={slideLeft}>
            Olá, eu sou o <span>João Vitor</span>
          </motion.h1>

          <motion.p variants={slideLeft} custom={0.2}>
            Sou desenvolvedor apaixonado por tecnologia e inovação. Busco sempre aprender e evoluir, criando projetos que unam design moderno, performance e usabilidade. Meu objetivo é transformar ideias em soluções digitais que gerem impacto real e façam a diferença.
          </motion.p>

          <motion.div
            variants={bounceUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/projetos">
              <ProjectButton text="Ver Projetos" type="button" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Imagem */}
        <motion.div
          className={styles.heroImg}
          initial="hidden"
          animate="visible"
          variants={zoomIn}
        >
          <motion.img
            src={ImgHome}
            alt="Imagem Home"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* SOBRE */}
      <motion.article
        className={styles.about}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } }
        }}
      >
        <motion.h2 variants={fadeZoom}>Minhas habilidades</motion.h2>
        <motion.p variants={fadeZoom} custom={0.2}>
          Tenho experiência em desenvolvimento web, com projetos reais em WordPress e diversos projetos de aprendizagem utilizando tecnologias como React, HTML, CSS, JavaScript, Node.js e MySQL. Estou sempre buscando evoluir, dedicando meu tempo livre aos estudos para ampliar minhas habilidades. A programação me fascinou desde pequeno e hoje sigo transformando essa paixão em projetos que unem aprendizado e prática.
        </motion.p>

        <motion.div variants={bounceUp}>
          <Link to={"/sobre"}>
            <ProjectButton text="Saiba Mais" type="button" />
          </Link>
        </motion.div>
      </motion.article>

      {/* Tecnologias */}
      <Technologies />

      {/* Projetos */}
      <ProjectHome />

      {/* Contato */}
      <Contact />
    </div>
  )
}

export default Home
