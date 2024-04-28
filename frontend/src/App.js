import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import CoffeePage from './Pages/CoffeePage';
import CoffeeItemPage from './Pages/CoffeeItemPage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/coffee" element={<CoffeePage />} />
        <Route path="/coffeeItem" element={<CoffeeItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;