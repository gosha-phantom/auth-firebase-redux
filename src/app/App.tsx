import { Routes, Route } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage } from 'pages';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path={'/'} element={<HomePage />}></Route>
          <Route path={'/login'} element={<LoginPage />}></Route>
          <Route path={'/register'} element={<RegisterPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
