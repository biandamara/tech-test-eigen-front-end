import React, { useState, useEffect } from "react";
import axios from "axios";

// import ant design
import { Carousel } from "antd";

interface Article {
  title: string;
  url: string;
  urlToImage: string;
  description: string;
}

const App: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const contentStyle: React.CSSProperties = {
    objectFit: "cover",
    objectPosition: "center",
    height: "40rem",
    width: "100%",
    borderRadius: "15px",
  };

  useEffect(() => {
    const fetchData = async () => {
      const [data1, data2, data3, data4, data5] = await Promise.all([
        axios.get(
          "https://newsapi.org/v2/everything?q=apple&from=2023-02-11&to=2023-02-11&sortBy=popularity&apiKey=7442bf5ddf3741ca9fb9ff0ed160581d"
        ),
        axios.get(
          "https://newsapi.org/v2/everything?q=tesla&from=2023-01-12&sortBy=publishedAt&apiKey=7442bf5ddf3741ca9fb9ff0ed160581d"
        ),
        axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7442bf5ddf3741ca9fb9ff0ed160581d"
        ),
        axios.get(
          "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7442bf5ddf3741ca9fb9ff0ed160581d"
        ),
        axios.get(
          "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7442bf5ddf3741ca9fb9ff0ed160581d"
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
    <Carousel autoplay style={{ margin: "1rem" }}>
      {articles.map((article, index) => (
        <div key={index}>
          <a href={article.url} style={{ color: "black" }}>
            <img
              src={article.urlToImage}
              alt={article.title}
              style={contentStyle}
            />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </a>
        </div>
      ))}
    </Carousel>
  );
};

export default App;
