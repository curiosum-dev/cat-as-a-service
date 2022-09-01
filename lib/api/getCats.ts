import axios from "axios";
import { Cat } from "../../types/Cat";

export async function getCats(breedId: string) {
  const { data } = await axios(`/api/breeds/${breedId}`);
  return data as Cat[];
}
