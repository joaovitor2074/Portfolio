import React from "react"
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa"
import { SiJavascript, SiTailwindcss, SiMysql, SiWordpress } from "react-icons/si"
import "./technologies.css"
import { motion } from "framer-motion"

const Technologies = () => {
  // animação base para cada ícone
  const iconVariant = {
  hidden: { opacity: 0, scale: 0.5, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      repeat: Infinity,         // repete para sempre
      repeatDelay: 5            // espera 5s antes de repetir
    }
  }
}


  // lista das tecnologias
  const techs = [
    { icon: <FaHtml5 className="icon html" />, name: "HTML5" },
    { icon: <FaCss3Alt className="icon css" />, name: "CSS3" },
    { icon: <SiJavascript className="icon js" />, name: "JavaScript" },
    { icon: <FaReact className="icon react" />, name: "React" },
    { icon: <SiTailwindcss className="icon tailwind" />, name: "Tailwind" },
    { icon: <FaNodeJs className="icon node" />, name: "Node.js" },
    { icon: <FaGithub className="icon github" />, name: "GitHub" },
    { icon: <SiMysql className="icon mysql" />, name: "MySQL" },
    { icon: <SiWordpress className="icon wordpress" />, name: "WordPress" },
  ]

  return (
    <section className="technologies">
      <motion.div
        className="tecnology-icons"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
      >
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            className="tech"
            variants={iconVariant}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            {tech.icon}
            <span>{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Technologies
