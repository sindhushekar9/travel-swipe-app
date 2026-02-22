import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './shared/Layout';
import Home from './pages/Home';
import SwiperStats from './pages/SwiperStats';
import SwiperProfile from './pages/Profile';
import Swiper from './pages/Swiper';

function App() {

  return (
<Routes>
  {/* Home page without Layout */}
  <Route path="/" element={<Home />} />

  {/* All other pages with Layout */}
  <Route path="/" element={<Layout />}>
    <Route path="liked" element={<SwiperStats />} />
    <Route path="profile" element={<SwiperProfile />} />
    <Route path="swiper" element={<Swiper />} />
  </Route>
</Routes>
  )
}

export default App
