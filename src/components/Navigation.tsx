import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// import ant design
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: <NavLink to="/">Home</NavLink>,
    key: "home",
  },
  {
    label: <NavLink to="/apple">Apple</NavLink>,
    key: "apple",
  },
  {
    label: <NavLink to="/tesla">Tesla</NavLink>,
    key: "tesla",
  },
  {
    label: <NavLink to="/business">Business</NavLink>,
    key: "business",
  },
  {
    label: <NavLink to="/techcrunch">TechCrunch</NavLink>,
    key: "techcrunch",
  },
  {
    label: <NavLink to="/wallstreetjournal">Wall Street Journal</NavLink>,
    key: "wallstreetjournal",
  },
];

const Navigation: React.FC = () => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      {/* logo - start */}
      <div
        style={{ display: "flex", justifyContent: "center", height: "10rem" }}
      >
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipPneq6pLLAg2INNSYuQvdQvs4Bj_Snm2K40vSFP=s1360-w1360-h1020"
          alt=""
        />
      </div>
      {/* logo - end */}

      {/* navigation bar - start */}
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{ backgroundColor: "#f7f7f7" }}
      />
      {/* navigation bar - emd */}
    </>
  );
};

export default Navigation;
