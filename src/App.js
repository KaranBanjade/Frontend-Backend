// import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Pages from './pages';
import Components from './components';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
const { LoginPage, DashboardPage, CreateProjectPage,LandingPage,ProfilePage, ViewAllProjects } = Pages;
const { NavbarComponent, SecureRoutes } = Components;
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
      <NavbarComponent />
      <Routes>
      <Route path='/' >
        <Route index element={<LandingPage />} />
        <Route path = "login" element={<LoginPage />} />
        <Route path="profile" element={<SecureRoutes component={<ProfilePage/>} />} />
        <Route path="dashboard" element={<DashboardPage/>} />
        {/* <Route path="addnewbackend" element={< SecureRoutes component={<CreateProjectPage/> } />} /> */}
        <Route path="addnewbackend" element={<CreateProjectPage/>} />
        <Route path="viewallprojects" element={<ViewAllProjects/>} />
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
