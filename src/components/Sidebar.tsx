import React, { useState, useEffect } from "react";
import axios from "axios";

// import ant design
import { Typography, List } from "antd";
const { Title } = Typography;

interface Article {
  title: string;
  url: string;
  urlToImage: string;
}

const News: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [data1, data2, data3, data4, data5] = await Promise.all([
        axios.get(
          "https://newsapi.org/v2/everything?q=apple&from=2023-02-11&to=2023-02-11&sortBy=popularity&apiKey=5fd964901d354f33ac848b11445226f1"
        ),
        axios.get(
          "https://newsapi.org/v2/everything?q=tesla&from=2023-01-12&sortBy=publishedAt&apiKey=5fd964901d354f33ac848b11445226f1"
        ),
        axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5fd964901d354f33ac848b11445226f1"
        ),
        axios.get(
          "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5fd964901d354f33ac848b11445226f1"
        ),
        axios.get(
          "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5fd964901d354f33ac848b11445226f1"
        ),
      ]);

      setArticles([
        ...data1.data.articles,
        ...data2.data.articles,
        ...data3.data.articles,
        ...data4.data.articles,
        ...data5.data.articles,
      ]);
    };

    fetchData();
  }, []);

  return (
    <body>
      <Title level={4}>Popular</Title>
      <List
        itemLayout="horizontal"
        dataSource={articles.slice(0, 5)}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              style={{
                alignItems: "center",
              }}
              avatar={
                <img
                  width={100}
                  alt="logo"
                  src={item.urlToImage}
                  style={{ borderRadius: "5px" }}
                />
              }
              title={<a href={item.url}>{item.title}</a>}
            />
          </List.Item>
        )}
      />
    </body>
  );
};

export default News;
