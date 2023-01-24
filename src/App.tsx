import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, Typography, Image } from "antd";

interface Article {
  title: string;
  author: string;
  url: string;
  urlToImage: string;
  description: string;
  publishedAt: string;
}

const News: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const { Link } = Typography;

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=apple&from=2023-01-23&to=2023-01-23&sortBy=popularity&apiKey=7442bf5ddf3741ca9fb9ff0ed160581d`
      )
      .then((response) => setArticles(response.data.articles))
      .catch((error) => console.log(error));
  }, []);

  return (
    <List
      dataSource={articles}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text strong>{item.title}</Typography.Text> <br />
          <Typography.Text>By</Typography.Text>{" "}
          <Typography.Text strong>{item.author}</Typography.Text> {" | "}
          <Typography.Text>Published {item.publishedAt}</Typography.Text> <br />
          <Image src={item.urlToImage} width={200} /> <br />
          <Typography.Text type="secondary">
            {item.description}
          </Typography.Text>{" "}
          <Link href={item.url} target="_blank">
            [read more]
          </Link>
        </List.Item>
      )}
    />
  );
};

export default News;
