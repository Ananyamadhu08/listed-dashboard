import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Home, Login } from './pages';
import { PrivateRoute } from './routes/PrivateRoutes';

function App() {
  return (
    <div className="App bg-[#f5f5f5] h-screen">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
