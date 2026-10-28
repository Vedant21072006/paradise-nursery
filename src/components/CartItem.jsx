import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2, Leaf, CheckCircle2 } from "lucide-react";
import { removeItem, updateQuantity, clearCart } from "../redux/CartSlice.jsx";
import "./Shop.css";

const imageUrl = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=300&q=80`;

export default function CartItem({ onContinueShopping, onHome }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalPlants = items.reduce((sum, item) => sum + item.quantity, 0);
  const shipping = subtotal === 0 || subtotal >= 999 ? 0 : 79;

  const checkout = () => {
    if (items.length) {
      setOrderPlaced(true);
      dispatch(clearCart());
    }
  };

  if (orderPlaced) {
    return <main className="cart-page"><div className="order-success"><span className="success-icon"><CheckCircle2 size={38} /></span><p className="eyebrow">ORDER CONFIRMED</p><h1>Thanks for growing with us.</h1><p>Your demo order has been placed successfully. This student project does not process real payments.</p><button className="primary-button" onClick={() => { setOrderPlaced(false); onContinueShopping(); }}>Continue shopping <ArrowLeft size={17} /></button></div></main>;
  }

  return (
    <main className="cart-page">
      <div className="cart-topline"><button className="back-link" onClick={onContinueShopping}><ArrowLeft size={16} /> Continue shopping</button><span>YOUR BAG / {totalPlants} {totalPlants === 1 ? "ITEM" : "ITEMS"}</span></div>
      <div className="cart-heading"><div><p className="eyebrow"><ShoppingBag size={15} /> YOUR LITTLE GREEN COLLECTION</p><h1>Shopping cart<span>.</span></h1><p>Good choices grow here. Review your plants below.</p></div><div className="cart-leaf-art"><Leaf size={54} strokeWidth={1} /></div></div>

      {items.length === 0 ? <section className="cart-empty"><span><ShoppingBag size={30} /></span><h2>Your cart is taking a little rest.</h2><p>Find a plant that feels right for your space and add it to your collection.</p><button className="primary-button" onClick={onContinueShopping}>Explore plants <ArrowLeft size={17} /></button><button className="text-button" onClick={onHome}>Return home</button></section> :
        <div className="cart-layout">
          <section className="cart-items-panel">
            <div className="cart-table-head"><span>PLANT DETAILS</span><span>QUANTITY</span><span>TOTAL</span></div>
            {items.map((item) => <article className="cart-row" key={item.id}>
              <img className="cart-product-image" src={imageUrl(item.image)} alt={item.name} />
              <div className="cart-product-details"><span className="cart-item-category">{item.category}</span><h3>{item.name}</h3><p>₹{item.price.toLocaleString("en-IN")} each</p><button className="remove-link" onClick={() => dispatch(removeItem(item.id))}><Trash2 size={14} /> Remove</button></div>
              <div className="quantity-control"><button aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}><Minus size={14} /></button><span>{item.quantity}</span><button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}><Plus size={14} /></button></div>
              <strong className="cart-line-total">₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong>
            </article>)}
            <button className="clear-cart-link" onClick={() => dispatch(clearCart())}>Clear cart</button>
          </section>
          <aside className="order-summary">
            <p className="eyebrow">THE TOTAL</p><h2>Order summary</h2>
            <div className="summary-line"><span>Subtotal ({totalPlants} plants)</span><span>₹{subtotal.toLocaleString("en-IN")}</span></div>
            <div className="summary-line"><span>Delivery</span><span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span></div>
            {shipping > 0 && <p className="shipping-note">Add ₹{(999 - subtotal).toLocaleString("en-IN")} more for free delivery.</p>}
            <div className="summary-total"><span>Total</span><strong>₹{(subtotal + shipping).toLocaleString("en-IN")}</strong></div>
            <button className="checkout-button" onClick={checkout}>Place demo order <span>→</span></button>
            <p className="checkout-disclaimer">Demo checkout only — no payment is collected.</p>
            <div className="summary-promise"><Leaf size={17} /><span>Every plant is a new beginning.</span></div>
          </aside>
        </div>
      }
    </main>
  );
}