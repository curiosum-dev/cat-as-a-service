import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";

const ContainerComponent = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (min-width: 576px) {
    max-width: 576px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 992px) {
    max-width: 992px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

type ContainerProps = {
  children: ReactNode;
};

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100%" }}>
      <Content>
        <ContainerComponent>{children}</ContainerComponent>
      </Content>
    </Layout>
  );
};
