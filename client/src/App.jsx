import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <main className="container mx-auto px-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/users" element={<UsersPage />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
