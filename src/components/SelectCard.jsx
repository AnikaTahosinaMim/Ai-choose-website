import React from "react";
import { toast } from "react-toastify";

const SelectCard = ({ cart, setCart }) => {
  const totalprice = cart.reduce((sum, items) => sum + items.price, 0);
  const handleProcced = () => {
    setCart([]);
    toast("All Procced")
  };
  const handleDelete = (items ) => {
    console.log("dekeke");
    const filterArray = cart.filter((c) => c.id !== items.id);
    setCart(filterArray);
    toast.info("delete succesfully")
  };
  console.log(totalprice);
  console.log(cart);
  return (
    <>
      <div>
        {cart.length === 0 ? (
          <p className="text-4xl font-bold text-center justify-center my-6 text-red-500">
            No data entry
          </p>
        ) : (
          <div className="space-y-3 container mx-auto">
            {cart.map((items) => (
              <div
                key={items.id}
                className="border rounded-xl flex justify-between items-center p-2"
              >
                <div className="flex gap-4 items-center">
                  <img className="w-20 h-20" src={items.image} alt="" />
                  <h3 className="text-2xl font-bold">{items.title}</h3>
                </div>
                <p className="text-xl font-bold">${items.price}/month</p>
                <button onClick={() => handleDelete(items)} className="btn ">
                  X
                </button>
              </div>
            ))}

            <div className="bg-black rounded-lg p-4 text-white font-bold text-xl items-center flex justify-between">
              <p>Total</p>
              <p>${totalprice}</p>
            </div>
            <div>
              <button
                onClick={handleProcced}
                className="bg-red-500 rounded-lg  py-4 text-2xl text-white font-bold w-full mb-10"
              >
                Procced to checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SelectCard;
