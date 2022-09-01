import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useProducts } from "../../context/ProductsContextProvider";
import "../../styles/FilterProduct.css";

export default function ControlledRadioButtonsGroup() {
  // const [value, setValue] = React.useState("all");

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  const { fetchByParams } = useProducts();

  return (
    <div className="form_container">
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Category</FormLabel>
        <RadioGroup
          className="form "
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          defaultValue="all"
          onChange={(e) => fetchByParams("type", e.target.value)}
        >
          <div className="form">
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel value="sport" control={<Radio />} label="Sport" />
            <FormControlLabel
              value="clothes"
              control={<Radio />}
              label="Clothes"
            />
            <FormControlLabel
              value="electronics"
              control={<Radio />}
              label="Electronics"
            />
          </div>
        </RadioGroup>
      </FormControl>
    </div>
  );
}
