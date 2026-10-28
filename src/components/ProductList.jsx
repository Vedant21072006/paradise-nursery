import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingBag, Plus, Check, Leaf, Search, SlidersHorizontal } from "lucide-react";
import { addItem } from "../redux/CartSlice.jsx";
import { plants } from "../data/plants.js";
import "./Shop.css";

const categories = ["All plants", "Easy Care", "Statement Plants", "Trailing Plants", "Flowering Plants"];
const imageUrl = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

export default function ProductList({ onOpenCart }) {
  const [category, setCategory] = useState("All plants");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const filteredPlants = useMemo(() => {
    let result = plants.filter((plant) =>
      (category === "All plants" || plant.category === category) &&
      `${plant.name} ${plant.category}`.toLowerCase().includes(search.toLowerCase())
    );
    if (sort === "low") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "high") result = [...result].sort((a, b) => b.price - a.price);
    return result;
  }, [category, search, sort]);

  return (
    <main className="shop-page">
      <section className="shop-banner">
        <div className="shop-banner-text">
          <p className="eyebrow"><Leaf size={15} /> THE PARADISE COLLECTION</p>
          <h1>Find your kind<br /><em>of green.</em></h1>
          <p>Little leafy companions for every room, routine, and growing journey.</p>
        </div>
        <div className="shop-banner-image" role="img" aria-label="A collection of houseplants" />
      </section>

      <section className="catalog">
        <div className="catalog-heading">
          <div><p className="eyebrow">SHOP OUR PLANTS</p><h2>Bring the outside in.</h2><p className="catalog-subtitle">{filteredPlants.length} plants to help your space thrive</p></div>
          <button className="catalog-cart" onClick={onOpenCart}><ShoppingBag size={18} /> Your cart <span>{cartCount}</span></button>
        </div>

        <div className="catalog-tools">
          <div className="category-tabs" aria-label="Filter by category">
            {categories.map((item) => <button key={item} className={category === item ? "category-tab selected" : "category-tab"} onClick={() => setCategory(item)}>{item}</button>)}
          </div>
          <div className="search-sort">
            <label className="search-box"><Search size={16} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Find a plant..." aria-label="Search plants" /></label>
            <label className="sort-box"><SlidersHorizontal size={15} /><select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort plants"><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></label>
          </div>
        </div>

        {filteredPlants.length === 0 ? <div className="empty-results"><Leaf size={28} /><h3>No plants found</h3><p>Try another name or category.</p><button className="outline-button" onClick={() => { setSearch(""); setCategory("All plants"); }}>Clear filters</button></div> :
          <div className="plant-grid">
            {filteredPlants.map((plant) => {
              const inCart = cart.some((item) => item.id === plant.id);
              return <article className="plant-card" key={plant.id}>
                <div className="plant-image-wrap"><img src={imageUrl(plant.image)} alt={plant.name} loading="lazy" /><span className="plant-category">{plant.category}</span></div>
                <div className="plant-info"><h3>{plant.name}</h3><p>{plant.description}</p><div className="plant-care"><span>☼ {plant.light}</span><span>◷ {plant.water}</span></div>
                  <div className="plant-buy"><strong>₹{plant.price.toLocaleString("en-IN")}</strong><button className={inCart ? "add-button added" : "add-button"} onClick={() => dispatch(addItem(plant))}>{inCart ? <Check size={16} /> : <Plus size={16} />}{inCart ? "Add another" : "Add to cart"}</button></div>
                </div>
              </article>;
            })}
          </div>
        }
      </section>
    </main>
  );
}