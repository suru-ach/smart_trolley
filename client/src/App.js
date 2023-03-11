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
import axiosInstance from 'axios';
import 'flowbite/dist/flowbite'
import Newregistrationcomponent from './components/Newregister';

const axios = axiosInstance.create({ withCredentials: true })

function App() {
  const theme = useTheme().theme.button
  const [ShowComponents, setShowComponents] = useState(true);
  var LoggedIn = true;

  return (
    <>
      <div className={`${theme.color.light}`}>
        <Flowbite className={`min-h-full`}>
          <BrowserRouter>
            {ShowComponents && (
              <>
                <NavbarComponent props={{ ShowComponents, setShowComponents }}></NavbarComponent>
                <DarkThemeToggle className="sticky top-[90vh] z-20"></DarkThemeToggle>

              </>
            )}
            <Routes>
              <Route path='/' element={<LoginForm props={{ ShowComponents, setShowComponents }} />} />

              <Route path='/register' element={<Newregistrationcomponent props={{ ShowComponents, setShowComponents }}/>} />
              <Route path='/landingPage' element={LoggedIn ? <Home /> : <LoginForm props={{ ShowComponents, setShowComponents }} />} />
              <Route path='/about' element={LoggedIn ? <About /> : <LoginForm props={{ ShowComponents, setShowComponents }} />} />
              <Route path='/cart' element={LoggedIn ? <Cart /> : <LoginForm props={{ ShowComponents, setShowComponents }} />} />
              <Route path='/previousbills' element={LoggedIn ? <Previouscomponent /> : <LoginForm props={{ ShowComponents, setShowComponents }} />} />
              <Route path='/newbill' element={<TestComponent />} />
              <Route path='/storepage' element={LoggedIn ? <StoreManagement /> : <LoginForm props={{ ShowComponents, setShowComponents }} />} />
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
