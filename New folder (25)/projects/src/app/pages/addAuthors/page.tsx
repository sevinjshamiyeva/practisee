import ButtonAppBar from "@/app/components/navbar/page";
import React, { ReactElement } from "react";
import TextField from "@mui/material/TextField";
import BasicSelect2 from "@/app/components/select2/page";
import BasicSelect3 from "@/app/components/select3/page";

interface Props {}

function addAuthors({}: Props): ReactElement {
  return (
    <div>
      <ButtonAppBar />
      <div
        className="container"
        style={{
          margin: "auto",
          width: "80%",
          height: "100vh",
        }}
      >
        <div
          style={{
            marginTop: "20px",
            width: "400px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          <h6>Add Author</h6>
          <TextField id="standard-basic" label="Name*" variant="standard" />

          <TextField id="standard-basic" label="BirthDay*" variant="standard" />
          <br />
          <TextField id="standard-basic" label="Genre*" variant="standard" />
          <BasicSelect2 />
          <BasicSelect3 />
          <br />
          <TextField id="standard-basic" label="imgURL*" variant="standard" />
          <br />
        </div>
      </div>
    </div>
  );
}

export default addAuthors;
