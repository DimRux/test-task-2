import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
import CoffeePage from './Components/CoffeePage';
import CoffeeItemPage from './Components/CoffeeItemPage';


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