import { useState } from "react";
import "./Search.scss";
import searchIcon from "../../../assets/images/icons/search.svg";

const Search = ({ setSearchTerm }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className={searchOpen ? "searchBox searchOpen" : "searchBox"}>
      <div className="searchInput">
        <input
          type="search"
          name=""
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div
        className="searchBtn"
        onClick={(e) => {
          setSearchOpen(!searchOpen);
        }}
      >
        <img src={searchIcon} alt={searchIcon} />
      </div>
    </div>
  );
};

export default Search;
