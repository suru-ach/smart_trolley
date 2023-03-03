import { Flowbite, DarkThemeToggle, useTheme } from 'flowbite-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Previous from './pages/Previous';
import TestComponent from './components/testComponent';
import NavbarComponent from './components/Navbar';
import FooterComponent from './components/Footer';
import { useState } from 'react';

function App() {
  const theme = useTheme().theme.button
  const [ShowComponents, setShowComponents] = useState(true);

  return (
    <>
      <div className={`${theme.color.light}`}>
        <Flowbite className={`min-h-full`}>
          <BrowserRouter>
            {ShowComponents && (
              <NavbarComponent props={{ShowComponents, setShowComponents}}></NavbarComponent>
            )}
            <Routes>
              <Route path='/' element={<LoginForm props={{ShowComponents, setShowComponents}}/>} />
              <Route path='/register' element={<RegisterForm />} />
              <Route path='/landingPage' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/previousbill' element={<Previous />} />
              <Route path='/newbill' element={<TestComponent />} />
            </Routes>
            {ShowComponents && (
              <FooterComponent/>
            )}
          </BrowserRouter>
        </Flowbite>
      </div>
    </>
  );
}

export default App;
