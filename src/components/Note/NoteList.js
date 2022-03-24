import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export function NoteList() {
  const notes = useSelector((state) => state.notes);

  const renderedNotes = notes.map((note) => (
    <Grid item>
      <Card variant="outlined">
        <CardHeader title={note.title} subheader={note.date} />
        <CardContent>
          <Typography variant="body2" color="GrayText">
            {note.content}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ));

  const renderEmptyNotes = (
    <Grid item xs={12} sm={6}>
      <Typography variant="h3" align="center">
        No notes added:)
      </Typography>
    </Grid>
  );

  return (
    <Grid container justifyContent={"center"} spacing={2}>
      {notes.length > 0 ? renderedNotes : renderEmptyNotes}
    </Grid>
  );
}
