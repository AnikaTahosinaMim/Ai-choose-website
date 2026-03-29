import { useState } from "react";
import "./App.css";
import Cardmodels from "./components/Cardmodels";
import SelectCard from "./components/SelectCard";
import Card from "./components/Card";
const getmodels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const dataPromised = getmodels();

function App() {
  const [models, setModels] = useState("models");
  const [cart, setCart] = useState([]);
  console.log(cart)
  // console.log(models);
  return (
    <>
      <h2 className="text-2xl font-bold text-center justify-center py-2 text-red-600">
        Hello Ai
      </h2>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Models"
          defaultChecked
          onClick={() => setModels("models")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="cart"
          onClick={() => setModels("cart")}
        />
      </div>
      {models === "models" ? (
        <Cardmodels
          cart={cart}
          setCart={setCart}
          dataPromised={dataPromised}
        ></Cardmodels>
      ) : null}
      {models === "cart" ? <SelectCard setCart={setCart} cart={cart}></SelectCard> : null}
    </>
  );
}

export default App;
