import {
  Box,
  Button,
  Container,
  Fab,
  TextField,
  Typography,
} from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { noteAdded, noteSaveEdit } from "../../store/slices/noteSlice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function CreateNote() {
  const location = useLocation();
  const note = useSelector((payload) => payload.notes.currentSelected);
  const isEditMode = location.pathname.includes("edit");

  const [title, setTitle] = useState(isEditMode ? note.title : "");
  const [content, setContent] = useState(isEditMode ? note.content : "");

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const onGoHome = () => navigation("/");

  const onSave = () => {
    const createdAt = moment(new Date()).format("MMMM Do YYYY");
    if (title && content && !isEditMode) {
      dispatch(
        noteAdded({
          id: nanoid(),
          title,
          content,
          createdAt,
        })
      );
    } else if (title && content && isEditMode) {
      dispatch(
        noteSaveEdit({
          id: note.id ?? nanoid(),
          title,
          content,
          createdAt,
        })
      );
    }
    setTitle("");
    setContent("");
  } 

  return (
    <>
      <Container>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h3">
            {isEditMode ? "Edit" : "Create"}{" "}
          </Typography>
          <div>
            <TextField
              required
              id="title"
              label="Title"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <TextField
              multiline
              required
              id="note"
              label="Note"
              variant="outlined"
              minRows={15}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <Button variant="contained" onClick={onSave} component={Link} to="/">
            Save
          </Button>
        </Box>
      </Container>
      <Fab
        style={{ right: 20, bottom: 20, position: "fixed" }}
        color="primary"
        aria-label="add"
        onClick={onGoHome}
      >
        <ArrowBackIcon />
      </Fab>
    </>
  );
}
