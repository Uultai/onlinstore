import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductsContextProvider";
import ProductCard from "../products/ProductCard";
import { useSearchParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import FilterProduct from "./FilterProduct";
import "../../styles/ProductsList.css";

const ProductsList = () => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  // pagination start
  const [page, setPage] = useState(1);
  const itemsOnPage = 8;
  const count = Math.ceil(products.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return products.slice(begin, end);
  }
  return (
    <>
      <h1 className="title_">Product List</h1>
      <div className="serch_inp">
        <input
          className="input"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <FilterProduct />
      <div className="container">
        {products ? (
          currentData().map((item) => (
            <div className="card" key={item.id}>
              <ProductCard item={item} />
            </div>
          ))
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
      {/* pagination */}
      <div className="pagination_container">
        <Pagination count={count} page={page} onChange={handlePage} />
      </div>
    </>
  );
};

export default ProductsList;
