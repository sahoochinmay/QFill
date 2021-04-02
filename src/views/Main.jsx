import React from "react";
import ProductOne from "../component/ProductOne";
import products from "../utils/products.json";
import { Grid } from "@material-ui/core";

const Main = () => {
  return (
    <section
      style={{
        padding: "20px 60px",
      }}
    >
      {/* section: home first */}
      <Grid container direction="row" justify="center">
        {products.map((p) => {
          return (
            <Grid
              item
              xs={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ProductOne data={p} />
            </Grid>
          );
        })}
      </Grid>
    </section>
  );
};

export default Main;
