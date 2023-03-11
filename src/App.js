// import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Pages from './pages';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
const { LoginPage, DashboardPage } = Pages;
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
      <Routes>
      <Route path='/' >
        <Route index element={<LoginPage />} />
        <Route path="dashboard" element={<DashboardPage/>} />
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
