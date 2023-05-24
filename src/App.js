import './styles.css'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Ring from './pages/Ring';
import Isle from './pages/Isle';
import Dine from './pages/Dine';
import Engagement from './pages/Engagement';
import Footer from './Components/Footer';
import Anniversary from './services/Anniversary';
import AnnualFunction from './services/AnnualFunction';
import BabyShower from './services/BabyShower';
import BirthdayParty from './services/BirthdayParty';
import CulturalEvent from './services/CulturalEvent';
import EngagementServices from './services/EngagementServices';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
        <Route path='/anniversary' element={<Anniversary />} />
          <Route path='/annual-function' element={<AnnualFunction />} />
          <Route path='/baby-shower' element={<BabyShower />} />
          <Route path='/birthday-party' element={<BirthdayParty />} />
          <Route path='/cultural-event' element={<CulturalEvent />} />
          <Route path='/engagement-services' element={<EngagementServices />} />
          <Route path='/' element={<Home />} />
          <Route path='/ring' element={<Ring />} />
          <Route path='/engagement' element={<Engagement />} />
          <Route path='/isle' element={<Isle />} />
          <Route path='/dine' element={<Dine />} />
          
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
