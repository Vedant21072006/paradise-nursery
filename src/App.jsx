import { useState } from "react";
import { Leaf, ShoppingBag, Sprout, ArrowRight } from "lucide-react";
import AboutUs from "./components/AboutUs.jsx";
import ProductList from "./components/ProductList.jsx";
import CartItem from "./components/CartItem.jsx";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");

  const startShopping = () => {
    setPage("shop");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <button className="brand" onClick={() => setPage("home")} aria-label="Paradise Nursery home">
          <span className="brand-mark"><Leaf size={22} /></span>
          <span>paradise<span className="brand-light">nursery</span></span>
        </button>
        <nav className="main-nav" aria-label="Main navigation">
          <button className={page === "home" ? "nav-link active" : "nav-link"} onClick={() => setPage("home")}>Home</button>
          <button className={page === "shop" ? "nav-link active" : "nav-link"} onClick={startShopping}>Shop plants</button>
          <button className="nav-link" onClick={() => { setPage("home"); setTimeout(() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }), 0); }}>About us</button>
        </nav>
        <button className="cart-nav" onClick={() => setPage("cart")} aria-label="Open shopping cart">
          <ShoppingBag size={19} /><span>Cart</span>
        </button>
      </header>

      {page === "home" && (
        <>
          <main>
            <section className="hero">
              <div className="hero-overlay" />
              <div className="hero-content">
                <div className="eyebrow"><Sprout size={16} /> GROW SOMETHING GOOD</div>
                <h1>Make room for<br /><em>a little green.</em></h1>
                <p>Thoughtfully chosen plants to bring calm, color, and life into your everyday spaces.</p>
                <button className="primary-button" onClick={startShopping}>Get Started <ArrowRight size={18} /></button>
                <div className="hero-note"><span className="note-dot" /> Plants for beginners and green thumbs alike</div>
              </div>
              <div className="hero-caption">A HOME THAT GROWS WITH YOU</div>
            </section>
            <section className="intro-strip">
              <div><span className="strip-number">01</span><p><strong>Find your green</strong><br />Plants for every corner and every kind of care routine.</p></div>
              <div><span className="strip-number">02</span><p><strong>Grow with confidence</strong><br />Simple picks to help your plant journey thrive.</p></div>
              <div><span className="strip-number">03</span><p><strong>Make it yours</strong><br />Little living details make a space feel like home.</p></div>
            </section>
            <div id="about"><AboutUs /></div>
            <section className="home-feature">
              <div><p className="eyebrow">YOUR NEXT FAVORITE PLANT</p><h2>A fresh start<br />can be leafy.</h2></div>
              <button className="primary-button" onClick={startShopping}>Explore the collection <ArrowRight size={18} /></button>
            </section>
          </main>
        </>
      )}

      {page === "shop" && <ProductList onOpenCart={() => setPage("cart")} />}
      {page === "cart" && <CartItem onContinueShopping={startShopping} onHome={() => setPage("home")} />}

      <footer className="site-footer">
        <button className="footer-brand" onClick={() => setPage("home")}><Leaf size={18} /> Paradise Nursery</button>
        <span>Grow at your own pace. © {new Date().getFullYear()} Paradise Nursery</span>
        <button className="footer-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top ↑</button>
      </footer>
    </div>
  );
}