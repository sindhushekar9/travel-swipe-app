import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './shared/Layout';
import Home from './pages/Home';
import SwiperStats from './pages/SwiperStats';
import SwiperProfile from './pages/Profile';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="liked" element={<SwiperStats />} />
        <Route path="profile" element={<SwiperProfile />} />
      </Route>
    </Routes>
  )
}

export default App
