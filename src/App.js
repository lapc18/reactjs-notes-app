import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import customTheme from "./styles/material-theme";
import Appbar from "./components/AppBar/AppBar";
import { CreateNote } from "./components/Note";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Appbar>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateNote />} />
              <Route path="/edit" element={<CreateNote />} />
            </Routes>
          </Router>
        </Appbar>
      </ThemeProvider>
    </>
  );
}

export default App;
