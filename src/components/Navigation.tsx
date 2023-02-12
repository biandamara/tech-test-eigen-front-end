import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "Apple",
    key: "apple",
  },
  {
    label: "Tesla",
    key: "tesla",
  },
  {
    label: "Business",
    key: "business",
  },
  {
    label: "TechCrunch",
    key: "techcrunch",
  },
  {
    label: "Wall Street Journal",
    key: "wallstreetjournal",
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{ backgroundColor: "#f7f7f7" }}
    />
  );
};

export default App;
