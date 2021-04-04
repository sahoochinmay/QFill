import React, { useState } from "react";
import {
  Paper,
  Grid,
  TextField,
  Slider,
  TextareaAutosize,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";
import { Rating, ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import { SketchPicker } from "react-color";

const useStyles = makeStyles({
  notchedOutline: {
    borderColor: "rgb(255, 136, 0) !important",
  },
  sliderColor: {
    marginTop: "25px",
    color: "rgb(255, 136, 0) !important",
  },
});

const Customize = (props) => {
  const classes = useStyles();
  const history = useHistory();
  let data = props?.location?.data;
  const [selectImg, setSelectImg] = useState(data?.img[0]);
  const [quality, setQuality] = useState("basic");
  const [material, setMaterial] = useState("wood");
  const [priceRange, setPriceRange] = useState([5, 10]);
  const [color, setColor] = useState("#fff");
  if (data === undefined) {
    history.push("/home/");
  }
  // quality change
  const handleQuality = (event, newQuality) => {
    setQuality(newQuality);
  };
  // material change
  const handleMaterial = (event, newMaterial) => {
    setMaterial(newMaterial);
  };
  // priceRange change
  function valuetext(value) {
    return `₹${value}`;
  }
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };
  const priceRangeMark = [
    {
      value: 1,
      label: "₹1000",
    },
    {
      value: 10,
      label: "₹10000",
    },
    {
      value: 30,
      label: "₹30000",
    },
    {
      value: 60,
      label: "₹60000",
    },
    {
      value: 90,
      label: "₹90000",
    },
  ];
  //   Delivery Time
  const deliveryTimeRangeMark = [
    {
      value: 15,
      label: "15 Days",
    },
    {
      value: 30,
      label: "1 Month",
    },
    {
      value: 45,
      label: "1.5 Month",
    },
    {
      value: 60,
      label: "2 Month",
    },
    {
      value: 75,
      label: "2.5 Month",
    },
  ];
  function deliveryRangeText(value) {
    return `${value} Days`;
  }
  //   handle color change
  const handleColorChange = (value) => {
    setColor(value);
  };
  return (
    <section id="customize">
      <Paper elevation={3} className="customize_box">
        <Grid container>
          <Grid item xs={6}>
            <section className="image">
              <img src={selectImg} className="large_img" alt="" />
              <section className="small">
                {data?.img.map((src) => {
                  return (
                    <img
                      src={src}
                      className="samll_img"
                      alt=""
                      onClick={() => {
                        setSelectImg(src);
                      }}
                    />
                  );
                })}
              </section>
            </section>
          </Grid>
          <Grid item xs={6}>
            <section
              className="back"
              onClick={() => {
                history.push({
                  pathname: "/home/details",
                  data: data,
                });
              }}
            >
              <ArrowBack className="icon" />
              &nbsp;&nbsp;&nbsp;<p>Back To Detail</p>
            </section>
            <section className="main_edit">
              <p className="category">{data?.category}</p>
              <p className="title">{data?.title}</p>
              <section className="ratingSection">
                <Rating
                  className="rating"
                  name="read-only"
                  value={data?.rating}
                  readOnly
                />
                <p className="count">
                  &nbsp;&nbsp;&nbsp;{data?.rating}({data?.total_rating})
                </p>
              </section>
              <p className="head">Select Quality</p>
              <ToggleButtonGroup
                value={quality}
                exclusive
                onChange={handleQuality}
                className="qulity_box"
              >
                <ToggleButton value="basic">
                  <strong>Basic</strong>
                </ToggleButton>
                <ToggleButton value="premium">
                  <strong>Premium</strong>
                </ToggleButton>
              </ToggleButtonGroup>
              <p className="head">Material</p>
              <ToggleButtonGroup
                value={material}
                exclusive
                onChange={handleMaterial}
                className="qulity_box"
              >
                <ToggleButton value="wood">
                  <strong>Wood</strong>
                </ToggleButton>
                <ToggleButton value="iron">
                  <strong>Iron</strong>
                </ToggleButton>
              </ToggleButtonGroup>
              <p className="head">Size</p>
              <section
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <TextField
                  id="filled-number"
                  label="Length"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                />
                <TextField
                  id="filled-number"
                  label="Width"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                />
                <TextField
                  id="filled-number"
                  label="Height"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                />
              </section>
              <p className="head">
                Price Range&nbsp;&nbsp;&nbsp;<small>(In Thousand)</small>{" "}
              </p>
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                marks={priceRangeMark}
                className={classes.sliderColor}
                min={1}
              />
              <p className="head">Delivery Time</p>
              <Slider
                defaultValue={30}
                valueLabelDisplay="auto"
                getAriaValueText={deliveryRangeText}
                marks={deliveryTimeRangeMark}
                className={classes.sliderColor}
                min={15}
                max={90}
              />
              <p className="head">Color</p>
              <SketchPicker
                color={color}
                onChangeComplete={handleColorChange}
                style={{
                  width: "300",
                }}
              />
              <p className="head">More Details</p>
              <TextareaAutosize
                rowsMin={8}
                style={{
                  width: "100%",
                  padding: "5px",
                }}
                placeholder="Please provide more details if you need ..."
              />
              <Button className="request_btn">Request Order</Button>
            </section>
          </Grid>
        </Grid>
      </Paper>
    </section>
  );
};

export default Customize;
