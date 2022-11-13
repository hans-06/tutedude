import './App.css';
import BelowHeader from './Components/BelowHeader/BelowHeader';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Header1 from './Components/Header1/Header1';
import Work from './Components/Work/Work';
function App() {
  return (
    <div className="App">
      <Header />
      <Header1 />
      <BelowHeader />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
