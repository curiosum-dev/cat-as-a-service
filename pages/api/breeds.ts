import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { Breed } from "../../types/Breed";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Breed[]>
) {
  const { data } = await axios.get("https://api.thecatapi.com/v1/breeds", {
    headers: {
      ...(process.env.API_KEY && {
        "x-api-key": process.env.API_KEY,
      }),
    },
  });

  const breeds = data.map((breed: any) => ({
    id: breed.id,
    name: breed.name,
  }));

  res.status(200).json(breeds);
}
