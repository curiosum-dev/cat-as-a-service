import { useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { getCats } from "../api/getCats";
import styles from "../styles/Home.module.css";

const IndexPage: NextPage = () => {
  const { data } = useQuery(["cats", "abys"], () => getCats("abys"));

  console.log(data);

  return <div>{JSON.stringify(data)}</div>;
};

export default IndexPage;
