import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { Solutions } from './components/Solutions';

function App() {
  return (
    <div className="App">
     <Home/>
     <About/>
     <br/>
     <br/>
     <br/>
     <Services/>
     <Solutions/>
    </div>
  );
}

export default App;
