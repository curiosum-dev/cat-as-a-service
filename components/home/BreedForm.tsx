import { Button, Select, Space } from "antd";
import Link from "next/link";
import React, { FC, useState } from "react";
import { Breed } from "../../types/Breed";

type BreedFormProps = {
  breeds: Breed[];
};

export const BreedForm: FC<BreedFormProps> = ({ breeds }) => {
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);

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
        {breeds.map((breed) => (
          <Select.Option key={breed.id} value={breed.id}>
            {breed.name}
          </Select.Option>
        ))}
      </Select>
      {selectedBreed && (
        <Link href={{ pathname: `/breed/${selectedBreed}` }}>
          <Button type="primary" size="large">
            Show me cats
          </Button>
        </Link>
      )}
    </Space>
  );
};
