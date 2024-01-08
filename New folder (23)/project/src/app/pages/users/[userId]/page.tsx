"use client";
import React, { ReactElement, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import {
  collection,
  doc,
  getFirestore,
  getDocs,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import app from "@/app/firebase/config";

interface Props {}

function Detail({}: Props): ReactElement {
  const params = useParams();
  const [fireBaseData, setFireBaseData] = useState([]);
  const getData = async () => {
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "users"));
    console.log("querySnapshot", querySnapshot);
    let arr = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      let obj = {
        id: doc.id,
        name: doc.data().name,
        surname: doc.data().surname,
      };
      arr.push(obj);
    });
    console.log("arr", arr);
    setFireBaseData(arr);
  };
  useEffect(() => {
    getData();
  }, []);
  return <div>{}</div>;
}

export default Detail;
