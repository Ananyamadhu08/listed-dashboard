import { Route, Routes } from 'react-router-dom';
import { Home, Login } from './pages';

function App() {
  return (
    <div className="App bg-[#f5f5f5]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
