import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a
          href="https://github.com/joaovitor2074"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.github}
        >
          <FaGithub />
        </a>
        <a
          href="www.linkedin.com/in/joao-vitor-salazar-9387aa344"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkedin}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/joao_vitor00t/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.instagram}
        >
          <FaInstagram />
        </a>
        <a href="mailto:seuemail@gmail.com" className={styles.email}>
          <FaEnvelope />
        </a>
      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} João Vitor • Todos os direitos reservados
      </p>
    </footer>
  )
}

export default Footer
