import mongoose from "mongoose";

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URI || "")
    .then(() => {
      console.log("connect");
    })
    .catch((err: Error) => {
      console.log(err);
    });
};

export default connect;
