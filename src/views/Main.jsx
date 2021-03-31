import React from "react";
import ProductOne from "../component/ProductOne";
import products from "../utils/products.json";

const Main = () => {
  return (
    <section>
      {/* section: home first */}
      {products.map((p) => {
        return <ProductOne data={p} />;
      })}
    </section>
  );
};

export default Main;
