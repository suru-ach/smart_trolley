import { Flowbite, DarkThemeToggle, useTheme } from 'flowbite-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import TestComponent from './components/testComponent';
import StoreManagement from './pages/StoreManagement';
import NavbarComponent from './components/Navbar';
import FooterComponent from './components/Footer';
import Previouscomponent from './pages/Previous';
import { useState } from 'react';

function App() {
  const theme = useTheme().theme.button
  const [ShowComponents, setShowComponents] = useState(true);

  const checkAuth = false
  return (
    <>
      <div className={`${theme.color.light}`}>
        <Flowbite className={`min-h-full`}>
          <BrowserRouter>
            {ShowComponents && (
              <NavbarComponent props={{ ShowComponents, setShowComponents }}></NavbarComponent>
            )}
            <Routes>
              <Route path='/' element={<LoginForm props={{ ShowComponents, setShowComponents }}/>}  />
              <Route path='/register' element={<RegisterForm />}  />
              <Route path='/landingPage' element={checkAuth ? <Home /> : <LoginForm props={{ShowComponents, setShowComponents}}/>}  />
              <Route path='/about' element={checkAuth ? <About /> : <LoginForm props={{ShowComponents, setShowComponents}}/>}  />
              <Route path='/cart' element={checkAuth ? <Cart /> : <LoginForm props={{ShowComponents, setShowComponents}}/>}  />
              <Route path='/previousbills' element={checkAuth ? <Previouscomponent /> : <LoginForm props={{ShowComponents, setShowComponents}}/>}  />
              <Route path='/newbill' element={<TestComponent />}  />
              <Route path='/storepage' element={checkAuth ? <StoreManagement /> : <LoginForm props={{ShowComponents, setShowComponents}}/>}  />
            </Routes>
            {ShowComponents && (
              <FooterComponent />
            )}
          </BrowserRouter>
        </Flowbite>
      </div>
    </>
  );
}

export default App;
