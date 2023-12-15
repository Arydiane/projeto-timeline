import { NextApiRequest, NextApiResponse } from "next";

const httpStatus = {
  Success: 200,
  BadRequest: 400,
  NotFound: 404,
  InternalServerError: 500,
};

const controlledByMethod = {
  POST(req: NextApiRequest, res: NextApiResponse) {
    res.status(httpStatus.Success).json({ message: "Post request!" });
  },
  GET(req: NextApiRequest, res: NextApiResponse) {
    res.status(httpStatus.Success).json({ message: "Get request!" });
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
