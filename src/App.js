
import './App.css';
import GenericHeader from './components/header/GenericHeader';
import Footer from './components/footer/Footer';
import Search from './components/search/Search';
import Restaurants from './components/restaurants/Restaurants';

function App() {
  return (
    <div className="App">
      <div className="header-content">
        <GenericHeader />
      </div>
      <div className='body-content'>
        <Search/>
        <Restaurants />
      </div>
      <div className='footer-content'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
