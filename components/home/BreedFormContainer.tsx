import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import React, { FC } from "react";
import { getBreeds } from "../../lib/api/getBreeds";
import { Breed } from "../../types/Breed";
import { BreedForm } from "./BreedForm";

export const BreedFormContainer: FC = () => {
  const { data, isLoading } = useQuery(["breeds"], getBreeds);

  if (isLoading) {
    return <Spin />;
  }

  return <BreedForm breeds={data as Breed[]} />;
};
