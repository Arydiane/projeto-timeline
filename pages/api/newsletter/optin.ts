import { createClient } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";

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
      res.status(httpStatus.BadRequest).json({ message: "Erro no cadastro!" });
      return;
    }

    //Cria um usuário no sistema
    await dbClient.auth.admin.createUser({ email: email });

    res.status(httpStatus.Success).json({ message: "Post request!" });
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
