import React, { useState, useEffect } from "react";
import axios from "axios";
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

const API_KEY = "7442bf5ddf3741ca9fb9ff0ed160581d";
const API_URL = `https://newsapi.org/v2/everything?q=apple&from=2023-01-23&to=2023-01-23&sortBy=popularity&apiKey=${API_KEY}`;

const App: React.FC = () => {
  const [data, setData] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(API_URL);
      setData(result.data.articles);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Title style={{ marginTop: "30px", textAlign: "center" }}>
        Eigen News
      </Title>
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
    </div>
  );
};

export default App;
