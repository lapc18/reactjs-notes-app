import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { noteEdit, noteRemove } from "../../store/slices/noteSlice";
import { useNavigate } from "react-router-dom";

export function NoteList() {
  const dispatch = useDispatch();
  const history = useNavigate()
  const notes = useSelector((state) => state.notes.list);

  const onRemove = (id) => dispatch(noteRemove(id));
  const onEdit = (note) => {
      dispatch(noteEdit({...note}));
      history('/edit')
  }

  const renderedNotes = notes.map((note) => (
    <Grid item xs={3} sm={6} md={4} sx={{ p: 0.1 }} key={note.id}>
      <Card variant="outlined">
        <CardHeader title={note.title} subheader={note.date} />
        <CardContent>
          <Typography variant="body2" color="GrayText">
            {note.content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={() => onEdit(note)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => onRemove(note.id)}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  ));

  const renderEmptyNotes = (
    <Grid item xs={2} sm={6} md={4}>
      <Typography variant="h3" align="center">
        No notes added:)
      </Typography>
    </Grid>
  );

  return (
    <Grid
      container
      justifyContent={"center"}
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {notes.length > 0 ? renderedNotes : renderEmptyNotes}
    </Grid>
  );
}
