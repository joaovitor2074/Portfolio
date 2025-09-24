import { useState } from "react";
import styles from "./Mensagem.module.css";

const Mensagem = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState(""); // "loading", "success", "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, mensagem }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setNome("");
        setEmail("");
        setMensagem("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erro:", error);
      setStatus("error");
    }
  };

  return (
    <section className={styles.mensagem}>
      <h2>Envie uma mensagem</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Sua mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        ></textarea>
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {status === "success" && (
        <p className={styles.success}>Mensagem enviada com sucesso!</p>
      )}
      {status === "error" && (
        <p className={styles.error}>Erro ao enviar mensagem. Tente novamente.</p>
      )}
    </section>
  );
};

export default Mensagem;
