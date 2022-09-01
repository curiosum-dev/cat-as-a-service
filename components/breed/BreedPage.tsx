import { useQuery } from "@tanstack/react-query";
import { Button, Col, Divider, Row, Spin, Typography } from "antd";
import { Masonry } from "masonic";
import { getCats } from "../../lib/api/getCats";
import { Container } from "../../components/shared/Container";
import { Cat } from "../../types/Cat";
import { LeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { MasonryImage } from "../../components/MasonryImage";
import { FC } from "react";

export const BreedPage: FC = () => {
  const { query } = useRouter();
  const breedId = query.breedId as string;
  const { data, isLoading } = useQuery(["cats", breedId], () =>
    getCats(breedId)
  );

  if (isLoading) {
    return (
      <Container>
        <Spin />
      </Container>
    );
  }

  return (
    <Container>
      <Link href={{ pathname: "/" }}>
        <Button type="primary" size="large" icon={<LeftOutlined />}>
          Go back
        </Button>
      </Link>

      <Divider />

      {data?.length === 0 && (
        <Row>
          <Col span={12} offset={6} style={{ textAlign: "center" }}>
            <Typography.Title>404</Typography.Title>
            <Typography.Title level={3}>
              Curiosity killed the cat
            </Typography.Title>
          </Col>
        </Row>
      )}

      <Masonry
        items={data as Cat[]}
        render={MasonryImage}
        columnGutter={10}
        columnWidth={400}
      />
    </Container>
  );
};
