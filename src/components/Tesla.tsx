import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography, List, Space } from "antd";
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

const API_KEY = "5fd964901d354f33ac848b11445226f1";
const API_URL = `https://newsapi.org/v2/everything?q=tesla&from=2023-01-12&sortBy=publishedAt&apiKey=${API_KEY}`;

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
      <Title level={4}>Tesla News</Title>
      <List
        loading={false}
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 2,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            extra={<img width={272} alt={item.title} src={item.urlToImage} />}
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
        )}
      />
    </div>
  );
};

export default App;
