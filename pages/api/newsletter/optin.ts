import { createClient } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";
import sendGridMail from "@sendgrid/mail";

//===== Supabase Setup =====
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const dbClient = createClient(SUPABASE_URL, SUPABASE_KEY);
//==========================

const httpStatus = {
  Success: 200,
  BadRequest: 400,
  NotFound: 404,
  InternalServerError: 500,
};

const controlledByMethod = {
  async POST(req: NextApiRequest, res: NextApiResponse) {
    const email = req.body.emailNewsletter;
    console.log("[Opetin]Email: ", email);

    //Validação
    if (!Boolean(email) || !email.includes("@")) {
      res
        .status(httpStatus.BadRequest)
        .json({ message: "Forneça um email válido. Exemplo: teste@teste.com" });
      return;
    }

    //Cadastra o email na newsletter
    const { error } = await dbClient
      .from("newsletter_users")
      .insert({ email: email, optin: true });
    //Verifica erro
    if (error) {
      res
        .status(httpStatus.BadRequest)
        .json({ message: "Erro no cadastro de email!" });
      return;
    }

    //Cria um usuário no sistema
    await dbClient.auth.admin.createUser({ email: email });

    //Envia o email
    try {
      sendGridMail.setApiKey(process.env.SENDGRID_KEY);
      await sendGridMail.send({
        to: email,
        from: "arydianejardim@gmail.com",
        subject: "Bem-vindo a Newsletter!",
        html: `<p>Olá,<strong>Bem-vindo a newsletter!</strong></p>
        <p>Voc&ecirc; se cadastrou na newsletter e vai come&ccedil;ar a receber e-mails semanais com as &uacute;ltimas not&iacute;cias sobre tecnologia e programa&ccedil;&atilde;o.&nbsp;</p>
        <p>&nbsp;</p>
        <p>At&eacute; logo!</p>
        <p>Dev. Arydiane Jardim</p>`,
      });
      res
        .status(httpStatus.Success)
        .json({ message: "Post request! Enviado com sucesso" });
    } catch (err) {
      res
        .status(httpStatus.InternalServerError)
        .json({ message: "Falhamos em enviar seu email" });
    }
  },
  async GET(req: NextApiRequest, res: NextApiResponse) {
    const { data, error } = await dbClient.from("newsletter_users").select("*");

    res
      .status(httpStatus.Success)
      .json({ message: "Get request!", total: data.length });
  },
};

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const controller = controlledByMethod[request.method];

  if (!controller) {
    response
      .status(httpStatus.NotFound)
      .json({ message: "Nada encontrado aqui :(" });
    return;
  }

  controller(request, response);
}
