import React, { useState } from "react";
import Cardmodels from "./Cardmodels";
import { toast } from "react-toastify";

const Card = ({ promssed, cart, setCart }) => {
  const [subcribed, setSubcribed] = useState(false);
  const handleSubcribed = () => {
    setSubcribed(true);
    const isFound = cart.find((menu) => menu.id === promssed.id);
    if (isFound) {
      toast.error("data alfknmf");
      return;
    }
    setCart([...cart, promssed]);
    toast.success("items added to card");
  };
  return (
    <div className="shadow-lg rounded-lg overflow-hidden border border-zinc-300 ">
      <div className="h-56 flex relative bg-zinc-100 mx-auto justify-center items-center object-cover">
        <p className="top-5 left-68 absolute bg-red-500 text-white px-4 py-1 rounded-full">
          {" "}
          {promssed.status}
        </p>

        <img className="w-40 h-40" src={promssed.image} alt="" />
      </div>
      <div className="p-2 space-y-3">
        <h2 className="font-bold text-3xl">{promssed.title}</h2>
        <p>{promssed.description}</p>
        <p className="font-bold text-2xl">
          {promssed.price === 0 ? "Free" : `$${promssed.price}/month`}
        </p>
        <button
          onClick={handleSubcribed}
          className="btn bg-red-500 w-full text-white rounded-lg "
        >
          {subcribed ? "subcribed" : "subcribed Now"}
        </button>
      </div>
    </div>
  );
};

export default Card;
