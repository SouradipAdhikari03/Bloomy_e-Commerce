import { useEffect } from "react";
import { fetchDataFromApi } from "../../utils/api";

import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Product from "../Products/Products";
const Home = () => {
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/api/categories/?populate=*").then((res) => console.log(res));
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category />
          <Product headingText="Trending Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
