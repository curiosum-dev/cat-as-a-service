import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { Cat } from "../../../types/Cat";

const CATS_LIMIT = 40;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Cat[]>
) {
  const breedId = req.query.id;

  const { data } = await axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=${CATS_LIMIT}`,
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

  const moreCats =
    cats.length === CATS_LIMIT
      ? cats
      : Array.from({ length: CATS_LIMIT }, (_, i) => cats[i % cats.length]);

  res.status(200).json(moreCats);
}
