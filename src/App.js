import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navegacion/Navbar';
import Inicio from './components/paginas/Inicio';
import Pokemon from './components/paginas/Pokemon';
import Items from './components/paginas/Items';


function App() {

  return (
    <div className="App">

      <Router>
        <Navbar/>
          <Routes>
          <Route path='/' exact component={Inicio}/>
          <Route path='/pokemon' component={Pokemon}/>
          <Route path='/items' component={Items}/>
          </Routes>
      </Router>


    </div>
  );
}

export default App;
