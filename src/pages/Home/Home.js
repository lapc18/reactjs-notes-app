import React from "react";
import Appbar from "../../components/AppBar/AppBar";
import { CreateNote } from "../../components/Note";

export default function Home() {
    return (
        <>
            <Appbar />
            <CreateNote />
        </>
    );
}