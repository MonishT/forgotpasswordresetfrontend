import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import ForgotPassword from './components/forgotPassword.jsx';
import ResetPassword from './components/resetPassword.jsx';
import MainPage from './components/mainPage.jsx';
import CreateUser from './components/createUser.jsx';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/createUser" element={<CreateUser/>} />
          <Route path='forgotPassword' element={<ForgotPassword />} />
          <Route path='resetPassword/:token' element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
