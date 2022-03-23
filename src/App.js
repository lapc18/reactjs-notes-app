import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import customTheme from './styles/material-theme';
import Home from './pages/Home/Home';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
