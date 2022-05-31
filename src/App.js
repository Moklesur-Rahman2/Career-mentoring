import './App.css';
import Header from './templates/Header/Header';
import Checkout from './templates/Checkout/Checkout'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Login from './templates/Login/Login';
import NotFound from './templates/NotFound/NotFound';
import Register from './templates/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Footer from './templates/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
