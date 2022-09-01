import { useQuery } from "@tanstack/react-query";
import { Button, Select, Space, Spin } from "antd";
import Link from "next/link";
import { FC, useState } from "react";
import { getBreeds } from "../../lib/api/getBreeds";
import { Breed } from "../../types/Breed";
import { Container } from "../shared/Container";

export const BreedForm: FC = () => {
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
  );
};
