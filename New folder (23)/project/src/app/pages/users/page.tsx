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
} from "firebase/firestore";
import app from "../../firebase/config";
import { Button, Divider, Flex, Radio } from "antd";

interface Props {}

function Users({}: Props): ReactElement {
  const router = useRouter();
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

  return (
    <>
      <ul>
        {fireBaseData &&
          fireBaseData.map((elem, idx) => {
            return (
              <li key={idx}>
                {elem.name}
                {elem.surname}
                <Button
                  onClick={() => {
                    const deleteFunc = async () => {
                      const db = getFirestore(app);
                      await deleteDoc(doc(db, "users", elem.id));
                    };
                    deleteFunc();
                    setFireBaseData(
                      fireBaseData.filter((element) => element.id != elem.id)
                    );
                  }}
                >
                  Delete Data
                </Button>
                <Button
                  onClick={() => {
                    router.push("/pages/users/user" + elem.id);
                  }}
                >
                  detail
                </Button>
              </li>
            );
          })}
      </ul>

      <Button>
        <Link href="/pages/home">Home</Link>
      </Button>
      <Button>
        <Link href="/pages/addUsers">addUsers</Link>
      </Button>
    </>
  );
}

export default Users;
