import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles/Contato.module.css";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Enviando..." });

    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ type: "success", message: result.message });
        setFormData({ nome: "", email: "", mensagem: "" });
      } else {
        setStatus({ type: "error", message: result.message });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Erro no servidor. Tente novamente.",
      });
    }
  };

  return (
    <section className={styles.contato}>
      <motion.div className={styles.form_container}>
        <h2 className={styles.title}>Entre em Contato</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.input_group}>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.input_group}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.input_group}>
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <motion.button
            className={styles.btn}
            type="submit"
            disabled={status.type === "loading"}
          >
            {status.type === "loading" ? "Enviando..." : "Enviar"}
          </motion.button>
        </form>

        {status.message && (
          <p
            className={
              status.type === "success"
                ? styles.success
                : status.type === "error"
                ? styles.error
                : styles.status
            }
          >
            {status.message}
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default Contato;
