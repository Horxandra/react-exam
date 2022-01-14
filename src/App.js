import React, { useState, useEffect } from "react";
import "./App.css";
import LoadingMask from "./components/LoadingMask";
import Laptop from "./components/Laptop";

function useLaptops() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api/laptop")
      .then((response) => response.json())
      .then((d) => {
        console.log(d);
        setData(d);
        setLoading(false);
      });
  }, []);
  return { loading, data };
}

function useSubtimer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);
  return show;
}

function useSearch(e) {
  const [laptops, setLaptops] = useState([]);
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    setLaptops(
      laptops.filter((laptop) =>
        laptop.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }; return {laptops, searchText, handleSearch};
}

const App = () => {
  const { loading, data } = useLaptops();
  const show = useSubtimer();
  const {laptops, searchText, handleSearch} = useSearch();

  if (loading) {
    return <LoadingMask />;
  }

  const laptopsList = [];
  for (const l of data) {
    laptopsList.push(<Laptop laptop={l} key={l.name} />);
  }

  return (
    <div className="App">
      <header>
        <button>Sort</button>
        <input type="text" value={searchText} onChange={handleSearch} />
      </header>
      <h1>Laptops</h1>
      <div>{laptops}</div>
    </div>
  );
};

export default App;
