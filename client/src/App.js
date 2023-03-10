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
import AddProducts from './pages/AddProducts';

function App() {
  const theme = useTheme().theme.button
  return (
    <>
    <div className={`${theme.color.light}`}>
      <Flowbite className={`min-h-full`}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element = {<LoginForm/>}/>
            <Route path='/register' element = {<RegisterForm/>}/>
            <Route path='/landingPage' element = {<Home/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/cart' element = {<Cart/>}/>
            <Route path='/previousbill' element = {<Previous/>}/>
            <Route path='/newbill' element = {<TestComponent/>}/>
            <Route path='/addproduct' element = {<AddProducts/>}/>
          </Routes>
        </BrowserRouter>
      </Flowbite>
      </div>
    </>
  );
}

export default App;
