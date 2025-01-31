

import React, { useState } from "react";
import { useVideoContext } from "../../Context/VideoContext"; // Import the context
import { Link, useNavigate } from 'react-router-dom';
import SuccessPage from "./Success";

const PlanCards = () => {
  const { selectedPrice, handleSelectedPremium,amount,setAmount,handle } = useVideoContext(); // Get context values
  
  
  const navigate = useNavigate();
  localStorage.setItem("selectedAmount", JSON.stringify(amount));

  
  
  const demoPlans = [
      {
          title: "Fan",
          price: 79,
          validity: "1 month",
          watchDevices: "1",
    },
    {
      title: "Mega Fan",
      price: 99,
      validity: "1 month",
      watchDevices: "4",
    },
    {
        title: "MegaFan",
        price: 999,
        validity: "1 year",
        watchDevices: "4",
    },
];


console.log(amount,"amounttt");
 
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-extrabold text-orange-500 mb-8">
        Choose Your Plan
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoPlans?.map((plan, index) => (
          <div
            key={index}
            className={`bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col gap-4 cursor-pointer transform transition duration-200 ${
              selectedPrice === plan.price
                ? "border-blue-500 scale-105 shadow-xl"
                : "border-gray-200"
            }`}
            onClick={() => setAmount(plan?.price)} // Set selected price on click
          >
            <h2 className="text-xl font-bold text-orange-500">{plan.title}</h2>
            <p className="text-gray-300">
              Price: <span className="font-semibold">${plan.price}</span>
            </p>
            <p className="text-gray-300">
              Validity: <span className="font-semibold">{plan.validity}</span>
            </p>
            <p className="text-gray-300">
              Devices: <span className="font-semibold">{plan.watchDevices}</span>
            </p>
            
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-6">
        <button
          onClick={() => handle()}
          className={`w-80 h-14 text-white font-bold rounded-lg transition duration-200`} 
        >
          Submit
        </button>
   
      </div>
    </div>
  );
};

export default PlanCards;
