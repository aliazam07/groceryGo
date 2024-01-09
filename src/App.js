import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from "./components/mainContent/Main";
import Navbar from "./components/navbar/Navbar";
import PriceComparison from './components/mainContent/priceComparison/PriceComparison';
import Home from "./components/homePage/Home";



function App() {
  return (<>

 <Navbar />
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/main/:category" element={<Main />} />
      <Route path="/compare/:id" element={<PriceComparison />} />
    </Routes>
  </Router>
  </>
  );
}

export default App;
