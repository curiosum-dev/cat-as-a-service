import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { Cat } from "../../../types/Cat";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Cat[]>
) {
  const breedId = req.query.id;
  const { data } = await axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=10`,
    {
      headers: {
        ...(process.env.API_KEY && {
          "x-api-key": process.env.API_KEY,
        }),
      },
    }
  );

  const cats = data.map((cat: any) => ({
    url: cat.url,
  }));

  res.status(200).json(cats);
}
