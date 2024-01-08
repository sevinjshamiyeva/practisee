import React, { ReactElement } from "react";
import Link from "next/link";

interface Props {}

function Home({}: Props): ReactElement {
  return (
    <>
      <h1>Home</h1>
      <Link href="/pages/users">User</Link>
    </>
  );
}

export default Home;
