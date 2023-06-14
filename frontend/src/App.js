import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Alert from './components/Alert';
import { useContext } from 'react';
import AlertContext from './contexts/AlertContext';
import ResumeState from './contexts/ResumeState';
import AddResume from './components/AddResume';

function App() {
  let { alert } = useContext(AlertContext);
  return (
    <ResumeState>
      <Router>
        <NavBar />
        {alert && <Alert alert={alert} />}
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/share-resume' element={<AddResume />} />
        </Routes>
      </Router>
    </ResumeState>
  );
}

export default App;
