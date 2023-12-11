import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { postDeleted } from "./postSlice";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BasicCard from "../Card/card";
import ResponsiveAppBar from "../Navbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { postUpdated } from "./postSlice";

function Postblog() {
  const post = useSelector((state) => state.posts.post);
  const [inpValue1, setInpValue1] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postAdded(inpValue1));
    setInpValue1("");
  };
  const handleDelete = (postId) => {
    dispatch(postDeleted(postId));
  };
  const handleEdit = (postId, editedTitle) => {
    dispatch(postUpdated({ id: postId, editedTitle }));
  };

  return (
    <>
      <ResponsiveAppBar />
      <h3>Blog</h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Content</label>
        <br />
        <input
          type="text"
          onChange={(e) => {
            setInpValue1(e.target.value);
          }}
        />
        <br />
        <button type="submit">add</button>
      </form>
      <ul>
        {post &&
          post.map((elem, uuidv4) => {
            return (
              <BasicCard
                key={uuidv4}
                elem={elem}
                onDelete={handleDelete}
                onEdit={handleEdit}
              >
                <Button>Delete</Button>
              </BasicCard>
            );
          })}
      </ul>
    </>
  );
}

export default Postblog;
