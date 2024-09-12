import './App.css';
import Navbar from './components/Navbar';
import FetchApi from './components/FetchApi';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SignUp from './components/SignUp'
import {BrowserRouter , Route, Routes} from "react-router-dom"
import Login from './components/Login';
import Footer from './components/Footer';
import ViewMenu from './components/ViewMenu'
import  Menu  from './components/Menu';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/Login' element={<Login/>}/>      
      <Route path='/Navbar' element={<Navbar />}/>
      <Route path='/Menu'element={<Menu/>}/>
      <Route path='/FatchApi' element={<FetchApi />}/>
      <Route path='/Footer' element={<Footer/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/ViewMenu' element={<ViewMenu/>}/>
      </Routes>          
      </BrowserRouter>
    </div>
  );
}

export default App;
