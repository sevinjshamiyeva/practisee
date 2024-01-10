import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "black" }} position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ fontSize: "40px" }}
          >
            Authors
          </Typography>
          <Button color="inherit">
            <Link href="/pages/home">Home</Link>
          </Button>
          <Button color="inherit">
            <Link href="/pages/authors">Authors</Link>
          </Button>
          <Button color="inherit">
            <Link href="/pages/addAuthors">Add Authors</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
