import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import CoffeePage from './Pages/CoffeePage';
import CoffeeItemPage from './Pages/CoffeeItemPage';
import Footer from './Components/Footer';
import CardsContext from './context/CardsContext';


function App() {

  const CardsProvider = ({ children }) => {
    const contextValue = [
      { img: require('./images/mainCard1.png'), title: 'Solimo Coffee Beans 2 kg', price: '10.73$' },
      { img: require('./images/mainCard2.png'), title: 'Presto Coffee Beans 1 kg', price: '15.99$' },
      { img: require('./images/mainCard3.png'), title: 'Solimo Coffee Beans 2 kg', price: '6.99$' },
      { img: require('./images/cardImg.png'), header: 'AROMISTICO Coffee 1kg', country: 'Brazil', price: '6.99$' },
      { img: require('./images/cardImg.png'), header: 'AROMISTICO Coffee 1kg', country: 'Kenya', price: '6.99$' },
      { img: require('./images/cardImg.png'), header: 'AROMISTICO Coffee 1kg', country: 'Columbia', price: '6.99$' },
      { img: require('./images/cardImg.png'), header: 'AROMISTICO Coffee 1kg', country: 'Brazil', price: '6.99$' },
      { img: require('./images/cardImg.png'), header: 'AROMISTICO Coffee 1kg', country: 'Brazil', price: '6.99$' },
      { img: require('./images/cardImg.png'), header: 'AROMISTICO Coffee 1kg', country: 'Brazil', price: '6.99$' },
    ];

    return (
      <CardsContext.Provider value={contextValue}>
        {children}
      </CardsContext.Provider>
    );
  };

  return (
    <CardsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/coffee" element={<CoffeePage />} />
          <Route path="/coffeeItem" element={<CoffeeItemPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CardsProvider>
  );
}

export default App;