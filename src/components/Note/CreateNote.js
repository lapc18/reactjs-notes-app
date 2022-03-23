import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export function CreateNote() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const onSave = () => {
    console.log("value: ", title);
    setTitle("");
    setNote("");
  };

  return (
    <Container>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h3">Create</Typography>
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
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <Button variant="contained" onClick={onSave}>
          Save
        </Button>
      </Box>
    </Container>
  );
}
