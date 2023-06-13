import './App.css';
import Pages from './pages';
import Components from './components';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { LoginPage, DashboardPage, CreateProjectPage,LandingPage,ProfilePage, ViewAllProjects } = Pages;
const { NavbarComponent, SecureRoutes } = Components;
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover
            theme="light"
        />
      {
        window.location.pathname =='/' ? null : <NavbarComponent />
      }
      <Routes>
      <Route path='/' >
        <Route index element = {<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="profile" element={<SecureRoutes component={ProfilePage} /> } />
        <Route path="dashboard" element={<SecureRoutes component={DashboardPage} /> }  />
        <Route path="addnewbackend" element={<SecureRoutes component={CreateProjectPage} /> } />
        <Route path="viewallprojects" element={<SecureRoutes component={ViewAllProjects} /> } />
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
