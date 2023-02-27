import { Routes, Route } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage } from 'pages';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path={'/'} element={<HomePage />}></Route>
          <Route exact path={'/login'} element={<LoginPage />}></Route>
          <Route exact path={'/register'} element={<RegisterPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
