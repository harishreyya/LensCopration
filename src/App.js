import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import { Services } from './components/Services';

function App() {
  return (
    <div className="App">
     <Home/>
     <About/>
     <Services/>
    </div>
  );
}

export default App;
