import axios from "axios";
import { Breed } from "../types/Breed";

export async function getBreeds() {
  const { data } = await axios.get("/api/breeds");
  return data as Breed[];
}
