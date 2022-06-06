/**
 * @author Afaaq Majeed
 * @link  https://github.com/afaaq10/redux-prac
 */


import './App.css';
import Header from './components/Header'

import ProductDetails from './components/ProductDetails'
import ProductListing from './components/ProductListing'
import ErrorPage from './components/ErrorPage'
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

          <Route path="/products/:productId" element={<ProductDetails />} />

          <Route path="/ErrorPage" element={<ErrorPage />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
