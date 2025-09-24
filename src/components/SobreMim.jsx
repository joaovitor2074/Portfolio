import { useCallback } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";
import Foto from "../img/foto.jpg";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaWordpress,
  FaJava,
  FaLock,
} from "react-icons/fa";
import { SiTailwindcss, SiPython } from "react-icons/si";
import styles from "./styles/SobreMim.module.css";

const SobreMim = () => {
 useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options = useMemo(
  () => ({
    background: {
      color: "#0f172a", // fundo escuro elegante
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse", // partículas "fogem" do mouse
        },
        onClick: {
          enable: true,
          mode: "push", // adiciona partículas ao clicar
        },
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 3 },
      },
    },
    particles: {
      color: { value: "#1e75e6ff" }, // cor vermelha suave
      links: {
        color: "#2f54f7ff",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        outModes: { default: "bounce" },
      },
      number: { value: 60, density: { enable: true, area: 800 } },
      opacity: { value: 0.6 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  }),
  []
);

  // Textos do Sobre mim
  const textos = [
    "Em 2023 tive meu primeiro contato com a programação enquanto trabalhava de forma informal em uma loja de informática. Nos momentos livres, aproveitava para estudar lógica e JavaScript e, em apenas oito meses, consegui montar meu próprio computador, o que me permitiu dedicar ainda mais tempo aos estudos em casa.",
    "Apesar da pouca idade na época (13/14 anos), passei a investir mais de 10 horas por dia estudando, principalmente nas férias. Foi nesse período que descobri minha verdadeira paixão: aprender e criar soluções através da programação.",
    "Ao longo da minha trajetória, enfrentei desafios pessoais, inclusive a perda de um familiar, que me afastou temporariamente dos estudos. Porém, no início de 2025 retomei com ainda mais foco e determinação, e hoje sigo firme no meu objetivo de construir uma carreira sólida na área de tecnologia.",
    "Atualmente tenho 16 anos e moro em Codó, no Maranhão. Sou estudante do Instituto Federal do Maranhão (IFMA), no curso técnico de Informática, e bolsista CNPq em um projeto de pesquisa que alcançou nota 98/100 em sua avaliação. Além disso, já realizei freelas reais, como o desenvolvimento de um site profissional para a diretora da minha escola, e participo com frequência de reuniões e ambientes profissionais — experiências que têm ampliado minha visão e maturidade na área.",
    "Durante minha formação escolar, fui reconhecido diversas vezes pelo meu desempenho, recebendo 9 certificados de aluno destaque em escolas militares e cívico-militares. Também concluí cursos de informática básica e avançada, além de inglês em nível básico/intermediário, sempre buscando ampliar meus conhecimentos e habilidades.",
    "No meu tempo livre, gosto de estudar, desenvolver projetos pessoais e explorar novas tecnologias. Sou disciplinado, resiliente e curioso, características que me impulsionam a evoluir constantemente.",
    "Meu próximo objetivo é conquistar uma oportunidade de estágio em programação, para aplicar na prática todo o conhecimento que venho adquirindo. Mais do que ingressar no mercado de trabalho, quero contribuir com soluções que gerem impacto positivo na minha comunidade e, futuramente, participar de projetos de grande alcance.",
  ];

  const tecnologias = [
    { icon: <FaHtml5 size={50} />, color: "#E34F26" },
    { icon: <FaCss3Alt size={50} />, color: "#1572B6" },
    { icon: <FaJs size={50} />, color: "#F7DF1E" },
    { icon: <FaNodeJs size={50} />, color: "#339933" },
    { icon: <FaReact size={50} />, color: "#61DAFB" },
    { icon: <FaDatabase size={50} />, color: "#4479A1" },
    { icon: <FaWordpress size={50} />, color: "#21759B" },
    { icon: <SiTailwindcss size={50} />, color: "#38B2AC" },
    { icon: <SiPython size={50} />, color: "#3776AB" },
    { icon: <FaJava size={50} />, color: "#007396" },
    { icon: <FaLock size={50} />, color: "#ff4444" },
  ];

   return (
    <section className={styles.about}>
      <Particles id="tsparticles" options={options} />

      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* --- Área da Imagem --- */}
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <img
            src={Foto}
            alt="Minha foto"
            className={styles.image}
          />
        </motion.div>

        {/* --- Conteúdo --- */}
        <div className={styles.content}>
          <motion.h2
            className={styles.title}
            initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            Sobre mim
          </motion.h2>

          {textos.map((texto, i) => (
            <motion.p
              key={i}
              className={styles.text}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              {texto}
            </motion.p>
          ))}

          {/* Tecnologias */}
          <motion.div className={styles.techs}>
            {tecnologias.map((tech, i) => (
              <motion.div
                key={i}
                className={styles.icon}
                style={{ color: tech.color }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: [0, -5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: i * 0.1,
                }}
                whileHover={{ scale: 1.3, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                {tech.icon}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SobreMim;