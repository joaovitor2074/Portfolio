import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa"
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Entre em contato ✉️
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Quer conversar comigo? Será um prazer responder sua mensagem!
        Clique no botão abaixo ou acesse minhas redes 👇
      </motion.p>

      <motion.a
        href="https://mail.google.com/mail/?view=cm&to=jv.dev2074@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contactBtn}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        Enviar Email
      </motion.a>



      {/* Ícones sociais */}
      <motion.div
        className={styles.socials}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <a href="https://github.com/joaovitor2074" target="_blank" rel="noopener noreferrer" className={styles.github}>
          <FaGithub />
        </a>
        <a href="www.linkedin.com/in/joao-vitor-salazar-9387aa344" target="_blank" rel="noopener noreferrer" className={styles.linkedin}>
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/joao_vitor00t/" className={styles.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </motion.div>
    </section>
  )
}

export default Contact
