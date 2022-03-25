import React from "react";
import { NoteList } from "../../components/Note";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigation = useNavigate();

  const onAdd = () => navigation("/create");

  return (
    <>
      <NoteList />
      <Fab
        style={{ right: 20, bottom: 20, position: "fixed" }}
        color="primary"
        aria-label="add"
        onClick={onAdd}
      >
        <AddIcon />
      </Fab>
    </>
  );
}
