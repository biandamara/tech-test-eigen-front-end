import React, { useState, useEffect } from "react";
import axios from "axios";

// import components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// import ant design
import { Typography, Card, List, Space, Row } from "antd";
const { Title, Text } = Typography;

interface Article {
  title: string;
  author: string;
  publishedAt: string;
  urlToImage: string;
  description: string;
  content: string;
  url: string;
}

const TechCrunch: React.FC = () => {
  const [data, setData] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5fd964901d354f33ac848b11445226f1"
      );
      setData(result.data.articles);
    };
    fetchData();
  }, []);

  return (
    <>
      {/* header - start */}
      <Navigation />
      {/* header - end */}

      {/* section - start */}
      {/* title - start */}
      <Title style={{ display: "flex", justifyContent: "center" }}>
        TechCrunch
      </Title>
      {/* title - end */}

      {/* news list - start */}
      <List
        loading={false}
        style={{ marginBottom: "30px" }}
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSizeOptions: [10, 20, 50, 100],
          style: { display: "flex", justifyContent: "center" },
        }}
        dataSource={data}
        renderItem={(item) => (
          <Row style={{ justifyContent: "center" }}>
            <Card style={{ width: 800, margin: "10px" }}>
              <List.Item
                key={item.title}
                extra={
                  <img width={272} alt={item.title} src={item.urlToImage} />
                }
              >
                <List.Item.Meta
                  title={<a href={item.url}>{item.title}</a>}
                  description={item.description}
                />
                <Space>
                  <Text>By</Text>
                  <Text strong>{item.author}</Text>
                </Space>
                <br />
                <Space>
                  <Text>Published</Text>
                  <Text>{item.publishedAt}</Text>
                </Space>
              </List.Item>
            </Card>
          </Row>
        )}
      />
      {/* news list - end */}
      {/* section - end */}

      {/* header - start */}
      <Footer />
      {/* header - end */}
    </>
  );
};

export default TechCrunch;
