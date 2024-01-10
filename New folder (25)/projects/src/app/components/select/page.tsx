"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export default function BasicSelect() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div style={{ width: "300px", marginTop: "50px", marginLeft: "10px" }}>
      <Box sx={{ minWidth: 50, width: "100px" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gendre</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Male</MenuItem>
            <MenuItem value={20}>Famale</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
