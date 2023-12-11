import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const url = "http://localhost:3000/posts";

const initialState = {
  post: [],
  error: null,
  status: "idle",
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const res = await axios.get(url);
    return [...res.data];
  } catch (err) {
    return err.message;
  }
});
export const postSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    postAdded: (state, action) => {
      let obj = {
        id: uuidv4(),
        title: action.payload,
      };
      state.post.push(obj);
    },
    postDeleted: (state, action) => {
      state.post = state.post.filter((post) => post.id !== action.payload);
    },
    postUpdated: (state, action) => {
      const { id, updatedTitle } = action.payload;
      const postToUpdate = state.post.find((post) => post.id === id);
      if (postToUpdate) {
        postToUpdate.title = updatedTitle;
      }
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchPosts.fulfilled, (state, action) => {
  //         state.status = "succeeded";
  //         state.post = action.payload;
  //       })
  //       .addCase(fetchPosts.pending, (state) => {
  //         state.status = "loading";
  //       })
  //       .addCase(fetchPosts.rejected, (state, action) => {
  //         state.status = "failed";
  //         state.error = action.error.message;
  //       })
  //       .addCase(createPost.fulfilled, (state, action) => {
  //         state.status = "succeeded";
  //         state.post.push(action.payload);
  //       });
  //   },
  //   extraReducers: (builder) => {
  //     builder.addCase(fetchPosts.pending, (state, action) => {
  //       state.loading = true;
  //     });
  //     builder.addCase(fetchPosts.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.products = action.payload;
  //     });
  //     builder.addCase(fetchPosts.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.payload;
  //     });
  //     // get id
  //     builder.addCase(fetchPosts.pending, (state, action) => {
  //       state.loading = true;
  //     });
  //     builder.addCase(fetchPosts.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.product = action.payload;
  //     });
  //     builder.addCase(fetchPosts.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.payload;
  //     });
  //     // post prod
  //     builder.addCase(fetchPosts.pending, (state, action) => {
  //       state.loading = true;
  //     });
  //     builder.addCase(fetchPosts.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.postProd = action.payload;
  //     });
  //     builder.addCase(fetchPosts.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.payload;
  //     });
  //   },
});

export const { postAdded, postDeleted, postUpdated } = postSlice.actions;

export default postSlice.reducer;
