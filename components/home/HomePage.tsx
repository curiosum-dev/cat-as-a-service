import { Col, Row, Typography } from "antd";
import React, { FC } from "react";
import { Container } from "../../components/shared/Container";
import { BreedFormContainer } from "./BreedFormContainer";

export const HomePage: FC = () => {
  return (
    <Container>
      <Row>
        <Col span={12} offset={6}>
          <Typography.Title>Cat as a Service</Typography.Title>
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <BreedFormContainer />
        </Col>
      </Row>
    </Container>
  );
};
