"use client";
import MediaCard from "@/app/components/card/page";
import ButtonAppBar from "@/app/components/navbar/page";
import Search from "@/app/components/search/page";
import BasicSelect from "@/app/components/select/page";
import SelectIndicator from "@/app/components/select/page";

import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import app from "./../../firebase/config";

function Authors({}: Props): ReactElement {
  const [data, setData] = useState([]);
  const getDataFirestore = async () => {
    const firebase = getFirestore(app);
    const querySnapshot = await getDocs(collection(firebase, "musicc"));

    let arr = [];
    querySnapshot.forEach((doc) => {
      let obj = {
        id: doc.id,
        name: doc.data().name,
        age: doc.data().age,
        genre: doc.data().genre,
        image: doc.data().image,
        gender: doc.data().gender,
      };
      arr.push(obj);
    });
    console.log(arr);
    setData(arr);
  };

  useEffect(() => {
    getDataFirestore();
  }, []);
  return (
    <>
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
            display: "flex",
          }}
        >
          <Search />
          <BasicSelect />
        </div>
        <div
          style={{
            gap: "20px",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          {data &&
            data.map((elem, idx) => {
              return (
                <MediaCard
                  key={idx}
                  elem={elem}
                  data={data}
                  setData={setData}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Authors;
