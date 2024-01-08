"use client";
import React, { ReactElement } from "react";
import { Button } from "antd";
import Link from "next/link";
import { Formik, useFormik } from "formik";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import app from "../../firebase/config";
import { v4 as uuidv4 } from "uuid";

interface Props {}

function AddUsers({}: Props): ReactElement {
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: "",
      surname: "",
    },
    onSubmit: (values) => {
      const addFireBaseData = async () => {
        let obj = {
          name: values.name,
          id: uuidv4(),
          surname: values.surname,
        };
        const db = getFirestore(app);
        const newUserRef = doc(collection(db, "users"));
        await setDoc(newUserRef, obj);
      };
      addFireBaseData(values);
    },
  });

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          style={{ border: "1px solid black" }}
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          style={{ border: "1px solid black" }}
          type="text"
          name="surname"
          placeholder="surname"
          onChange={handleChange}
        />
        <button type="submit">addUsers</button>
      </form>
      <Button>
        <Link href="/pages/users">Users</Link>
      </Button>
    </>
  );
}

export default AddUsers;
