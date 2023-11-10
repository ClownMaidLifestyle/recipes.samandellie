import './App.css';
import Header from './components/Header.js';
import Footer from './components/footer.js';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Splash from './components/routerComponents/Splash.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Splash/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
