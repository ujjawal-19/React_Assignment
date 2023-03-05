import { BrowserRouter, Routes ,Route,Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <button> <Link to='/home'>Home</Link></button>
      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
