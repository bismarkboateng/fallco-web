import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer, ArticleDetail, RepLogin } from "./components";
import { Article, Department, Locateclass, Home } from "./pages";
import { useState } from "react";


export default function App() {
  const [isClassRep, setIsClassRep] = useState(true);
  // const []
  return (
    <div>
      <Navbar isClassRep={isClassRep} />
      <div className="app--content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/article-detail" element={<ArticleDetail />} />
          <Route path="/department" element={<Department />} />
          <Route path="/locate-class" element={<Locateclass />} />
          <Route path="/class-rep-login" element={<RepLogin setIsClassRep={setIsClassRep} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
