import { useState } from "react";

function MedicineStore() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const medicines = [
    { id: 1, name: "Paracetamol 500mg", price: 25, category: "Pain Relief", inStock: true, prescription: false },
    { id: 2, name: "Amoxicillin 250mg", price: 120, category: "Antibiotic", inStock: true, prescription: true },
    { id: 3, name: "Vitamin D3", price: 180, category: "Supplements", inStock: true, prescription: false },
    { id: 4, name: "Omeprazole 20mg", price: 95, category: "Digestive", inStock: false, prescription: true },
    { id: 5, name: "Cetirizine 10mg", price: 45, category: "Allergy", inStock: true, prescription: false },
    { id: 6, name: "Metformin 500mg", price: 85, category: "Diabetes", inStock: true, prescription: true }
  ];

  const addToCart = (medicine) => {
    if (medicine.prescription) {
      alert("This medicine requires a prescription. Please consult a doctor first. 👩⚕️");
      return;
    }
    
    const existingItem = cart.find(item => item.id === medicine.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === medicine.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...medicine, quantity: 1 }]);
    }
    alert(`${medicine.name} added to cart! 🛍️`);
  };

  const removeFromCart = (medicineId) => {
    setCart(cart.filter(item => item.id !== medicineId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medicine.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const checkout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! 🛍️");
      return;
    }
    alert(`Order placed successfully! 🎉\nTotal: ₹${getTotalPrice()}\nDelivery in 2-3 hours`);
    setCart([]);
  };

  return (
    <div className="medicine-store">
      <h1>💊 Online Medicine Store</h1>
      <p>Order medicines with fast home delivery</p>

      {/* Search Bar */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search medicines or categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="store-layout">
        {/* Medicines Grid */}
        <div className="medicines-section">
          <h3>📋 Available Medicines</h3>
          <div className="medicines-grid">
            {filteredMedicines.map(medicine => (
              <div key={medicine.id} className="medicine-card">
                <div className="medicine-icon">💊</div>
                <h4>{medicine.name}</h4>
                <p className="category">{medicine.category}</p>
                <div className="price">₹{medicine.price}</div>
                
                <div className="medicine-status">
                  {medicine.prescription && <span className="prescription-badge">📄 Prescription Required</span>}
                  <span className={`stock-status ${medicine.inStock ? 'in-stock' : 'out-stock'}`}>
                    {medicine.inStock ? '🟢 In Stock' : '🔴 Out of Stock'}
                  </span>
                </div>
                
                <button 
                  className="add-to-cart-btn"
                  onClick={() => addToCart(medicine)}
                  disabled={!medicine.inStock}
                >
                  🛍️ Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Shopping Cart */}
        <div className="cart-section">
          <h3>🛍️ Shopping Cart ({cart.length})</h3>
          
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
        </div>
      </div>
    </div>
  );
}

export default MedicineStore;
