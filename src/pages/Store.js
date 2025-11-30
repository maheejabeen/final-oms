import { useState } from "react";
import { Link } from "react-router-dom";

function Store() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    { id: 1, name: "Digital Thermometer", price: 299, category: "Equipment", image: "🌡️", inStock: true },
    { id: 2, name: "Blood Pressure Monitor", price: 1299, category: "Equipment", image: "🩺", inStock: true },
    { id: 3, name: "Pulse Oximeter", price: 899, category: "Equipment", image: "📱", inStock: false },
    { id: 4, name: "First Aid Kit", price: 599, category: "Safety", image: "🏥", inStock: true },
    { id: 5, name: "Hand Sanitizer 500ml", price: 149, category: "Hygiene", image: "🧴", inStock: true },
    { id: 6, name: "Face Masks (Pack of 50)", price: 199, category: "Safety", image: "😷", inStock: true },
    { id: 7, name: "Vitamin C Tablets", price: 249, category: "Supplements", image: "💊", inStock: true },
    { id: 8, name: "Protein Powder", price: 1499, category: "Supplements", image: "🥤", inStock: true }
  ];

  const categories = ["all", "Equipment", "Safety", "Hygiene", "Supplements"];

  const filteredProducts = products.filter(product => 
    selectedCategory === "all" || product.category === selectedCategory
  );

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    alert(`${product.name} added to cart! 🛒`);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const checkout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! 🛒");
      return;
    }
    alert(`Order placed successfully! 🎉\nTotal: ₹${getTotalPrice()}\nDelivery in 1-2 days`);
    setCart([]);
  };

  return (
    <div className="store-page">
      <h1>🏬 Health & Wellness Store</h1>
      <p>Buy medical equipment, supplements & wellness products</p>

      <div className="store-layout">
        <div className="products-section">
          <div className="category-filter">
            <label>Category:</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">{product.image}</div>
                <h3>{product.name}</h3>
                <p className="category">{product.category}</p>
                <div className="price">₹{product.price}</div>
                <div className={`stock-status ${product.inStock ? 'in-stock' : 'out-stock'}`}>
                  {product.inStock ? '🟢 In Stock' : '🔴 Out of Stock'}
                </div>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                >
                  🛒 Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-section">
          <h3>🛒 Shopping Cart ({cart.length})</h3>
          
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-info">
                    <strong>{item.name}</strong>
                    <span>Qty: {item.quantity}</span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ❌
                  </button>
                </div>
              ))}
              
              <div className="cart-total">
                <strong>Total: ₹{getTotalPrice()}</strong>
              </div>
              
              <button className="checkout-btn" onClick={checkout}>
                💳 Checkout & Order
              </button>
            </div>
          )}

          <div className="store-links">
            <Link to="/feature/medicine" className="link-btn">
              💊 Medicine Store
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;