import './App.css';
import {
  BrowserRouter,
  Router,
  Routes,
  Route
}
from 'react-router-dom'
import Main from './pages/Main';
import LoginPage from './pages/Login';
const App = () => {


  return(
    <>
        <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;