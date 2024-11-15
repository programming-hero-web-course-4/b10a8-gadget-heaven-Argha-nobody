import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const Dashboard = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [sortOrder, setSortOrder] = useState('asc'); 

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  const handlePurchase = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSort = () => {
    const sortedItems = [...cartItems].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setCartItems(sortedItems);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); 
  };

  return (
    <div>
      <div className="text-center h-[300px] w-[1350px] bg-purple-700 static">
        <h1 className="text-5xl text-white py-5 font-semibold">Dashboard</h1>
        <p className="text-gray-300">
          Explore the latest gadgets that will take your experience to the next level.
        </p>

        <div className="mt-5">
          <button className="mx-3 hover:bg-black rounded-full border-2 w-36 h-10 text-lg mt-5 bg-white text-purple-700 font-bold">
            Cart
          </button>
          <button className="hover:bg-black rounded-full border-2 w-36 h-10 text-lg mt-5 bg-white text-purple-700 font-bold">
            Wishlist
          </button>
        </div>
      </div>

      <div className="flex justify-between mt-10 px-10">
        <h1 className="font-bold text-3xl">Cart</h1>

        <div className="flex justify-between">
          <h2 className="font-bold text-3xl">Total cost:</h2>
          <button
            onClick={handleSort}
            className="mx-3 hover:bg-black rounded-full border-2 w-36 h-10 text-lg bg-white text-purple-700 font-bold"
          >
            Sort by Price
          </button>
          <button
            onClick={handlePurchase}
            className="hover:bg-black rounded-full w-36 h-10 text-lg bg-purple-700 text-white font-bold"
          >
            Purchase
          </button>
        </div>
      </div>

      <div>
        {cartItems.length > 0 ? (
          <ul className="grid grid-cols-1 ml-10">
            {cartItems.map((item, index) => (
              <li className="flex" key={index}>
                <div>
                  <img
                    className="h-[80px] w-[110px] p-1"
                    src={item.product_image}
                    alt={item.product_title}
                  />
                </div>

                <div className="text-center">
                  <h3>{item.product_title}</h3>
                  <p>Price: ${item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      {showModal && <Modal message="Purchase Successful!" onClose={handleCloseModal} />}
    </div>
  );
};

export default Dashboard;
