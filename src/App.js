import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/home/navigation/navigation.component';

const Shop = () => {
  return (
    <div>
      <h1>I am the shop component</h1>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
