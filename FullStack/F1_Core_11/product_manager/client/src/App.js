// import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
// import ProductForm from './components/ProductForm';
import OneProduct from './components/OneProduct';
import UpdateProduct from './components/UpdateProduct';
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <OneProduct path="/:id" />
        {/* <OneProduct path="/product/:id" /> */}
        <UpdateProduct path="/product/edit/:id" />
        {/* <ProductForm /> */}
      </Router>
    </div>
  );
}

export default App;
