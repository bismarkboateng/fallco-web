import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Article, Department, Locateclass, Home } from "./pages";


export default function App() {
  return (
    <div>
      <Navbar />
      <div className="app--content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="articles/" element={<Article />} />
          <Route path="department/" element={<Department />} />
          <Route path="locate-class/" element={<Locateclass />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
