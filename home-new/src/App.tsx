import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Facility from './pages/Facility';
import Recovery from './pages/Recovery';
import Supplements from './pages/Supplements';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/supplements" element={<Supplements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
