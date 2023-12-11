import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

export default function BasicCard({ elem, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(elem.title);
  const handleEditSave = () => {
    onEdit(elem.id, editedTitle);
    setIsEditing(false);
  };
  return (
    <Card sx={{ width: 275 }}>
      <CardContent>
        {isEditing ? (
          <TextField
            fullWidth
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        ) : (
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {elem.title}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        {isEditing ? (
          <Button onClick={handleEditSave} size="small">
            Save
          </Button>
        ) : (
          <>
            <Button onClick={() => onDelete(elem.id)} size="small">
              <FontAwesomeIcon icon={faTrash} />
            </Button>
            <Button onClick={() => setIsEditing(true)} size="small">
              <FontAwesomeIcon icon={faPencil} />
              Edit
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
}
