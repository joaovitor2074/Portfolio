import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
  const { nome, email, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({
      success: false,
      message: "Preencha todos os campos",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "jv.dev2074@gmail.com",
        pass: "kgmc zopk juyp dxzf", // senha de app
      },
    });

    await transporter.sendMail({
      from: `"${nome}" <${email}>`,
      to: "jv.dev2074@gmail.com",
      subject: "Conversa a partir do portfólio",
      text: mensagem,
      html: `
        <h3>Nova mensagem do portfólio</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
    });

    return res.json({
      success: true,
      message: "Mensagem enviada com sucesso!",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Erro ao enviar mensagem. Tente novamente mais tarde.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
