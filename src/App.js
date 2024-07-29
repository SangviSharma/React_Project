import logo from './logo.svg';
import './App.css';
import SignupForm from './component/SignupForm';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './component/LoginForm';
import Dashboard from './component/Dashboard';
import HomePage from './component/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;

