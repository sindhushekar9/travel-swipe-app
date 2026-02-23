import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './shared/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Destinations from './pages/Destinations';

function App() {

  return (
    <Routes>
      {/* Home page without Layout */}
      <Route path="/" element={<Home />} />

      {/* All other pages with Layout */}
      <Route path="/" element={<Layout />}>
        <Route path="profile" element={<Profile />} />
        <Route path="destinations" element={<Destinations />} />
      </Route>
    </Routes>
  )
}

export default App
