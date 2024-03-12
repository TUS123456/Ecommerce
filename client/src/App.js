import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Policy from './pages/Policy.js';
import Login from './pages/Auth/Login.js'
import PageNotFound from './pages/PageNotFound.js';
import Register from './pages/Auth/Register.js';
import Dashboard from './pages/user/Dashboard.js';
import PrivateRoute from './components/Routes/Private.js';
import Forget from './pages/Auth/Forget.js';
import AdminRoute from './components/Routes/AdminRoute.js';
import AdminDashoard from './pages/Admin/AdminDashoard.js';

function App() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path='/dashboard' element={<PrivateRoute/>}>
         <Route path='' element={<Dashboard/>} />
        </Route>
        <Route path='/dashboard' element={<AdminRoute/>}>
         <Route path='admin' element={<AdminDashoard/>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/forget-password" element={<Forget />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </div>
  );
}

export default App;
