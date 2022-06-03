/**
 * @author Afaaq Majeed
 * @link  https://github.com/afaaq10/redux-prac
 */


import './App.css';
import Header from './components/Header'
import ProductComponent from './components/ProductComponent'
import ProductDetails from './components/ProductDetails'
import ProductListing from './components/ProductListing'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {




  return (
    <div className="App">
      <Router>

        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/ProductComponent" element={<ProductComponent />} />
          <Route path="/:productId" element={<ProductDetails />} />

          <Route >404 not found</Route>

        </Routes>

      </Router>
    </div>
  );
}

export default App;
