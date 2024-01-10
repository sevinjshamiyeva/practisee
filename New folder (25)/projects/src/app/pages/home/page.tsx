import ButtonAppBar from "@/app/components/navbar/page";
import React, { ReactElement } from "react";

interface Props {}

function Home({}: Props): ReactElement {
  return (
    <>
      <ButtonAppBar />
      <div
        className="container"
        style={{
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
          height: "100vh",
          fontSize: "60px",
        }}
      >
        <h2>THIS IS HOME PAGE</h2>
      </div>
    </>
  );
}

export default Home;
