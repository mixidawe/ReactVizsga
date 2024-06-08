import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Kepek from './pages/Kepek';
import Videok from './pages/Videok';
import Account from './pages/Account';

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>React Vizsgamunkám kedvenc képek és videók</h1>
      </header>

      <nav>
        <ul>
          <li><Link to='/'>Kezdőlap</Link></li>
          <li><Link to='/kepek'>Képek</Link></li>
          <li><Link to='/videok'>Videók</Link></li>
          <li><Link to='/account'>Account</Link></li>
        </ul>
      </nav>

      <article>
        <div id="tartalom">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/kepek' element={<Kepek />} />
            <Route path='/videok' element={<Videok />} />
            <Route path='/account' element={<Account />} />
          </Routes>
        </div>
        <div className='container'>
          <h2 className='col col-12'>Archive tartalom!</h2>
          <h3 className='col col-12'>Kedvenc képeim:</h3>
          <div className="col col-12">1; Saját fotó a holdról!</div>
          <div className="col col-12">2; Legjobb rajzom</div>
          <div className="col col-12">3; Vadászgép a szolnoki Reptárban</div>
          <h3 className="col col-12">Kedvenc videóim:</h3>
          <div className="col col-12">1; Sky Fanatic: A sátán kutyája!</div>
          <div className="col col-12">2; Vasmacskák: Százat előlre</div>
          <div className="col col-12">3; Havasi: Drum and Piano</div>
        </div>
      </article>

      <footer>
        <h2>Az oldalt készítette Andó Dávid 2024.04.30</h2>
      </footer>
    </BrowserRouter>
  );
}

export default App;
