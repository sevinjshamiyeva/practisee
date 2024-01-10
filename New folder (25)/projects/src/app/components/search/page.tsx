import React, { ReactElement } from "react";
import Input from "@mui/joy/Input";

interface Props {}

function Search({}: Props): ReactElement {
  return (
    <>
      <div style={{ width: "300px", marginTop: "50px", marginLeft: "100px" }}>
        <Input placeholder="Search Author" variant="outlined" color="neutral" />
      </div>
    </>
  );
}

export default Search;
