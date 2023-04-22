
import './App.css';
import Filter from './components/Filter/Filter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';


function App() {
  return (
    <div className="App">
      <header>
      <Header />
      </header>
      <Filter />
      <ProductList />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
