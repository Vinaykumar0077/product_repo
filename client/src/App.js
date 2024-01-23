import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Product from './components/Product';
import CreateProduct from "./components/CreateProduct";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Router>  
      <Navigation/>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/:id" element={<CreateProduct />} />
          <Route exact path="/create" element={<CreateProduct />} />
          <Route path="/update/:id" element={<CreateProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
