import { useQuery } from "@tanstack/react-query";
import { Button, Col, Row, Select, Space, Spin, Typography } from "antd";
import type { NextPage } from "next";
import { Container } from "../components/shared/Container";
import { useState } from "react";
import { getBreeds } from "../api/getBreeds";
import { Breed } from "../types/Breed";
import Link from "next/link";

const IndexPage: NextPage = () => {
  const { data, isLoading } = useQuery(["breeds"], getBreeds);
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);

  if (isLoading) {
    return (
      <Container>
        <Spin />
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        <Col span={12} offset={6}>
          {" "}
          <Typography.Title>Cat as a Service</Typography.Title>
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <Space>
            <Select
              showSearch
              placeholder="Select a breed"
              onChange={setSelectedBreed}
              size="large"
              style={{
                minWidth: "200px",
              }}
            >
              {(data as Breed[]).map((breed) => (
                <Select.Option key={breed.id} value={breed.id}>
                  {breed.name}
                </Select.Option>
              ))}
            </Select>
            {selectedBreed !== null && selectedBreed.length !== 0 && (
              <Link href={{ pathname: `/breed/${selectedBreed}` }}>
                <Button type="primary" size="large">
                  Show me cats
                </Button>
              </Link>
            )}
          </Space>
        </Col>
      </Row>
    </Container>
  );
};

export default IndexPage;
