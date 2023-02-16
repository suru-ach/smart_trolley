import { Flowbite, DarkThemeToggle } from 'flowbite-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Flowbite className='min-h-full'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element = {<LoginForm/>}/>
            <Route path='/landingPage' element = {<Home/>}/>
          </Routes>
        </BrowserRouter>
      </Flowbite>
    </>
  );
}

export default App;
