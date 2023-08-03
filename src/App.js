
import "./App.css";
import Css from './css/App.css'
import HOME from "./page/HOME";
import PRODUCT from "./page/PRODUCT";

import {Link,BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <header className="header">
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/PRODUCT">PRODUCT</Link>
        </nav>
      </header>
      <main>
      <Routes>
          <Route path="/" element={<HOME />}></Route>
          <Route path="/PRODUCT" element={<PRODUCT />}></Route>
        </Routes>
      </main>

      
    </div>
    </BrowserRouter>
   
  );
}

export default App;
