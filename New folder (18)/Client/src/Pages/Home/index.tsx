import React, { ReactElement } from "react";
import Navbar from "../../Navbar/Navbar";
import img from "../../assets/Marvel.jpg";

interface Props {}

function Home({}: Props): ReactElement {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <img
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "500px",
            height: "500px",
          }}
          src={img}
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
