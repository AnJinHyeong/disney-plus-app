import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Banner />
      </div>
    </BrowserRouter>
  );
}

export default App;
