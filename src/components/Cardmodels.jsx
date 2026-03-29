import React, { use } from "react";
import Card from "./Card";

const Cardmodels = ({ dataPromised,cart,setCart }) => {
  const convertPromised = use(dataPromised);
  console.log(convertPromised);
  return (
    <>
      <div>
        <div className="text-center font-bold justify-center py-4">
          <h2 className="text-4xl text-red-500">Choose your AI models</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
            perferendis?
          </p>
        </div>
        <div className="space-y-4 grid  md:grid-cols-3 gap-6 container mx-auto px-3">
          {convertPromised.map((promssed,index) => (
            <Card cart={cart} setCart = {setCart} promssed={promssed} key={index}></Card>
          ))}
        </div>
      </div>
      ;
    </>
  );
};

export default Cardmodels;
