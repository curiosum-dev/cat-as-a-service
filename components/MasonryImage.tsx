import React, { FC } from "react";
import styled from "styled-components";
import { Cat } from "../types/Cat";

const Image = styled.img`
  width: 100%;
`;

type MasonryImageProps = {
  data: Cat;
};

export const MasonryImage: FC<MasonryImageProps> = ({ data }) => {
  return <Image src={data.url} alt="cat image" />;
};
