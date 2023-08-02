import "./Search.scss";
import { useState } from "react";
import prod from "../../../assets/products/snake-plant.webp";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import useFetch from "../../../hooks/useFetch";
const Search = ({ setshowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );
  if (!query.length) {
    data = null;
  }
  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for your garden"
          value={query}
          onChange={onChange}
        />
        <MdClose onClick={() => setshowSearch(false)} className="close-btn" />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {data?.data?.map((item) => (
            <div
              key={item.id}
              className="search-result-item"
              onClick={() => {
                navigate("/product/" + item.id);
                setshowSearch(false);
              }}
            >
              <div className="img-container">
                <img
                  src={
                    process.env.REACT_APP_BLOOMY_URL +
                    item.attributes.img.data[0].attributes.url
                  }
                  alt=""
                />
              </div>
              <div className="prod-details">
                <div className="name">{item.attributes.title}</div>
                <div className="desc">{item.attributes.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
