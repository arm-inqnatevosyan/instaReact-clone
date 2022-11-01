import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import FullPage from "./components/FullPage";
import NotFound from './components/NotFound';
import Login from './components/login/Login';
import Registr from './components/login/registr/Registr';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FullPage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/registr" element={<Registr />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
