import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Quote from './pages/Quote';

export default function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<About />} />
      <Route path='/quote' element={<Quote />} />
    </Routes>
    </>
  );
}
