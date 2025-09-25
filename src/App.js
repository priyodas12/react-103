
import './App.css';
import GenericHeader from './header/GenericHeader';
import Footer from './footer/Footer';
import Search from './search/Search';
import Restaurants from './restaurants/Restaurants';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GenericHeader />
      </header>
      <body>
        <Search/>
        <Restaurants />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
