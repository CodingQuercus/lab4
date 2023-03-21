//Pages
import Home from "./pages/Home";
import Information from "./pages/Information";
import Team from "./pages/Team";
import Terms from "./pages/Terms";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";
import ProductZen from "./pages/ProductZen";
import ProductMermaid from "./pages/ProductMermaid";
import ProductLoneHowl from "./pages/ProductLoneHowl";
import TestProduct from "./pages/Testproduct"
import Video from "./pages/Video";

import { Route, Routes } from "react-router-dom";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import SearchBox from "./components/SearchBox";
import Container from "./components/Container";

//Styles
import './App.css';

function App() {
  return (
    <Container>
      <Header />
      <Nav />
      <SearchBox />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/information" element={<Information />} />
        <Route path="/team" element={<Team />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productzen" element={<ProductZen />} />
        <Route path="/productmermaid" element={<ProductMermaid />} />
        <Route path="/productlonehowl" element={<ProductLoneHowl />} />
        <Route path="/testproduct" element={<TestProduct />} />
        <Route path="/video" element={<Video />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
