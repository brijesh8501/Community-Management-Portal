// Global imports
import { BrowserRouter, Routes, Route } from "react-router";

// Import layout components
import { SessionLayout } from "./layouts/SessionLayout";
import { NonSessionLayout } from "./layouts/NonSessionLayout";

// Import page components
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route (No Navbar / Auth Layout) */}
        <Route element={<NonSessionLayout />}>
          <Route path="/" element={<Login />} />
        </Route>

        {/* Protected/Dashboard Routes (Wrapped in MainLayout) */}
        <Route element={<SessionLayout />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;