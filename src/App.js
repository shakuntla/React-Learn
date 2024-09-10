import './App.css';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import FetchApi from './components/FetchApi';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Counter/>
      <FetchApi />
    </div>
  );
}

export default App;
