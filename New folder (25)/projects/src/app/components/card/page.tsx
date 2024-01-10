import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Flex } from "antd";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import app from "../../firebase/config";

export default function MediaCard({ elem, data, setData }) {
  return (
    <Card sx={{ minWidth: 345 }}>
      <CardMedia sx={{ height: 300 }} image={elem.image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {elem.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          age:{elem.age} <br />
          gender:{elem.gender} <br />
          genre:{elem.genre} <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          type="primary"
          danger
          onClick={() => {
            const deleteCard = async () => {
              const firebase = getFirestore(app);
              await deleteDoc(doc(firebase, "music", elem.id));
            };
            deleteCard();
            setData(data.filter((element) => element.id != elem.id));
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
