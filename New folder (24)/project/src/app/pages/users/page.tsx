"use client";
import React, { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  collection,
  doc,
  getFirestore,
  getDocs,
  deleteDoc,
  setDoc,
  limit,
} from "firebase/firestore";
import app from "../../firebase/config";

interface Props {}

function Users({}: Props): ReactElement {
  const [data, setData] = useState([]);
  const getData = async () => {
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "users"));
    let arr = [];
    querySnapshot.forEach((doc) => {
      let obj = {
        id: doc.id,
        name: doc.data().name,
        password: doc.data().password,
      };
      arr.push(obj);
      setData(arr);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <ul>
        {data &&
          data.map((elem, idx) => {
            return (
              <li key={idx}>
                {elem.name} {elem.password}
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Users;
