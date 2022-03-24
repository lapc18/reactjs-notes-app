import React from "react";
import Appbar from "../../components/AppBar/AppBar";
import { NoteList } from "../../components/Note";

export default function Home() {
    return (
        <>
            <Appbar />
            <NoteList />
        </>
    );
}