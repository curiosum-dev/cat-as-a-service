import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { Cat } from "../../../types/Cat";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Cat[]>
) {
  const breedId = req.query.id;

  const data = (
    await Promise.all(
      [...Array(3)].map((_, index) => {
        return axios.get(
          `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=15&page=${index}`,
          {
            headers: {
              ...(process.env.API_KEY && {
                "x-api-key": process.env.API_KEY,
              }),
            },
          }
        );
      })
    )
  )
    .map(({ data }) => data)
    .flat();

  const cats = data.map((cat: any) => ({
    url: cat.url,
  }));

  res.status(200).json(cats);
}
