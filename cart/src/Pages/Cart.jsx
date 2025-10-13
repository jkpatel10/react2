import React from "react";

export default function Cart({ cart, isOpen, toggleCart }) {

  const addQty = (id) => {
    const updated = cart.map(item =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    localStorage.setItem("cart", JSON.stringify(updated));
    window.location.reload(); 
  };

  const subQty = (id) => {
    const updated = cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 0) } : item
    ).filter(item => item.quantity > 0);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.location.reload();
  };

  let total = 0;
  cart.map(item => total += (item.salePrice || item.regularPrice) * (item.quantity || 1));

  return (
    <div className={`fixed top-0 right-0 w-80 z-1 bg-white h-full shadow-lg transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div className="flex justify-between p-4 border-b">
        <h2 className="font-bold text-[#4b2e05]">Your Cart</h2>
        <button onClick={toggleCart}>✕</button>
      </div>

      <div className="p-4 overflow-y-auto h-[75vh]">
        {cart.length === 0 ? (
            <div>
              <img src="src/assets/empty.jpg" className="h-70" alt=""/>
              <p className="text-center text-gray-500 mt-10">Your cart is empty 🛍️</p>
          </div>
        ) : (
          cart.map(item => (
            <div key={item.id} className="flex items-center gap-3 border-b py-2">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">₹{item.salePrice || item.regularPrice}</p>
                <div className="flex gap-2 mt-1">
                  <button onClick={() => subQty(item.id)} className="px-2 bg-[#654321] text-white rounded">-</button>
                  <span>{item.quantity || 1}</span>
                  <button onClick={() => addQty(item.id)} className="px-2 bg-[#654321] text-white rounded">+</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="border-t p-4">
          <div className="flex justify-between font-semibold text-[#4b2e05]">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>
          <button className="mt-3 w-full bg-[#654321] text-white py-2 rounded-lg hover:bg-[#4b2e05]">Checkout 🛍️</button>
        </div>
      )}
    </div>
  );
}
